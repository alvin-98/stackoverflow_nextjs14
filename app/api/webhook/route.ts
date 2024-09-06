/* eslint-disable camelcase */
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.action";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  if (evt.type === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } =
      evt.data;

    const mongoUser = await createUser({
      clerkId: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name || ""}`,
      username: username!,
      picture: image_url,
    });

    return NextResponse.json({ message: "User created", user: mongoUser });
  }

  if (evt.type === "user.updated") {
    const { id, email_addresses, image_url, first_name, last_name, username } =
      evt.data;

    const mongoUser = await updateUser({
      clerkId: id,
      updateData: {
        email: email_addresses[0].email_address,
        name: `${first_name} ${last_name || ""}`,
        username: username!,
        picture: image_url,
      },
      path: `/profile/${id}`,
    });
    return NextResponse.json({ message: "User updated", user: mongoUser });
  }

  if (evt.type === "user.deleted") {
    const { id } = evt.data;

    const deletedUser = await deleteUser({ clerkId: id! });

    return NextResponse.json({ message: "User deleted", user: deletedUser });
  }

  return new Response("", { status: 200 });
}

import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  password?: string;
  email: string;
  joinedAt: Date;
  bio?: string;
  location?: string;
  portfolioWebsite?: string;
  picture?: string;
  saved: Schema.Types.ObjectId[];
  reputation?: number;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
  bio: { type: String, default: "" },
  location: { type: String, default: "" },
  website: { type: String, default: "" },
  picture: { type: String, default: "" },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  reputation: { type: Number, default: 0 },
});

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};

export const formatBigNumber = (input: number | string): string => {
  const num = typeof input === "string" ? parseFloat(input) : input;

  if (isNaN(num)) {
    throw new Error("Invalid input: must be a number or a numeric string");
  }

  const absNum = Math.abs(num);
  const sign = num < 0 ? "-" : "";

  if (absNum >= 1e9) {
    return sign + (absNum / 1e9).toFixed(1) + "B";
  } else if (absNum >= 1e6) {
    return sign + (absNum / 1e6).toFixed(1) + "M";
  } else if (absNum >= 1e3) {
    return sign + (absNum / 1e3).toFixed(1) + "K";
  } else {
    return sign + absNum.toString();
  }
};

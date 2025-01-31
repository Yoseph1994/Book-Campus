import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";
import { Session } from "next-auth";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getInitialNameFromSession(session: Session) {
  if (!session || !session.user || !session.user.email) {
    return "";
  }

  const email = session.user.email;
  const emailNamePart = email.split("@")[0];
  const nameParts = emailNamePart.split(".");
  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return initials;
}

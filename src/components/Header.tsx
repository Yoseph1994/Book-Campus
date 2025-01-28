"use client";
import { cn, getInitialNameFromSession } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface Session {
  user?: {
    email?: string;
    id?: string;
  };
  expires?: string;
}
export default function Header({ session }: { session: Session }) {
  const path = usePathname();
  console.log(getInitialNameFromSession(session));
  console.log(session);
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base curspor-pointer capitalize",
              path === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link>
        </li>
        <li>
          <Link href="profile">
            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback className="bg-amber-100 text-gray-500">
                {getInitialNameFromSession(session)}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
        <li>
          <Link href="/authors">Authors</Link>
        </li>
      </ul>
    </header>
  );
}

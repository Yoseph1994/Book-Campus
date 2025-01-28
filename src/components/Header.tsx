"use client";
import { cn, getInitialNameFromSession } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
<<<<<<< HEAD

=======
import { Button } from "./ui/button";
import { signOutFn } from "@/lib/actions/auth";

interface Session {
  user?: {
    email?: string;
    id?: string;
  };
  expires?: string;
}

>>>>>>> ba6e8db5c2c8cc2a0e594bd1287fd3535fddb94d
export default function Header({ session }: { session: Session }) {
  const path = usePathname();
  return (
    <header className="my-10 flex justify-between items-center gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              path === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link>
        </li>
        <li>
          <Link
            href="/authors"
            className={cn(
              "text-base cursor-pointer capitalize",
              path === "/authors" ? "text-light-200" : "text-light-100"
            )}
          >
            Authors
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback className="text-black">
                {getInitialNameFromSession(session)}
              </AvatarFallback>
            </Avatar>
          </Link>
<<<<<<< HEAD
=======
        </li>
        <li>
          <Button onClick={signOutFn} className="text-base">
            Sign Out
          </Button>
>>>>>>> ba6e8db5c2c8cc2a0e594bd1287fd3535fddb94d
        </li>
      </ul>
    </header>
  );
}

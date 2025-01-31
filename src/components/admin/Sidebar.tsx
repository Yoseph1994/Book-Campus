"use client";
import { adminSideBarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="admin-sidebar">
      <div className="">
        <div className="logo">
          <Image
            src="/icons/admin/logo.svg"
            width={37}
            height={37}
            alt="logo"
          />
          <h1>BookWise</h1>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          {adminSideBarLinks.map((link) => {
            const isSelected =
              (link.route === "admin" &&
                pathName.includes(link.route) &&
                link.route.length > 1) ||
              pathName === link.route;
            return (
              <Link href={link.route} key={link.text}>
                <div
                  className={cn(
                    "link",
                    isSelected && "bg-primary-admin shadow-sm"
                  )}
                >
                  <div className="relative size-5">
                    <Image
                      src={link.img}
                      fill
                      alt={link.text}
                      className={`${isSelected} ? "brightness-0 invert" : "object-contain"}`}
                    />
                  </div>
                  <p
                    className={cn(isSelected ? "text-white" : "text-dark-100")}
                  >
                    {link.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

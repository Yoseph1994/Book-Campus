import { auth } from "@/auth";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

import React from "react";

async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/sigin");
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl text-center">
        <Header session={session} />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
}

export default Layout;

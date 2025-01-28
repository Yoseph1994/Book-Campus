import { auth } from "@/auth";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

<<<<<<< HEAD
async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/signin");
=======
import React from "react";

async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/sigin");
>>>>>>> ba6e8db5c2c8cc2a0e594bd1287fd3535fddb94d
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

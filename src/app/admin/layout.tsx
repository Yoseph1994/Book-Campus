import { auth } from "@/auth";
import { redirect } from "next/navigation";
import "@/styles/admin.css";
import Sidebar from "@/components/admin/Sidebar";

async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar session={session} />
      <div className="admin-container">
        <p>Header</p>
        {children}
      </div>
    </main>
  );
}

export default layout;

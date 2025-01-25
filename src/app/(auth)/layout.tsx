import Image from "next/image";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src="/icons/logo.svg" alt="Logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">BookWise</h1>
          </div>
          <div className="">{children}</div>
        </div>
      </section>

      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          height={1000}
          width={1000}
          alt="auth-illustration"
          className="size-full object-cover"
        />
      </section>
    </main>
  );
}

export default layout;

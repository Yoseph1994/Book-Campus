"use server";

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { usersTable } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result?.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Signin with credentials Error");
    return { success: false, error: "Credentials Signin Error" };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password, universityCard, universityId } = params;

  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  if (user.length > 0) {
    return { succes: false, error: "User already exists" };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(usersTable).values({
      fullName,
      email,
      password: hashedPassword,
      universityCard,
      universityId,
    });
    return { succes: true };
  } catch (error) {
    console.log(error, "SignUP Error");
    return { succes: false, error: "Signup error" };
  }
};

// 2.37

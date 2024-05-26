"use server";

import { BASE_URL } from "@/config/url";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function submitSignin(formData: FormData) {
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    body: JSON.stringify(rawFormData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to register");
  }
  redirect("/login");
}

interface Login {
  message: string;
  token: string;
}

export async function submitLogin(formData: FormData) {
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify(rawFormData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to register");
  }
  const data = await response.json();
  console.log(data);
  cookies().set("token", data.token as Login["token"]);
  redirect("/");
}

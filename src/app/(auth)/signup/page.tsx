"use client";
import React, { useTransition } from "react";
import { submitSignin } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Signin = () => {
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (formData: FormData) => {
    startTransition(() => {
      submitSignin(formData);
    });
  };
  return (
    <form
      action={onSubmit}
      className="w-screen h-screen flex items-center justify-center bg-black text-white"
    >
      <div className="max-w-96 w-full flex flex-col gap-10">
        <h1>
          Sign Up |{" "}
          <span className="text-sm text-gray-300">FrontEnd Explorer</span>
        </h1>
        <Input name="username" type="username" placeholder="username" />
        <Input name="password" type="password" placeholder="password" />
        <Button
          disabled={isPending}
          type="submit"
          variant="secondary"
          className="uppercase"
        >
          {isPending ? "Submitting..." : "Sign Up"}
        </Button>
      </div>
    </form>
  );
};

export default Signin;

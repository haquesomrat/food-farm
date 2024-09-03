"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialSignIn from "@/components/global/SocialSignIn";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.ok) {
      event.target.reset();
      router.push("/");
    }
  };
  return (
    <div className="max-w-[1390px] mx-auto py-8 lg:py-16 px-4">
      <div className="max-w-lg mx-auto border p-4">
        <form onSubmit={handleLogin}>
          <h4 className="text-3xl text-center mb-8">Login Page</h4>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <Input
            className="mt-4 mb-8"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <Input
            className="mt-4 mb-8"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="text-center mt-8">
          <p>Or Login with</p>
          <SocialSignIn />
          <p className="mt-4 font-medium">
            No Account?{" "}
            <Link
              className="text-primary underline hover:no-underline"
              href={"/signup"}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

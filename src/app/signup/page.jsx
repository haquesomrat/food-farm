"use client";
import SocialSignIn from "@/components/global/SocialSignIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      img: event.target.img.value,
      role: "user",
    };
    try {
      const resp = await fetch("https://food-farm-inj.netlify.app/signup/api", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      });
      if (resp.ok) {
        // call swal
        console.log("User created successfully");
        event.target.reset();
      } else {
        const errorData = await resp.json();
        // call swal
        console.error("Sign up failed:", errorData);
      }
    } catch (error) {
      console.log("An error occured", error);
    }
  };
  return (
    <div className="max-w-[1390px] mx-auto py-8 lg:py-16 px-4">
      <div className="max-w-lg mx-auto border p-4">
        <form onSubmit={handleSignUp}>
          <h4 className="text-3xl text-center mb-8">Sign Up Page</h4>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <Input
            className="mt-4 mb-8"
            type="text"
            placeholder="Enter Name"
            name="name"
            required
          />
          <label htmlFor="img">
            <b>Image</b>
          </label>
          <Input
            className="mt-4 mb-8"
            type="text"
            placeholder="Enter Image"
            name="img"
            required
          />
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
          <Button className="w-full">Signup</Button>
        </form>
        <div className="text-center mt-8">
          <p>Or Signup with</p>
          <SocialSignIn />
          <p className="mt-4 font-medium">
            Already have an account?{" "}
            <Link
              className="text-primary underline hover:no-underline"
              href={"/login"}
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

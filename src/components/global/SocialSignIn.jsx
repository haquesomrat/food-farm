"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
  const session = useSession();
  const router = useRouter();
  const handleSocialSignin = async (provider) => {
    const res = await signIn(provider, { redirect: false });
  };
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [router, session.status]);

  return (
    <div className="flex justify-around items-center mt-4">
      <button
        onClick={() => handleSocialSignin("google")}
        className="text-2xl hover:scale-110 duration-300"
      >
        <FcGoogle />
      </button>
      <button
        onClick={() => handleSocialSignin("github")}
        className="text-2xl text-primary hover:scale-110 duration-300"
      >
        <FaGithub />
      </button>
      {/* <button className="text-2xl text-primary hover:scale-110 duration-300">
        <FaFacebook />
      </button> */}
    </div>
  );
};

export default SocialSignIn;

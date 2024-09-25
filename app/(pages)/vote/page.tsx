import React from "react";
import VoteForm from "./components/vote-form";
import { getUserByToken } from "@/actions/user";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Home } from "lucide-react";
import Image from "next/image";

const Vote = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token-gsoe");

  return (
    <section className="min-h-screen" id="vote-bg">
      <div className="flex justify-center items-center w-full aspect-square mb-8">
        <Image
          src="/assets/Images/Vote-hero-art.png"
          alt="logo"
          width={0}
          height={0}
          sizes="auto"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <VoteForm />
      </div>
    </section>
  );
};

export default Vote;

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

  if (!token) {
    return (
      <div className="text-white text-center text-2xl font-semibold bg-yellow-400 min-h-screen flex justify-center items-center">
        <div>
          <h4 className="text-orange-900 text-center text-2xl font-semibold mb-4 mx-5">
            Please fill the form to vote by clicking the button below
          </h4>
          <ArrowDown size={48} className="mb-2 animate-bounce mx-auto" />
          <Link href="/">
            <Button className="shadow-md shadow-slate-900/30" type="button">
              Home <Home size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const { error, success, data } = await getUserByToken(token.value);

  if (error) {
    return (
      <div className="text-white text-center text-2xl font-semibold bg-yellow-400 min-h-screen flex justify-center items-center">
        <div>
          <h4 className="text-orange-900 text-center text-2xl font-semibold mb-4">
            {error}
          </h4>
          <Link href="/">
            <Button className="shadow-md shadow-slate-900/30" type="button">
              Home <Home size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen" id="vote-bg">
      {success && data && (
        <>
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
            <VoteForm data={data} />
          </div>
        </>
      )}
    </section>
  );
};

export default Vote;

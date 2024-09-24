import Image from "next/image";
import React from "react";
import VoteForm from "./components/vote-form";
import { getUserByToken } from "@/actions/user";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Home } from "lucide-react";

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
    <section className="min-h-screen pt-12 " id="vote-bg">
      {success && data && (
        <>
          <div className="flex justify-center">
            <div id="red-smoke" />
          </div>
          <div className="flex max-[370px]:flex-wrap-reverse justify-center items-center gap-5 p-4">
            <div className="min-[370px]:max-w-[135px] mt-16 space-y-2 max-[370px]:w-full">
              <p
                id="voteTitleText"
                className="text-white text-4xl font-semibold"
              >
                VOTE NOW!
              </p>
              <p className="text-orange-900 merriWeather text-xs text-nowrap">
                Which is your top pick ?
              </p>
              <div className="text-xs italic">
                <p className="">Vote for the</p>
                <ul className="font-semibold list-disc ps-5 text-[10px] mt-1">
                  <li>Best Idol</li>
                  <li>Best Art and Ambiance</li>
                  <li>Best Concept</li>
                </ul>
              </div>
            </div>
            <div className="mt-16 w-[250px]">
              <Image
                src="/assets/Images/Vote-Art.png"
                alt="texture-yellow"
                width={0}
                height={0}
                sizes="auto"
                className="mix-blend-darken w-full h-[250px] object-cover object-center"
              />
            </div>
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

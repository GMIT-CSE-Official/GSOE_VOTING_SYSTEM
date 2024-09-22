import Image from "next/image";
import React from "react";
import VoteForm from "./components/vote-form";
import DetailsForm from "./components/details-form";
import { getUserByToken } from "@/actions/user";

const Vote = async ({
  searchParams,
}: {
  searchParams: {
    token: string;
  };
}) => {
  const { error, success, data } = await getUserByToken(searchParams.token);

  if (!searchParams.token || error) {
    return (
      <div className="z-[9999] fixed top-0 left-0 bottom-0 right-0 bg-white">
        <div className="relative bg-black/50 h-screen w-screen flex justify-center items-center">
          <div className="bg-yellow-400 relative p-4 rounded-md mx-5 w-full shadow-md overflow-hidden max-w-sm">
            <div id="texture-yellow" />
            <div className="relative">
              <h4 className="text-xl font-bold text-orange-900">
                Enter your details:
              </h4>
              <p className="text-sm text-orange-900 italic">
                Please enter your details carefully. Any inappropriate
                information may lead to disqualification.
              </p>
              <DetailsForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (success && data) {
    return (
      <section className="min-h-screen pt-12 " id="vote-bg">
        <div id="red-smoke" />
        <div className="flex max-[380px]:flex-wrap-reverse justify-center items-center gap-5 p-4">
          <div className="max-w-[135px] mt-16 space-y-2">
            <p id="voteTitleText" className="text-white text-3xl font-semibold">
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
          <VoteForm />
        </div>
      </section>
    );
  }
};

export default Vote;

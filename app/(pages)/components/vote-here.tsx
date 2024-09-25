import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const VoteHere = () => {
  return (
    <>
      {/* Vote Here section */}
      <div className="bg-yellow-400 p-4 mx-5 rounded-xl relative shadow-logo mt-14 mb-8">
        <div id="texture-yellow" />

        {/* Dhunichi with smoke animation */}
        <Image
          src="/gif/Dhunuchi-smoke.gif"
          alt="texture-yellow"
          width={120}
          height={100}
          className="absolute top-0 right-2 -translate-y-full z-20 mix-blend-screen"
        />
        <Image
          src="/assets/dhunuchi.png"
          alt="texture-yellow"
          width={70}
          height={300}
          className="absolute top-4 right-6 -translate-y-1/2 z-20"
        />

        <div className="border border-orange-900  p-4 rounded-xl relative">
          <h4 className="text-center text-orange-900 font-bold text-lg merriWeather">
            Vote Here!!
          </h4>
          <h1 className="text-3xl font-bold text-center text-orange-900 edosz">
            GSOE AWARDS 2024
          </h1>
          <div className="flex justify-center items-center space-x-2 mt-2 ">
            <Button type="button" asChild>
              <Link
                href={"/vote"}
                className="flex items-center shadow-md shadow-slate-900/30"
              >
                Let&apos;s Go
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoteHere;

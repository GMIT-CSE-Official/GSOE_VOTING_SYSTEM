"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import DetailsForm from "../vote/components/details-form";

const VoteHere = () => {
  const [showForm, setShowForm] = React.useState(false);

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
          <div className="flex justify-center items-center space-x-2 mt-2">
            <Button
              className="shadow-md shadow-slate-900/30"
              type="button"
              onClick={() => setShowForm(true)}
            >
              Let&apos;s Go
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      {showForm && (
        <div
          className="fixed min-h-screen top-0 left-0 right-0 bottom-0 bg-black/70 z-[9999] flex justify-center items-center"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-yellow-400 relative p-4 rounded-md w-full shadow-logo overflow-hidden max-w-[350px] mb-14"
            onClick={(e) => e.stopPropagation()}
          >
            <div id="texture-yellow" />
            <div className="relative">
              <h4 className="text-xl font-bold text-black mb-2">
                Enter your details:
              </h4>
              <p className="text-xs font-semibold text-orange-900 italic leading-4 ">
                Please enter your details carefully. Any inappropriate
                information may lead to disqualification.
              </p>
              <DetailsForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VoteHere;

import AnimateLogo from "@/components/ui/animated-logo";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import DashedSeparator from "@/components/ui/dashed-separator";
import SponsorSection from "@/components/ui/sponsor-section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="min-h-screen pt-12 " id="home-bg">
      <div id="fog" />
      <div className="flex justify-center items-center">
        <div className="py-6 w-[300px] h-[335px]">
          <AnimateLogo />
        </div>
      </div>
      <div className="relative">
        {/* Ticket Section */}
        <div
          className="relative  p-3 pt-6 pb-8 rounded-lg mx-5 mb-5"
          id="ticketComponent"
        >
          <div className="border rounded-lg px-1 py-2 border-orange-900 text-center relative">
            <h4 className="text-center text-orange-900 font-bold text-base merriWeather">
              Participate and stand a chance to win a
            </h4>
            <span
              className="text-white text-center text-lg font-semibold mt-1 block"
              id="ticketTitleText"
            >
              3-Night, 4-Day Dream Getaway to
            </span>
            <p className="text-center text-2xl font-bold edosz text-orange-900 mt-2">
              Bali, Indonesia
            </p>
            <DashedSeparator />
            <div className="overflow-hidden p-5 flex justify-center items-center scale-[1.2]">
              <Carousel />
            </div>
          </div>
        </div>

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
              <Link href="/vote">
                <Button className="shadow-md shadow-slate-900/30">
                  Let&apos;s Go
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Sponsor Section */}
        <SponsorSection />
      </div>
    </section>
  );
};

export default page;

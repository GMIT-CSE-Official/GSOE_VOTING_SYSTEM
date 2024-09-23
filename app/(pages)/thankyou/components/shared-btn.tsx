"use client";

import { Button } from "@/components/ui/button";
import { Share2Icon } from "lucide-react";
import React from "react";

const SharedBtn = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join the Celebration of GSOE Durga Puja Awards 2024!",
          text: "I've just cast my vote for the best in this year's Durga Puja celebrations. Vote now and stand a chance to win a 3-Night, 4-Day Dream Getaway to Bali, Indonesia!",
          url: process.env.NEXT_PUBLIC_FRONTEND_URL, // Use the current page URL
        });
        console.log("Content shared successfully.");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <>
      <Button
        type="button"
        size={"lg"}
        className="shadow-md shadow-slate-900/30 w-1/2 bg-white text-red-600 font-semibold hover:bg-yellow-400 hover:text-red-600 "
        onClick={handleShare}
      >
        Share
        <Share2Icon size={18} className="ms-2 " />
      </Button>
    </>
  );
};

export default SharedBtn;

"use client";

import { Button } from "@/components/ui/button";
import { ShareIcon } from "lucide-react";
import React from "react";

const SharedBtn = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "Take a look at this awesome content.",
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
      <Button type="button" onClick={handleShare}>
        Share
        <ShareIcon size={18} className="ms-2" />
      </Button>
    </>
  );
};

export default SharedBtn;

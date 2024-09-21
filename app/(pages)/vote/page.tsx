import React from "react";
import DetailsForm from "./components/details-form";

const Vote = ({
  searchParams,
}: {
  searchParams: {
    token: string;
  };
}) => {
  if (!searchParams.token) {
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

  return <div></div>;
};

export default Vote;

import React from "react";
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
      <div>
        <h4>
          Thank you for voting, {data.name}! Your vote has been successfully
          submitted.
        </h4>
      </div>
    );
  }
};

export default Vote;

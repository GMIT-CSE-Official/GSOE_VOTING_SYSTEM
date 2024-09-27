"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import React from "react";
import Carousel from "./carousel";

import DetailsForm from "./details-form";

export const voteSchema = z
  .object({
    bestIdol: z
      .string()
      .optional()
      .nullable()
      .refine(
        (v) => {
          if (v === "") return true;
          if (v?.length) {
            return v.length >= 3;
          }
          return false;
        },
        {
          message: "Please enter at least 3 characters",
        }
      ),
    bestArtAndAmbience: z
      .string()
      .optional()
      .nullable()
      .refine(
        (v) => {
          if (v === "") return true;
          if (v?.length) {
            return v.length >= 3;
          }
          return false;
        },
        {
          message: "Please enter at least 3 characters",
        }
      ),
    bestConcept: z
      .string()
      .optional()
      .nullable()
      .refine(
        (v) => {
          if (v === "") return true;
          if (v?.length) {
            return v.length >= 3;
          }
          return false;
        },
        {
          message: "Please enter at least 3 characters",
        }
      ),
    sherarShera: z
      .string()
      .optional()
      .nullable()
      .refine(
        (v) => {
          if (v === "") return true;
          if (v?.length) {
            return v.length >= 3;
          }
          return false;
        },
        {
          message: "Please enter at least 3 characters",
        }
      ),
  })
  .refine(
    (data) =>
      data.bestIdol?.trim() ||
      data.bestArtAndAmbience?.trim() ||
      data.bestConcept?.trim() ||
      data.sherarShera?.trim(),
    {
      message: "At least one field must be filled",
      path: ["bestIdol"],
    }
  );

const bestConceptImages = [
  {
    src: "/assets/Images/Vote-concept-3.png",
    alt: "Logo",
  },
  {
    src: "/assets/Images/Vote-concept-4.png",
    alt: "Logo",
  },
  {
    src: "/assets/Images/Vote-concept-1.png",
    alt: "Logo",
  },
];

const bestArtAndAmbienceImages = [
  {
    src: "/assets/Images/Vote-art-3.png",
    alt: "Logo",
  },
  {
    src: "/assets/Images/Vote-art-4.png",
    alt: "Logo",
  },
  {
    src: "/assets/Images/Vote-art-1.png",
    alt: "Logo",
  },
];

const bestIdolImages = [
  {
    src: "/assets/Images/Vote-idol-3.png",
    alt: "Logo",
  },
  {
    src: "/assets/Images/Vote-idol-4.png",
    alt: "Logo",
  },
  {
    src: "/assets/Images/Vote-Idol-1.png",
    alt: "Logo",
  },
];

const sherarSheraImages = [
  {
    src: "/assets/Images/Vote-concept-2.png",
    alt: "Logo",
  },
  {
    src: "/assets/Images/Vote-art-2.png",
    alt: "Logo",
  },
  {
    src: "/assets/Images/Vote-Idol-2.png",
    alt: "Logo",
  },
];

const VoteForm = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof voteSchema>>({
    resolver: zodResolver(voteSchema),
    defaultValues: {
      bestIdol: "",
      bestArtAndAmbience: "",
      bestConcept: "",
      sherarShera: "",
    },
  });

  async function onSubmit(values: z.infer<typeof voteSchema>) {
    setIsLoading(true);
    try {
      localStorage.setItem("vote-values", JSON.stringify(values));
      setShowDetails(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred");
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full px-5 max-w-sm pb-8"
        >
          <div>
            <FormField
              control={form.control}
              name="bestIdol"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Best Idol</FormLabel>
                  <FormControl className="w-[280px] mx-auto ">
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Type Here"
                    />
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <div className="border-[15px] border-orange-900 mt-4 rounded-lg">
              <Carousel images={bestIdolImages} />
            </div>
          </div>
          <div>
            <FormField
              control={form.control}
              name="bestArtAndAmbience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Best Art and Ambience</FormLabel>
                  <FormControl className="w-[280px] mx-auto ">
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Type Here"
                    />
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <div className="border-[15px] border-orange-900 mt-4 rounded-lg">
              <Carousel images={bestArtAndAmbienceImages} />
            </div>
          </div>
          <div>
            <FormField
              control={form.control}
              name="bestConcept"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Best Concept</FormLabel>
                  <FormControl className="w-[280px] mx-auto ">
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Type Here"
                    />
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <div className="border-[15px] border-orange-900 mt-4 rounded-lg">
              <Carousel images={bestConceptImages} />
            </div>
          </div>
          <div>
            <FormField
              control={form.control}
              name="sherarShera"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sera - r - Sera</FormLabel>
                  <FormControl className="w-[280px] mx-auto">
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Type Here"
                    />
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <div className="border-[15px] border-orange-900 mt-4 rounded-lg">
              <Carousel images={sherarSheraImages} />
            </div>
          </div>
          {error && (
            <div className="text-destructive text-sm bg-red-500/30 flex items-center p-2 rounded-md gap-2 font-semibold">
              <AlertCircle size={20} />
              {error}
            </div>
          )}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="flex gap-2 shadow-md shadow-slate-900/30"
            >
              Submit
              <ArrowRight size={20} />
            </Button>
          </div>
        </form>

        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
            <Loader2 className="animate-spin text-white w-12 h-12" />
          </div>
        )}
      </Form>
      {showDetails && (
        <div
          className="fixed min-h-screen top-0 left-0 right-0 bottom-0 bg-black/70 z-[9999] flex justify-center items-center"
          onClick={() => setShowDetails(false)}
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

export default VoteForm;

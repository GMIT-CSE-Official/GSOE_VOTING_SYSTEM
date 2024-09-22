"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
import Image from "next/image";
import { AlertCircle, ArrowRight } from "lucide-react";

import React from "react";

import { useRouter } from "next/navigation";
import Carousel from "./carousel";
import { User } from "@prisma/client";
import { vote } from "@/actions/vote";

const formSchema = z.object({
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
        message: "Please enter atleast 3 characters",
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
        message: "Please enter atleast 3 characters",
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
        message: "Please enter atleast 3 characters",
      }
    ),
});

const bestConceptImages = [
  {
    src: "/assets/Images/Vote-art-1.png",
    alt: "Logo",
  },
  {
    src: "/assets/Images/Vote-art-1.png",
    alt: "Logo",
  },
];

const VoteForm = ({ data }: { data: User }) => {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bestIdol: "",
      bestArtAndAmbience: "",
      bestConcept: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error, message, success } = await vote({
        bestArtAndAmbience: values.bestArtAndAmbience || undefined,
        userId: data.id,
        bestConcept: values.bestConcept || undefined,
        bestIdol: values.bestIdol || undefined,
      });

      if (error) {
        if (message) {
          setError(message);
          return;
        }
        setError("An error occurred");
        return;
      }

      if (success) {
        router.push("/thankyou");
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        return;
      }
      setError("An error occurred");
    }
  }
  return (
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
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="border-[15px] border-orange-900 mt-4 rounded-lg">
            <Image
              src={"/assets/Images/Vote-art-1.png"}
              alt="Logo"
              width={0}
              height={0}
              sizes="auto"
              className="w-full aspect-video object-cover object-center "
            />
          </div>
        </div>
        <div>
          <FormField
            control={form.control}
            name="bestArtAndAmbience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Best Art and Ambiance</FormLabel>
                <FormControl className="w-[280px] mx-auto ">
                  <Input
                    {...field}
                    value={field.value || ""}
                    placeholder="Type Here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="border-[15px] border-orange-900 mt-4 rounded-lg">
            <Image
              src={"/assets/Images/Vote-art-1.png"}
              alt="Logo"
              width={0}
              height={0}
              sizes="auto"
              className="w-full aspect-video object-cover object-center "
            />
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
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="border-[15px] border-orange-900 mt-4 rounded-lg">
            <Carousel images={bestConceptImages} />
          </div>
        </div>
        {error && (
          <div className="text-destructive text-sm bg-red-500/30 flex items-center p-2 rounded-md gap-2 font-semibold">
            <AlertCircle size={20} />
            {error}
          </div>
        )}
        <div className="flex justify-end">
          <Button type="submit" className="flex gap-2">
            Submit
            <ArrowRight size={20} />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default VoteForm;

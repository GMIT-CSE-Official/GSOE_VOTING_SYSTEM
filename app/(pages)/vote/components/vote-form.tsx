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
import { ArrowRight } from "lucide-react";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  bestIdol: z.string().min(2).max(200).optional().nullable(),
  bestArtAndAmbiance: z.string().min(2).max(200).optional().nullable(),
  bestConcept: z.string().min(2).max(200).optional().nullable(),
});

const VoteForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bestIdol: "",
      bestArtAndAmbiance: "",
      bestConcept: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/thankyou");
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
            name="bestArtAndAmbiance"
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
        <div className="text-end">
          <Button type="submit" className="flex gap-2">
            Submit
            <ArrowRight size={20} />
          </Button>
        </div>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Image
              src={"/assets/Images/Vote-art-1.png"}
              alt="Logo"
              width={0}
              height={0}
              sizes="auto"
              className="w-full aspect-video object-cover object-center "
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </form>
    </Form>
  );
};

export default VoteForm;

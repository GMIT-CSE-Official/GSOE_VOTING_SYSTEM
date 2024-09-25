"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import React, { useState } from "react";
import { createUser } from "@/actions/user";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { vote } from "@/actions/vote";
import { voteSchema } from "./vote-form";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
});

export default function DetailsForm() {
  const cookies = useCookies();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    setLoading(true);
    try {
      const { error, success, token, data } = await createUser({
        name: values.name,
        phoneNumber: values.phoneNumber,
      });

      if (error) {
        setError(error);
        setLoading(false);
        return;
      }

      if (success) {
        if (token && data) {
          cookies.set("token-gsoe", token);
          const values = localStorage.getItem("vote-values");

          if (values) {
            const parsedData = JSON.parse(values) as z.infer<typeof voteSchema>;
            const { success } = await vote({
              userId: data.id,
              bestArtAndAmbience: parsedData.bestArtAndAmbience || undefined,
              bestConcept: parsedData.bestConcept || undefined,
              bestIdol: parsedData.bestIdol || undefined,
            });
            if (success) {
              router.push(`/thankyou`);
            }
          }
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred");
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md my-6 mx-auto"
      >
        <div className="grid gap-4">
          {[
            {
              name: "name",
              label: "Name",
              placeholder: "Enter full name",
              required: true,
            },
            {
              name: "phoneNumber",
              label: "Mobile",
              placeholder: "Enter 10-digit phone number",
              required: true,
            },
          ].map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={(field.name as "name") || "phoneNumber"}
              render={({ field: formField }) => (
                <FormItem>
                  <p className="flex  items-center gap-2 max-[360px]:flex-wrap">
                    <FormLabel className="min-w-[80px] min-[360px]:text-right">
                      {field.label}
                      {field.required && (
                        <span className="text-destructive ml-1">*</span>
                      )}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={field.placeholder}
                        {...formField}
                        value={formField.value || ""}
                        className="w-full"
                      />
                    </FormControl>
                  </p>
                  <FormMessage className="mt-1 text-xs" />
                </FormItem>
              )}
            />
          ))}
        </div>
        {error && (
          <div className="bg-red-500/20 text-orange-900 p-2 rounded-md text-sm font-bold">
            <AlertCircle size={16} className="inline-block mr-2" />
            {error}
          </div>
        )}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="flex items-center gap-2 shadow-md shadow-slate-700/30"
            disabled={loading}
          >
            Submit
            <ArrowRight size={18} />
          </Button>
        </div>
      </form>

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <Loader2 className="animate-spin text-white w-12 h-12" />
        </div>
      )}
    </Form>
  );
}

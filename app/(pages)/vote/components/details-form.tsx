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

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email"),
  age: z
    .string()
    .optional()
    .nullable()
    .refine((value) => {
      if (!value) {
        return true;
      }
      const parsedValue = Number(value);
      if (isNaN(parsedValue)) {
        return false;
      }
      return parsedValue >= 6;
    }, "Age must be a number and above 6"),
  occupation: z
    .string()
    .min(2, "Occupation is too short")
    .max(100, "Occupation is too long")
    .optional()
    .nullable(),
  location: z
    .string()
    .min(2, "Location is too short")
    .max(100, "Location is too long")
    .optional()
    .nullable(),
});

export default function DetailsForm({
  setShowForm,
}: {
  setShowForm: (value: boolean) => void;
}) {
  const cookies = useCookies();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Loading state
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      age: undefined,
      occupation: undefined,
      location: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    setLoading(true); // Start showing the loader
    try {
      const { error, success, token } = await createUser({
        age: values.age ? parseInt(values.age) : undefined,
        email: values.email,
        location: values.location || undefined,
        name: values.name,
        occupation: values.occupation || undefined,
        phoneNumber: values.phoneNumber,
      });

      if (success) {
        if (token) {
          cookies.set("token-gsoe", token);
          router.push(`/vote`); // Replace the current page with the next one
        }
        setShowForm(false);
      }

      if (success) {
        cookies.set("token-gsoe", token);
        router.push("/vote");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred");
      }
      // setLoading(false); // Stop loader on error
    } finally {
      setTimeout(() => {
        setLoading(false); // Stop loading
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
            {
              name: "email",
              label: "Email",
              placeholder: "Enter valid email only",
              required: true,
            },
            {
              name: "age",
              label: "Age",
              placeholder: "Enter age",
              type: "number",
            },
            {
              name: "occupation",
              label: "Occupation",
              placeholder: "Enter occupation",
            },
            {
              name: "location",
              label: "Location",
              placeholder: " Enter location",
            },
          ].map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as keyof z.infer<typeof formSchema>}
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
                        type={field.type || "text"}
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
            disabled={loading} // Disable button while loading
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

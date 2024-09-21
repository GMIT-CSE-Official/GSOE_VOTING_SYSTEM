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
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  phoneNumber: z
    .string()
    .min(10, "Phone number is too short")
    .max(10, "Phone number is too long"),
  email: z.string().email("Please enter a valid email"),
  age: z.string().refine((value) => {
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

export default function DetailsForm() {
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
              placeholder: "John Doe",
              required: true,
            },
            {
              name: "phoneNumber",
              label: "Mobile",
              placeholder: "1234567890",
              required: true,
            },
            {
              name: "email",
              label: "Email",
              placeholder: "john@example.com",
              required: true,
            },
            { name: "age", label: "Age", placeholder: "18", type: "number" },
            {
              name: "occupation",
              label: "Occupation",
              placeholder: "IT Employee",
            },
            { name: "location", label: "Location", placeholder: "New York" },
          ].map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as keyof z.infer<typeof formSchema>}
              render={({ field: formField }) => (
                <FormItem>
                  <div className="flex items-center gap-2 max-[360px]:flex-wrap">
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
                  </div>
                  <FormMessage className="mt-1 text-xs" />
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="flex items-center gap-2">
            Submit
            <ArrowRight size={18} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

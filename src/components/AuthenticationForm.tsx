// src/components/AuthenticationForm.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  ic: z.string().min(2, {
    message: "IC must be at least 2 characters.",
  }),
});

export function AuthenticationForm({
  onAuthSuccess,
}: {
  onAuthSuccess: () => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      dob: new Date("2022-08-01"), // Set the default date here
      username: "",
      ic: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const isAuth =
      format(data.dob, "PPP") === import.meta.env.VITE_AUTH_DOB &&
      data.username === import.meta.env.VITE_AUTH_USERNAME &&
      data.ic === import.meta.env.VITE_AUTH_IC;

    if (isAuth) {
      toast({
        title: "Authentication Successful",
        description: "You have been authenticated successfully.",
      });
      onAuthSuccess(); // Call the onAuthSuccess callback
    } else {
      toast({
        title: "Authentication Failed",
        description: "Invalid date of anniversary or postal code.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date we first got together</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    defaultMonth={new Date("2022-08-01")}
                    showWeekNumber={false}
                    showOutsideDays={false}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is used to verify you are dovey.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wei's Postal code</FormLabel>
              <FormControl>
                <Input placeholder="Enter Wei's postal code" {...field} />
              </FormControl>
              <FormDescription>
                This is used to verify you are dovey.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wei's last 4 Digits IC</FormLabel>
              <FormControl>
                <Input placeholder="Enter Wei's last 4 digits IC" {...field} />
              </FormControl>
              <FormDescription>
                This is used to verify you are dovey.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

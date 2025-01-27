"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { headers } from "next/headers";

const createUserSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  lastName: z.string().min(2, { message: "Last name is too short" }),
  phone: z.string().min(10, { message: "Phone number is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  gender: z.string({ required_error: "Select your gender" }),
  passport: z.string().min(8, { message: "Passport number is too short" }),
  date: z.date({
    required_error: "Select your date of birth",
  }),
  healthInsurance: z.string({ required_error: "Select your health insurance" }),
  paymentMethod: z.string({ required_error: "Select your payment method" }),
  password: z.string().min(6, { message: "Password is too short" }),
  confirmPassword: z.string().min(6, { message: "Password is too short" }),
}); //TODO - validate password and confirmPassword

export default function MultiStepForm() {
  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      gender: "",
      passport: "",
      date: new Date(),
      healthInsurance: "",
      paymentMethod: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof createUserSchema>) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Please fill out all the fields below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">First Name</Label>
                <Input id="name" name="name" placeholder="John" required />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select name="gender" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Passport Number */}
              <div className="space-y-2">
                <Label htmlFor="passport">Passport Number</Label>
                <Input
                  id="passport"
                  name="passport"
                  placeholder="A1234567"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="date">Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`w-full justify-start text-left font-normal`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0"></PopoverContent>
                </Popover>
              </div>

              {/* Health Insurance */}
              <div className="space-y-2">
                <Label htmlFor="healthInsurance">Health Insurance</Label>
                <Select name="healthInsurance" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select insurance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Payment Method */}
              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method</Label>
                <Select name="paymentMethod" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="credit">Credit Card</SelectItem>
                    <SelectItem value="debit">Debit Card</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
}

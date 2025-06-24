"use client";

import Link from "next/link";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";

import {
  Dialog,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";

import Logo from "@/assets/logo.svg"; // Adjust the path as necessary'

export default function SignupPage() {
  return (
    <div className="flex flex-col gap-5 justify-center -mt-25 h-screen">
      <div className="flex items-center self-center justify-center w-auto h-auto">
        <Link href="/">
          <h1 className="text-4xl self-center font-light tracking-wider ">
            <span className="font-extralight text-[#1E1E1E]">share</span>
            <span className="font-medium text-yellow-500">recipe</span>
          </h1>
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center text-[#1E1E1E]">
        Create Account
      </h1>
      <Card className="w-full max-w-sm self-center">
        <CardHeader>
          <CardTitle>Sign Up to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                </div>
                <Input id="confirm-password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-5">
          <Button
            type="submit"
            className="w-full bg-yellow-500 text-[#1E1E1E] hover:text-white"
          >
            Let's Cook
          </Button>

          <div className="items-start grid gap-2">
            <span className="text-sm text-[#8F8F8F]">
              By creating an account, you agree to the Goodreads Terms of
              Service and Privacy Policy
            </span>
            <span className="text-sm text-[#8F8F8F]">
              Already have an account?
              <Link
                href="/signin"
                className="ml-2 text-sm text-yellow-500 hover:underline"
              >
                Sign In
              </Link>
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

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

export default function Signin() {
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
      <Card className="w-full max-w-sm self-center">
        <CardHeader>
          <CardTitle>Sign In to your account</CardTitle>
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
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full bg-yellow-500 text-[#1E1E1E] hover:text-white"
          >
            Signin
          </Button>
          <Button variant="outline" className="w-full">
            Signin with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

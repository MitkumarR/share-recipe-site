"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { fetchProfile } from "@/lib/api/profile";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ErrorPage from "@/components/error";


export default function KitchenDashboard() {
  
  const user = useSelector((state) => state.user);

  
  console.log("User data in KitchenDashboard:", user);
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 justify-center -mt-25 h-screen bg-gray-50">
      <Card className="w-full max-w-md self-center">
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>Here is your account information.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div>
              <p className="text-lg font-semibold">{user.username}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="grid gap-2">
            <div>
              <span className="font-medium">First Name: </span>
              <span>{user.firstname}</span>
            </div>
            <div>
              <span className="font-medium">Last Name: </span>
              <span>{user.lastname}</span>
            </div>
            <div>
              <span className="font-medium">Joined: </span>
              <span>{new Date(user.joined).toLocaleDateString()}</span>
            </div>
            <div>
              <Badge className="bg-yellow-500 text-black">
                {user.role}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

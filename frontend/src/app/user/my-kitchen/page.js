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
  const dispatch = useDispatch();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const user = useSelector((state) => state.user);
  const [error, setError] = useState("");
  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");
    if (!accessToken || !refreshToken) {
      router.push("/signin");
    } else {
      // Use an async function inside useEffect
      const getProfile = async () => {
        try {
          const profile = await fetchProfile();
          dispatch(setUser(profile));
        } catch (err) {
          setError(err);
        } finally {
          setCheckingAuth(false);
        }
      };
      getProfile();
    }
  }, [router, dispatch]);

  if (checkingAuth) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Checking authentication...</p>
      </div>
    );
  }

  if (error) {
    return (
      <ErrorPage error={error} next={{ name: "Sign In", link: "/signin" }} />
    );
  }
  
  console.log("User data in KitchenDashboard:", user);
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-full">
        {/* Header section */}
        <div className="flex flex-col items-center py-6 px-6 border-b">
          <div className="h-24 w-24 rounded-full bg-yellow-500 flex items-center justify-center text-3xl font-bold text-white">
            {user.username ? user.username[0].toUpperCase() : "U"}
          </div>
          <h2 className="mt-4 text-2xl font-bold">{user.username}</h2>
          <p className="text-gray-500">{user.email}</p>
          <Badge className="mt-2 bg-yellow-500 text-black">{user.role}</Badge>
        </div>

        {/* Info section */}
        <div className="px-6 py-6 space-y-4">
          <div className="flex gap-10 border-b pb-2">
            <span className="font-medium">First Name</span>
            <span>{user.firstname || "N/A"}</span>
          </div>
          <div className="flex gap-10 border-b pb-2">
            <span className="font-medium">Last Name </span>
            <span>{user.lastname || "N/A"}</span>
          </div>
          <div className="flex gap-10 border-b pb-2">
            <span className="font-medium">Joined</span>
            <span>
              {user.joined ? new Date(user.joined).toLocaleDateString() : "N/A"}
            </span>
          </div>
        </div>

        {/* Bottom actions or summary (optional) */}
        <div className="px-6 py-4 border-t flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Keep sharing your amazing recipes!
          </p>
          <button
            className="text-yellow-500 hover:underline font-medium"
            onClick={() => console.log("Edit Profile clicked")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

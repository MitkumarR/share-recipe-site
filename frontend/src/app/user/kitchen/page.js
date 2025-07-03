"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { fetchProfile } from "@/lib/api/profile";

export default function KitchenDashboard() {
  const [activeTab, setActiveTab] = useState("Your Kitchen");
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProfile()
      .then((data) => dispatch(setUser(data)))
      .catch((err) => console.error(err.message));
  }, [dispatch]);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col">
        My Kitchen
      </div>
    </div>
  );
}
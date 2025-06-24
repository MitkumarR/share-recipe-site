"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


export default function AppHeader() {
  const user = {
    name: "Mit",
    username: "mitdev",
    role: "Master Chef",
  };

  return (
    <div className="flex items-center justify-between p-6 gap- border-b bg-white">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge className="bg-yellow-500 text-black">{user.role}</Badge>
        <Badge variant="secondary">Top Contributor</Badge>
      </div>
    </div>
  );
}

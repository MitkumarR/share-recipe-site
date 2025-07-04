"use client";
import Link from "next/link";
import {
  ChefHat,
  BookOpen,
  ListTodo,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const userKitchenItems = [
  {
    title: "My Kitchen",
    url: "/user/kitchen",
    icon: ChefHat,
  },
  {
    title: "My Recipes",
    url: "/user/recipes",
    icon: BookOpen,
  },
  {
    title: "My Lists",
    url: "/user/lists",
    icon: ListTodo,
  },
  {
    title: "Community Posts",
    url: "/user/community-posts",
    icon: Users,
  },
];


export default function AppSidebar() {

  const handleSignout = () => {
    // Handle sign out logic here
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/signin"; // Redirect to sign-in page
  }
  return (
    <Sidebar className="min-h-screen border-r border-gray-200 bg-white dark:bg-gray-950">
      <SidebarContent>
        {/* Logo */}
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <h1 className="text-3xl font-light tracking-wider">
                  <span className="text-[#1E1E1E]">share</span>
                  <span className="font-semibold text-yellow-500">recipe</span>
                </h1>
              </Link>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* User Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-yellow-500">
            Your Kitchen
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userKitchenItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 hover:text-yellow-500 transition"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-yellow-500">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem key="Settings">
                  <SidebarMenuButton asChild>
                    <a
                      href="user/settings"
                      className="flex items-center gap-3 hover:text-yellow-500 transition"
                    >
                      <Settings className="w-5 h-5" />
                      <span>Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem key="Sign Out">
                  <SidebarMenuButton asChild>
                    <button
                      onClick={handleSignout}
                      className="flex items-center gap-3 hover:text-yellow-500 transition"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Sign Out</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

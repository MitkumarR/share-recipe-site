
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/user/appsidebar";
import AppHeader from "@/components/user/appheader";
import fetchProfile from "@/lib/api/profile"; // Adjust the import path as needed

export default async function Layout({ children }) {
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <AppHeader />
          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

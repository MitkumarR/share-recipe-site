import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar  from "@/components/user/appsidebar";
import AppHeader from "@/components/user/appheader";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <AppHeader />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className={cn("block h-full lg:flex")}>
      <Sidebar />
      {children}
    </main>
  );
};

export default MainLayout;

import Sidebar from "@/components/Sidebar";
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="flex h-full">
      <Sidebar />
      {children}
    </main>
  );
};

export default MainLayout;

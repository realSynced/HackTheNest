import React from "react";
import SideNav from "@/ui/components/SideNav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

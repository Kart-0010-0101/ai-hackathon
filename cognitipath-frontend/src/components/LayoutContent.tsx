"use client";
import Sidebar from "./Sidebar";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#fafcfc] gap-8">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center py-10 px-6 transition-opacity duration-300">
        {children}
      </main>
    </div>
  );
} 
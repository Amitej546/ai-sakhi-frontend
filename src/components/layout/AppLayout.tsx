import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import FloatingSOS from "../emergency/FloatingSOS";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div className="relative z-50 w-64 bg-white dark:bg-gray-900 shadow-lg">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Floating SOS (Visible on All Pages) */}
      <FloatingSOS />
    </div>
  );
}

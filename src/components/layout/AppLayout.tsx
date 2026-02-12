import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import FloatingSOS from "../emergency/FloatingSOS";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-950">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="
          flex-1 
          p-4 md:p-8
          overflow-y-auto
        ">
          {children}
        </main>

      </div>

      <FloatingSOS />
    </div>
  );
}

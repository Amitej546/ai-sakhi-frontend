import { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";

interface Stat {
  title: string;
  value: string;
  change: string;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    setStats([
      { title: "Total Courses", value: "5", change: "+2 this month" },
      { title: "Completed", value: "2", change: "40% progress" },
      { title: "Schemes Viewed", value: "8", change: "Active engagement" },
    ]);
  }, []);

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">

        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">
          Dashboard Overview
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition hover:shadow-xl"
            >
              <h2 className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.title}
              </h2>
              <p className="text-3xl font-bold mt-2 text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {stat.change}
              </p>
            </div>
          ))}
        </div>

      </div>
    </AppLayout>
  );
}

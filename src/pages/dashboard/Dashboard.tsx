import { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Skeleton from "../../components/ui/Skeleton";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Dashboard
      </h1>

      {loading ? (
        <div className="space-y-4">
          <Skeleton height="h-20" />
          <Skeleton height="h-20" />
          <Skeleton height="h-20" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Courses" value="5" />
          <StatCard title="Completed" value="2" />
          <StatCard title="Progress" value="40%" />
        </div>
      )}
    </AppLayout>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition-all">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h2>
      <p className="text-3xl font-bold mt-2 text-indigo-600 dark:text-indigo-400">
        {value}
      </p>
    </div>
  );
}

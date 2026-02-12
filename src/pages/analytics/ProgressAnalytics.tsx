import AppLayout from "../../components/layout/AppLayout";

export default function ProgressAnalytics() {
  const progressData = [
    { name: "Digital Literacy", percent: 70 },
    { name: "Women Safety Awareness", percent: 50 },
    { name: "Financial Inclusion", percent: 85 },
  ];

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">

        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">
          Progress Analytics
        </h1>

        <div className="space-y-6">
          {progressData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {item.name}
                </span>
                <span className="text-sm text-gray-500">
                  {item.percent}%
                </span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </AppLayout>
  );
}

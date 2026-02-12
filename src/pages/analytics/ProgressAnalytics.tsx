import AppLayout from "../../components/layout/AppLayout";

const progressData = [
  { id: 1, title: "Digital Literacy", progress: 60 },
  { id: 2, title: "Financial Independence", progress: 80 },
  { id: 3, title: "Women Safety Awareness", progress: 40 },
];

export default function ProgressAnalytics() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        📈 Learning Progress
      </h1>

      <div className="space-y-6">
        {progressData.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">
                {item.title}
              </span>
              <span>{item.progress}%</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-indigo-600 h-3 rounded-full transition-all"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

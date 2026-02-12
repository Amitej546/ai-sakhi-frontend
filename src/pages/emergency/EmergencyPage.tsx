import AppLayout from "../../components/layout/AppLayout";

export default function EmergencyPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-10">

        <h1 className="text-3xl font-bold text-red-600 mb-6">
          🚨 Emergency Help
        </h1>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4">

          <p className="text-gray-700 dark:text-gray-300">
            If you are in immediate danger, please call:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <a
              href="tel:112"
              className="bg-red-600 text-white p-4 rounded-xl text-center font-medium"
            >
              Police - 112
            </a>

            <a
              href="tel:1091"
              className="bg-indigo-600 text-white p-4 rounded-xl text-center font-medium"
            >
              Women Helpline - 1091
            </a>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Stay calm. Share your location. Contact trusted person.
          </p>

        </div>

      </div>
    </AppLayout>
  );
}

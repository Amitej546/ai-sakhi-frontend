import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-6 text-lg">Page not found</p>
      <Link
        to="/dashboard"
        className="bg-indigo-600 text-white px-6 py-2 rounded"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

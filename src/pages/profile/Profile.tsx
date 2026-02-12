import AppLayout from "../../components/layout/AppLayout";
import { useAuthStore } from "../../store/auth.store";
import { useThemeStore } from "../../store/theme.store";

export default function Profile() {
  const user = useAuthStore((s) => s.user);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <AppLayout>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>

        <p className="mb-2"><strong>Name:</strong> {user?.name}</p>
        <p className="mb-4"><strong>Email:</strong> {user?.email}</p>

        <button
          onClick={toggleTheme}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Toggle Theme
        </button>
      </div>
    </AppLayout>
  );
}

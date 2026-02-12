import AppLayout from "../../components/layout/AppLayout";
import { useAuthStore } from "../../store/auth.store";

export default function Profile() {
  const user = useAuthStore((state) => state.user);

  return (
    <AppLayout>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow mt-10">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <p><strong>Name:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </AppLayout>
  );
}

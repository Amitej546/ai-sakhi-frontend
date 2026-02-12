import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import type { JSX } from "react";

function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;

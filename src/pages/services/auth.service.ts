import type { User } from "../../types/user";

export async function loginUser(
  email: string,
  _password: string
): Promise<User> {
  // Mock authentication (backend-ready)
  return {
    id: "1",
    name: "User",
    email,
    role: "user",
  };
}

export function logoutUser(): void {
  // Placeholder for backend logout
}

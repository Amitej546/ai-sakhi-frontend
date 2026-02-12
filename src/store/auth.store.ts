import { create } from "zustand";

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  users: User[];
  register: (username: string, email: string, password: string) => void;
  login: (identifier: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  users: [],

  register: (username, email, password) => {
    const newUser = { username, email, password };
    set((state) => ({
      users: [...state.users, newUser],
    }));
  },

  login: (identifier, password) => {
    const user = get().users.find(
      (u) =>
        (u.username === identifier || u.email === identifier) &&
        u.password === password
    );

    if (user) {
      set({ user });
      return true;
    }

    return false;
  },

  logout: () => set({ user: null }),
}));

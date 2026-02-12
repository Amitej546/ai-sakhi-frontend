import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { useThemeStore } from "../../store/theme.store";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const { darkMode, toggleTheme } = useThemeStore();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md z-50">
      
      {/* Max width container (ENTERPRISE WRAPPER) */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* App Title */}
        <h1 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
          AI Sakhi
        </h1>

        {/* Right Controls */}
        <div className="flex items-center gap-3">

          {/* Language Switch */}
          <select
            className="
              px-2
              py-1
              rounded
              text-sm
              bg-white
              text-gray-800
              dark:bg-gray-800
              dark:text-white
              border
              border-gray-300
              dark:border-gray-600
              focus:outline-none
            "
            onChange={(e) => localStorage.setItem("lang", e.target.value)}
          >
            <option value="en">EN</option>
            <option value="hi">हिन्दी</option>
            <option value="te">తెలుగు</option>
          </select>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              px-3
              py-1
              rounded
              text-sm
              bg-white
              dark:bg-gray-800
              text-gray-800
              dark:text-white
              hover:opacity-90
            "
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="
              px-3
              py-1
              rounded
              text-sm
              bg-red-500
              hover:bg-red-600
              text-white
            "
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

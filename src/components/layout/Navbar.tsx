import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { useThemeStore } from "../../store/theme.store";
import { useLanguageStore } from "../../store/language.store";

export default function Navbar({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);
  const { theme, toggleTheme } = useThemeStore();
  const { setLang } = useLanguageStore();

  return (
    <div className="h-14 bg-white dark:bg-gray-950 border-b dark:border-gray-800 flex items-center justify-between px-4 md:px-6 shadow-sm">

      {/* Left Side */}
      <div className="flex items-center gap-3">

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-xl"
        >
          ☰
        </button>

        <h1 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
          AI Sakhi
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:gap-4">

        <select
          onChange={(e) => setLang(e.target.value as any)}
          className="hidden md:block px-2 py-1 rounded border dark:bg-gray-800 dark:text-white text-sm"
        >
          <option value="en">EN</option>
          <option value="hi">HI</option>
          <option value="te">TE</option>
        </select>

        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-sm"
        >
          {theme === "dark" ? "☀" : "🌙"}
        </button>

        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

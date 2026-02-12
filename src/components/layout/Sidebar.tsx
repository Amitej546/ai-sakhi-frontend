import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass =
    "block px-4 py-3 rounded-lg transition hover:bg-gray-200 dark:hover:bg-gray-800";

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-700 p-4">

      <nav className="flex flex-col gap-2">

        <NavLink to="/dashboard" className={linkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/tutor" className={linkClass}>
          🌸 AI Sakhi
        </NavLink>

        <NavLink to="/progress" className={linkClass}>
          📈 Progress
        </NavLink>

        <NavLink to="/resources" className={linkClass}>
          📚 Resources
        </NavLink>

        <NavLink to="/schemes" className={linkClass}>
          🏛 Schemes
        </NavLink>

        <NavLink to="/profile" className={linkClass}>
          👤 Profile
        </NavLink>

      </nav>
    </aside>
  );
}

import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: "📊" },
  { name: "AI Sakhi", path: "/tutor", icon: "🌸" },
  { name: "Progress", path: "/progress", icon: "📈" },
  { name: "Resources", path: "/resources", icon: "📚" },
  { name: "Schemes", path: "/schemes", icon: "🏛️" },
  { name: "Profile", path: "/profile", icon: "👤" },
];

export default function Sidebar() {
  return (
    <div
      className="
        hidden md:flex
        w-64
        flex-col
        bg-white
        dark:bg-gray-900
        border-r
        dark:border-gray-700
        p-4
        space-y-2
        min-h-screen
      "
    >
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `
            flex items-center gap-3
            p-3 rounded-lg
            transition
            ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }
          `
          }
        >
          <span>{item.icon}</span>
          <span className="font-medium">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
}

import { LayoutDashboard } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  const links = [
    { to: "home", label: "Home" },
    { to: "space", label: "Space" },
    { to: "about", label: "About" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <LayoutDashboard className="w-8 h-8  text-teal-400" />
          <p className="text-xl">
            Business
            <span className="text-xl font-semibold text-teal-400"> Cafe</span>
          </p>
        </div>

        <ul className="flex space-x-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border-b-2 border-green-600 text-xl"
                    : "text-black hover:text-gray-700 text-xl"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;

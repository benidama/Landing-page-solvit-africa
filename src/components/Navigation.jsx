import { useState } from "react";
import { LayoutDashboard, Menu, X } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <LayoutDashboard className="w-8 h-8 text-palette-300" />
          <p className="text-xl">
            Business{" "}
            <span className="text-xl font-semibold text-palette-400">Cafe</span>
          </p>
        </div>

        <ul className="hidden md:flex space-x-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-palette-500 border-b-2 border-palette-500 text-xl"
                    : "text-black hover:text-gray-700 text-xl"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`md:hidden bg-white shadow-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-palette-500 text-xl"
                    : "text-black hover:text-gray-700 text-xl"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;

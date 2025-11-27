import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-goodness-sugar bg-goodness-cream/90 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto flex flex-col items-center py-4 px-4">

        {/* LOGO (TEXT LOGO) */}
        <Link
          to="/"
          className="font-semibold text-2xl tracking-wide text-goodness-chocolate"
        >
          Goodness Bakery
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium mt-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-goodness-caramel transition ${
                isActive ? "text-goodness-caramel" : "text-goodness-chocolate"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-goodness-caramel transition ${
                isActive ? "text-goodness-caramel" : "text-goodness-chocolate"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/preorder"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full border font-medium transition ${
                isActive
                  ? "bg-goodness-caramel text-white border-goodness-caramel"
                  : "border-goodness-caramel text-goodness-caramel hover:bg-goodness-caramel hover:text-white"
              }`
            }
          >
            Preorder
          </NavLink>
        </div>

        {/* MOBILE BURGER ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-4 top-4 text-goodness-chocolate"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="md:hidden flex flex-col items-center gap-4 mt-4 pb-4 text-sm font-medium w-full animate-fadeDown">

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `hover:text-goodness-caramel transition ${
                  isActive ? "text-goodness-caramel" : "text-goodness-chocolate"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `hover:text-goodness-caramel transition ${
                  isActive ? "text-goodness-caramel" : "text-goodness-chocolate"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/preorder"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full border font-medium transition ${
                  isActive
                    ? "bg-goodness-caramel text-white border-goodness-caramel"
                    : "border-goodness-caramel text-goodness-caramel hover:bg-goodness-caramel hover:text-white"
                }`
              }
            >
              Preorder
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

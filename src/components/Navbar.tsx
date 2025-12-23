import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "transition font-medium text-goodness-chocolate/80 hover:text-goodness-chocolate";

  const activeLink =
    "text-goodness-chocolate underline underline-offset-4";

  return (
    <header className="bg-goodness-caramel border-b border-goodness-chocolate/10 z-50 sticky top-0">
      <nav className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between relative">


        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Goodness Bakery Logo"
              className="h-10 md:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* RIGHT: DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/preorder"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full border border-goodness-chocolate 
               text-goodness-chocolate transition
               ${
                 isActive
                   ? "bg-goodness-chocolate text-goodness-cream"
                   : "hover:bg-goodness-chocolate hover:text-goodness-cream"
               }`
            }
          >
            Preorder
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-goodness-chocolate"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-goodness-caramel border-t border-goodness-chocolate/10 px-6 py-6 flex flex-col items-center gap-4 text-sm">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/preorder"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `px-5 py-2 rounded-full border border-goodness-chocolate
               text-goodness-chocolate transition
               ${
                 isActive
                   ? "bg-goodness-chocolate text-goodness-cream"
                   : "hover:bg-goodness-chocolate hover:text-goodness-cream"
               }`
            }
          >
            Preorder
          </NavLink>
        </div>
      )}
    </header>
  );
}

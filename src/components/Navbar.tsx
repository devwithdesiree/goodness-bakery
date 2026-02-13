import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "transition font-medium text-goodness-charcoal/80 hover:text-goodness-gold";

  const activeLink =
    "text-goodness-gold underline underline-offset-4";

  return (
    <header className="bg-goodness-white border-b border-goodness-charcoal/10 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serifLogo text-2xl md:text-3xl tracking-[0.25em] text-goodness-charcoal">
            GOODNESS
          </span>
          <span className="text-xs md:text-sm tracking-[0.3em] text-goodness-gold uppercase mt-1">
            Bakery Co.
          </span>
        </Link>


        {/* DESKTOP NAV */}
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
            to="/pickup"
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }
          >
            Order Pickup
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }
          >
            Events
          </NavLink>

          <NavLink
            to="/wholesale"
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }
          >
            Wholesale
          </NavLink>

          {/* Highlighted CTA */}
          <NavLink
            to="/pickup"
            className="ml-4 px-5 py-2 rounded-full bg-goodness-gold text-white text-sm font-medium hover:opacity-90 transition"
          >
            Order Now
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-goodness-charcoal"
          aria-label="Toggle menu"
        >
          {open ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-goodness-white border-t border-goodness-charcoal/10 px-6 py-6 flex flex-col gap-4 text-sm">

          <NavLink to="/" onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }>
            Home
          </NavLink>

          <NavLink to="/pickup" onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }>
            Order Pickup
          </NavLink>

          <NavLink to="/events" onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }>
            Events
          </NavLink>

          <NavLink to="/wholesale" onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeLink : linkBase
            }>
            Wholesale
          </NavLink>
        </div>
      )}
    </header>
  );
}

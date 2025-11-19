import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-goodness-sugar bg-white/80 backdrop-blur py-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-goodness-caramel flex items-center justify-center text-white font-bold">
            G
          </span>
          <span className="font-semibold text-lg text-goodness-chocolate">
            Goodness Bakery
          </span>
        </Link>

        <div className="flex items-center gap-4 text-sm">
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
                    <Link to="/about" className="text-goodness-chocolate text-sm hover:text-goodness-caramel transition">
  About
</Link>
          <NavLink
            to="/preorder"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-full border text-sm font-medium transition ${
                isActive
                  ? "bg-goodness-caramel text-white border-goodness-caramel"
                  : "border-goodness-caramel text-goodness-caramel hover:bg-goodness-caramel hover:text-white"
              }`
            }
          >
            Preorder
          </NavLink>

        </div>
      </nav>
    </header>
  );
}

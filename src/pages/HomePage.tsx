import { Link } from "react-router-dom";
import heroImage from "../../public/hero.jpg";

export default function HomePage() {
  return (
    <section
      className="
        relative w-full 
        min-h-[75vh] md:min-h-[85vh]
        flex items-center justify-center
        overflow-hidden
        bg-cover bg-center
      "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-5 max-w-sm sm:max-w-md md:max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]">
          Freshly baked cookies,
          <br />
          made to order every single week.
        </h1>

        <p className="text-white/95 text-sm sm:text-base leading-relaxed mb-6">
          Small-batch, faith-centered baking in Moore, Oklahoma.
          <br />
          Pre-orders open Sunday through Thursday.
          <br />
          Baked fresh on Friday.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/menu"
            className="w-full px-6 py-3 rounded-full bg-white text-goodness-chocolate font-semibold shadow-md"
          >
            View Menu
          </Link>

          <Link
            to="/preorder"
            className="w-full px-6 py-3 rounded-full bg-goodness-caramel text-white font-semibold shadow-md"
          >
            Pre-Order a Box
          </Link>
        </div>

        <p className="mt-6 text-[11px] text-white/80">
          Made with prayer, purpose, and a whole lot of goodness.
        </p>
      </div>
    </section>
  );
}

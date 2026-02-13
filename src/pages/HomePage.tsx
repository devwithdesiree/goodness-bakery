import { Link } from "react-router-dom";
import heroImage from "../../public/hero.jpg";

export default function HomePage() {
  return (
    <section className="bg-goodness-white">

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: TEXT */}
        <div>
          <h1 className="font-serifLogo text-4xl md:text-5xl lg:text-6xl leading-tight text-goodness-charcoal">
            Elegant Small-Batch Cookies
          </h1>

          <p className="mt-6 text-lg text-goodness-muted leading-relaxed">
            Individually packaged gourmet cookies crafted for 
            local pickup, refined events, and café partnerships.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Link
              to="/pickup"
              className="px-8 py-3 rounded-full bg-goodness-gold text-white font-medium hover:opacity-90 transition"
            >
              Order Pickup
            </Link>

            <Link
              to="/events"
              className="px-8 py-3 rounded-full border border-goodness-gold text-goodness-gold font-medium hover:bg-goodness-gold hover:text-white transition"
            >
              Plan an Event
            </Link>

          </div>

          <p className="mt-8 text-sm text-goodness-muted">
            Pickup in Moore, Oklahoma · 72-hour notice required
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative">
          <img
            src={heroImage}
            alt="Individually packaged gourmet cookies"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />
        </div>

      </div>

    </section>
  );
}

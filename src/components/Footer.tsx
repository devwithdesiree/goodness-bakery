import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-goodness-beige pt-20 pb-12">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="font-serifLogo text-2xl tracking-wide text-goodness-charcoal">
            GOODNESS
          </h3>
          <p className="text-sm text-goodness-muted mt-4 leading-relaxed max-w-xs">
            Rooted in faith and crafted with excellence, 
            we create elegant small-batch cookies designed 
            to elevate gatherings and everyday moments.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="text-sm">
          <h4 className="font-semibold text-goodness-charcoal mb-4">
            Explore
          </h4>
          <ul className="space-y-3 text-goodness-muted">
            <li><Link to="/" className="hover:text-goodness-gold transition">Home</Link></li>
            <li><Link to="/pickup" className="hover:text-goodness-gold transition">Order Pickup</Link></li>
            <li><Link to="/events" className="hover:text-goodness-gold transition">Events</Link></li>
            <li><Link to="/wholesale" className="hover:text-goodness-gold transition">Wholesale</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-sm">
          <h4 className="font-semibold text-goodness-charcoal mb-4">
            Contact
          </h4>
          <p className="text-goodness-muted">Moore, Oklahoma</p>
          <p className="text-goodness-muted mt-2">
            tastethegoodnessbakery@gmail.com
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto mt-16 h-[1px] bg-goodness-charcoal/10"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-6xl mx-auto mt-8 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-goodness-muted gap-4">

        <p>
          © {new Date().getFullYear()} Goodness Bakery Co. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-goodness-gold transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-goodness-gold transition">
            Terms
          </Link>
        </div>

      </div>

      {/* Subtle Faith Line */}
      <div className="text-center mt-8 text-[11px] text-goodness-muted tracking-wide">
        Psalm 34:8
      </div>

    </footer>
  );
}

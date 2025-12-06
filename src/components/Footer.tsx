export default function Footer() {
  return (
    <footer className="bg-goodness-caramel text-goodness-cream mt-32 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold tracking-wide">
            Goodness Bakery
          </h3>
          <p className="text-goodness-cream/90 text-sm mt-3 leading-relaxed">
            Small-batch, faith-filled treats that warm homes, gather families, 
            and make every moment a little sweeter.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="text-sm">
          <h4 className="font-semibold text-goodness-cream mb-3">Navigate</h4>
          <ul className="space-y-2 text-goodness-cream/90">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/preorder" className="hover:text-white transition">Preorder</a></li>
            <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-sm">
          <h4 className="font-semibold text-goodness-cream mb-3">Get in Touch</h4>
          <p className="text-goodness-cream/90">Moore, OK — Pickup Available</p>
          <p className="text-goodness-cream/90 mt-1">tastethegoodnessbakery@gmail.com</p>

          
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto mt-12 mb-6 h-[1px] bg-goodness-cream/30"></div>

      {/* COPYRIGHT + VERSE */}
      <div className="text-center text-goodness-cream/80 text-xs px-4 leading-relaxed">
        <p>“Taste and see that the Lord is good.” — Psalm 34:8</p>
        <p className="mt-2">
          © {new Date().getFullYear()} Goodness Bakery. All rights reserved.
        </p>
          <a href="/privacy" className="mx-3 underline">Privacy Policy</a>
          <a href="/terms" className="mx-3 underline">Terms of Service</a>
      </div>
    </footer>
  );
}

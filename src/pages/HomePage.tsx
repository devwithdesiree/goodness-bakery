import { Link } from "react-router-dom";
import heroImage from "../assets/hero-cookie.jpg";
import { Helmet } from "react-helmet";
import rollsImg from "../assets/rolls.jpg";
import sugarImg from "../assets/sugar.jpg";
import coconutImg from "../assets/coco.jpg";
import biscoffImg from "../assets/biscoff.jpg";
import chocolateChipImg from "../assets/choco.jpg";
import MenuItem from "../components/MenuItem";

export default function HomePage() {
  return (
    <div>
      {/* SEO + SCHEMA MARKUP */}
      <Helmet>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Goodness Bakery",
  "image": "https://thegoodnessbakery.com/hero-cookie.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Moore",
    "addressLocality": "Moore",
    "addressRegion": "OK",
    "addressCountry": "US"
  },
  "url": "https://thegoodnessbakery.com",
  "email": "tastethegoodnessbakery@gmail.com",
  "priceRange": "$$",
  "servesCuisine": "Bakery",
  "description": "Small-batch, faith-centered home bakery in Moore, Oklahoma offering homemade cookies and buttery rolls.",
  "areaServed": {
    "@type": "City",
    "name": "Moore"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": "Sugar Cookies" },
    { "@type": "Offer", "itemOffered": "Chocolate Chip Cookies" },
    { "@type": "Offer", "itemOffered": "Butter Rolls" }
  ]
}
`}
        </script>

        <title>Goodness Bakery | Homemade Cookies & Rolls in Moore, Oklahoma</title>
        <meta
          name="description"
          content="Goodness Bakery is a small-batch, faith-centered bakery in Moore, Oklahoma. Fresh homemade cookies, thick chocolate chip, sugar cookies, and buttery rolls available for preorder."
        />
        <meta
          name="keywords"
          content="Moore OK bakery, homemade cookies Moore Oklahoma, bakery near Moore, fresh baked cookies Oklahoma, small batch bakery OK, cookie shop Moore"
        />

        <meta
          property="og:title"
          content="Goodness Bakery – Fresh Homemade Cookies in Moore, Oklahoma"
        />
        <meta
          property="og:description"
          content="Thick, cozy homemade cookies and buttery rolls baked fresh in Moore, OK. Faith-centered, small-batch, handcrafted goodness."
        />
        <meta
          property="og:image"
          content="https://thegoodnessbakery.com/hero-cookie.jpg"
        />
        <meta property="og:url" content="https://thegoodnessbakery.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-goodness-caramel mb-3">
            Small Batch · Big Flavor
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-goodness-chocolate leading-tight mb-5">
            Goodness Bakery: Thick, cozy bakes that make your whole house smell
            like a hug.
          </h1>

          <p className="text-sm md:text-base text-goodness-chocolate/80 mb-8 max-w-md">
            Fresh, faith-centered treats baked in small batches every week.
            Preorder Monday–Thursday and pick up your warm cookies on{" "}
            <span className="font-semibold text-goodness-caramel">
              Fridays or Saturdays
            </span>
            . We bake with prayer, purpose, and ingredients that feel like home.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              to="/preorder"
              className="px-6 py-3 rounded-full bg-goodness-caramel text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-[1px] transition"
            >
              Preorder a Bakery Box
            </Link>

            <span className="text-xs text-goodness-chocolate/70">
              Limited batches · Preorders only
            </span>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative max-w-md mx-auto w-full">
          <div className="absolute -right-4 top-4 w-full h-full bg-goodness-caramel/30 rounded-3xl"></div>

          <img
            src={heroImage}
            alt="Goodness Bakery Cookies"
            className="relative z-10 rounded-3xl shadow-xl w-full h-full object-cover"
          />
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center bg-goodness-cream/60 rounded-3xl shadow-sm border border-goodness-sugar/50 mt-10">
        <div className="w-16 h-1 bg-goodness-caramel mx-auto mb-4 rounded-full"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-goodness-chocolate mb-6">
          Our Mission
        </h2>

        <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Goodness Bakery began with a simple desire: to bake treats that carry
          the love, warmth, and goodness of God into people’s homes. Every
          cookie and roll is made in prayer, with real ingredients, slow mixing,
          and intentional, small-batch care. We exist to serve our community one
          cozy bake at a time.
        </p>

        <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Our bakery operates on a preorder-only schedule so that every box is
          freshly baked just for you. No leftovers. No mass production. Only
          oven-fresh goodness crafted with faith and excellence.
        </p>

        <p className="text-goodness-chocolate/70 text-sm md:text-base italic max-w-xl mx-auto">
          “Taste and see that the Lord is good.” — Psalm 34:8
        </p>
      </section>

      {/* WEEKLY PREORDER SCHEDULE */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-goodness-chocolate mb-6">
          Weekly Preorder Schedule
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-goodness-chocolate/80 text-sm md:text-base">
          <div className="p-6 bg-white rounded-2xl border border-goodness-sugar shadow-sm">
            <h3 className="font-semibold text-goodness-chocolate text-lg mb-2">
              Monday – Thursday
            </h3>
            <p>Place your preorder online at any time.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-goodness-sugar shadow-sm">
            <h3 className="font-semibold text-goodness-chocolate text-lg mb-2">
              Friday
            </h3>
            <p>Fresh baking day! Pick up your warm cookies in Moore, OK.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-goodness-sugar shadow-sm">
            <h3 className="font-semibold text-goodness-chocolate text-lg mb-2">
              Saturday
            </h3>
            <p>Additional pickup day — perfect for gatherings and family time.</p>
          </div>
        </div>

        <Link
          to="/preorder"
          className="inline-block mt-10 px-6 py-3 rounded-full bg-goodness-caramel text-white font-semibold shadow-md hover:shadow-lg transition"
        >
          Preorder for This Week →
        </Link>
      </section>

      {/* MENU SECTION */}
<section className="max-w-6xl mx-auto px-4 py-16" id="menu">
  <h2 className="text-2xl md:text-3xl font-semibold text-goodness-chocolate mb-4">
    Our Menu
  </h2>

  <p className="text-goodness-chocolate/70 text-sm md:text-base mb-10 max-w-lg">
    Baked fresh in small batches with real butter, warm spices, and love. 
    Every box is made to order for your Friday or Saturday pickup.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <MenuItem
      title="Butter Rolls – 12 Pack"
      price="$25"
      description="Fluffy, extra-milky rolls brushed with sweet warm cream. Perfect for breakfast or dessert."
      image={rollsImg}
    />

    <MenuItem
      title="Classic Sugar Cookies – 6 Pack"
      price="$18"
      description="Soft, thick, melt-in-your-mouth vanilla sugar cookies with cozy warm notes."
      image={sugarImg}
    />

    <MenuItem
      title="Coconut Sugar Cookie – 6 Pack"
      price="$18"
      description="Golden edges, chewy center, shredded coconut inside. A tropical twist on cozy."
      image={coconutImg}
    />

    <MenuItem
      title="Caramel Biscoff Cookie – 6 Pack"
      price="$21.00"
      description="Soft Biscoff cookie loaded with warm spices, caramel swirls, and Lotus crumble."
      image={biscoffImg}
    />

    <MenuItem
      title="Thick Chocolate Chip – 6 Pack"
      price="$18.00"
      description="Thick, gooey center with melty chocolate chunks. Crisp edges, soft middle — our signature."
      image={chocolateChipImg}
    />
  </div>

  <div className="mt-10">
    <Link
      to="/preorder"
      className="px-6 py-3 rounded-full bg-goodness-caramel text-white font-semibold shadow-md hover:shadow-lg transition"
    >
      Start Your Preorder →
    </Link>
  </div>
</section>


      {/* HOW IT WORKS SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16" id="how-it-works">
        <h2 className="text-2xl md:text-3xl font-semibold text-goodness-chocolate mb-6">
          How Preorders Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel text-white flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-goodness-chocolate mb-1">
              Choose
            </h3>
            <p className="text-sm text-goodness-chocolate/70">
              Browse this week’s menu and select what you'd like.
            </p>
          </div>

          <div className="text-center">
            <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel text-white flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-goodness-chocolate mb-1">
              Preorder
            </h3>
            <p className="text-sm text-goodness-chocolate/70">
              Place your preorder Monday–Thursday and choose your pickup day.
            </p>
          </div>

          <div className="text-center">
            <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel text-white flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-goodness-chocolate mb-1">Pay</h3>
            <p className="text-sm text-goodness-chocolate/70">
              Receive an instant Stripe link to complete your order securely.
            </p>
          </div>

          <div className="text-center">
            <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel text-white flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-goodness-chocolate mb-1">
              Pickup
            </h3>
            <p className="text-sm text-goodness-chocolate/70">
              Your order is baked fresh and ready for Friday or Saturday pickup.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-5xl mx-auto max-w-2xl px-6 py-20" id="contact">
        <h2 className="text-2xl md:text-3xl font-semibold text-goodness-chocolate text-center mb-4">
          Get In Touch
        </h2>

        <p className="text-goodness-chocolate/80 text-sm md:text-base max-w-xl mx-auto text-center mb-10">
          Have a question or a custom order? Send me a message and I’ll get back
          to you soon.
        </p>

        <form className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-goodness-sugar space-y-5">
          <div>
            <label className="text-xs text-goodness-chocolate font-medium">
              Name
            </label>
            <input className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-goodness-caramel" />
          </div>

          <div>
            <label className="text-xs text-goodness-chocolate font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-goodness-caramel"
            />
          </div>

          <div>
            <label className="text-xs text-goodness-chocolate font-medium">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-goodness-caramel"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-goodness-caramel text-white text-sm font-semibold shadow-md hover:shadow-lg transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-12 space-y-2 text-sm text-goodness-chocolate/80">
          <p>Email: tastethegoodnessbakery@gmail.com</p>
          <p>Phone: (405) 967-9160</p>
          <p>Norman, OK — Pickup Available</p>
        </div>
      </section>
    </div>
  );
}

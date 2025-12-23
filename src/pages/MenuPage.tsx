import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function MenuPage() {
  return (<>
  <Helmet>
    <script type="application/ld+json">
{`
[
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Sugar Cookies – 6 Pack",
    "image": "https://thegoodnessbakery.com/hero-cookie.jpg",
    "description": "Soft, thick melt-in-your-mouth sugar cookies with buttery vanilla and nutmeg.",
    "brand": "Goodness Bakery",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "18",
      "availability": "https://schema.org/InStock",
      "url": "https://thegoodnessbakery.com/preorder"
    }
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Chocolate Chip Cookies – 6 Pack",
    "image": "https://thegoodnessbakery.com/hero-cookie.jpg",
    "description": "Thick, chewy cookies loaded with melty chocolate chips and a soft gooey center.",
    "brand": "Goodness Bakery",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "18",
      "availability": "https://schema.org/InStock",
      "url": "https://thegoodnessbakery.com/preorder"
    }
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Butter Rolls – 12 Pack",
    "image": "https://thegoodnessbakery.com/hero-cookie.jpg",
    "description": "Fluffy, extra-milky homemade butter rolls brushed with warm sweet cream.",
    "brand": "Goodness Bakery",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "25",
      "availability": "https://schema.org/InStock",
      "url": "https://thegoodnessbakery.com/preorder"
    }
  }
]
`}
</script>

  <title>Menu | Goodness Bakery – Fresh Cookies & Butter Rolls in Moore, OK</title>
  <meta
    name="description"
    content="Explore our fresh bakery menu in Moore, Oklahoma. Sugar cookies, thick chocolate chip cookies, and buttery rolls baked fresh for preorder."
  />
  <meta
    name="keywords"
    content="Moore OK bakery menu, cookies Moore Oklahoma, chocolate chip cookies OK, sugar cookies Moore OK, bakery near Moore OK"
  />

  <meta property="og:title" content="Goodness Bakery Menu – Cookies & Rolls in Moore, OK" />
  <meta
    property="og:description"
    content="Check out our small-batch bakery menu featuring chocolate chip cookies, sugar cookies, and butter rolls made fresh in Moore, Oklahoma."
  />
  <meta property="og:url" content="https://thegoodnessbakery.com/menu" />
  <meta property="og:type" content="article" />
</Helmet>

    <main className="max-w-4xl mx-auto px-6 py-20">
        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-goodness-chocolate mb-4">
          Our Menu
        </h1>

        <p className="text-goodness-chocolate/75 text-sm md:text-base max-w-xl mb-12">
          Baked fresh in small batches with real butter, cozy flavors, and prayers.
          All items are sold by the box and made to order for Friday or Saturday pickup.
        </p>

        {/* COOKIES */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-goodness-chocolate mb-6">
            Cookies
          </h2>

          <ul className="space-y-6">
            <li className="flex justify-between gap-6">
              <div>
                <p className="font-medium text-goodness-chocolate">
                  Classic Sugar Cookies <span className="text-sm font-normal">(6-pack)</span>
                </p>
                <p className="text-sm text-goodness-chocolate/70">
                  Soft, thick, melt-in-your-mouth vanilla sugar cookies with cozy warm notes.
                </p>
              </div>
              <span className="font-medium text-goodness-chocolate">$18</span>
            </li>

            <li className="flex justify-between gap-6">
              <div>
                <p className="font-medium text-goodness-chocolate">
                  Thick Chocolate Chip <span className="text-sm font-normal">(6-pack)</span>
                </p>
                <p className="text-sm text-goodness-chocolate/70">
                  Crisp edges, gooey center, and melty chocolate chunks — our signature favorite.
                </p>
              </div>
              <span className="font-medium text-goodness-chocolate">$18</span>
            </li>

            <li className="flex justify-between gap-6">
              <div>
                <p className="font-medium text-goodness-chocolate">
                  Coconut Sugar Cookies <span className="text-sm font-normal">(6-pack)</span>
                </p>
                <p className="text-sm text-goodness-chocolate/70">
                  Golden edges, chewy center, and shredded coconut throughout.
                </p>
              </div>
              <span className="font-medium text-goodness-chocolate">$18</span>
            </li>

            <li className="flex justify-between gap-6">
              <div>
                <p className="font-medium text-goodness-chocolate">
                  Caramel Biscoff Cookies <span className="text-sm font-normal">(6-pack)</span>
                </p>
                <p className="text-sm text-goodness-chocolate/70">
                  Spiced Biscoff cookie with caramel swirls and Lotus crumble.
                </p>
              </div>
              <span className="font-medium text-goodness-chocolate">$21</span>
            </li>
          </ul>
        </section>

        {/* ROLLS */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-goodness-chocolate mb-6">
            Rolls
          </h2>

          <ul>
            <li className="flex justify-between gap-6">
              <div>
                <p className="font-medium text-goodness-chocolate">
                  Butter Rolls <span className="text-sm font-normal">(12-pack)</span>
                </p>
                <p className="text-sm text-goodness-chocolate/70">
                  Fluffy, extra-milky rolls brushed with warm sweet cream.
                </p>
              </div>
              <span className="font-medium text-goodness-chocolate">$25</span>
            </li>
          </ul>
        </section>

        {/* ORDER NOTE */}
        <div className="bg-goodness-cream border border-goodness-sugar rounded-xl p-6 text-sm text-goodness-chocolate/80 mb-12">
          Pre-orders open Sunday and close Thursday at 11:59 PM.
          Quantities are limited each week to ensure freshness.
        </div>

        {/* CTA */}
        <Link
          to="/preorder"
          className="inline-block px-8 py-3 rounded-full bg-goodness-caramel text-white font-semibold shadow-md hover:shadow-lg transition"
        >
          Pre-Order a Box
        </Link>
      </main>

    </>
  );
}

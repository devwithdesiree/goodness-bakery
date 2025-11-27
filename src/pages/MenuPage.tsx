import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import rollsImg from "../assets/rolls.jpg";
import sugarImg from "../assets/sugar.jpg";
import coconutImg from "../assets/coco.jpg";
import biscoffImg from "../assets/biscoff.jpg";
import chocolateChipImg from "../assets/choco.jpg";
import MenuItem from "../components/MenuItem";

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

    <div className="max-w-6xl mx-auto px-4 py-16">
  <h1 className="text-3xl md:text-4xl font-semibold text-goodness-chocolate mb-6">
    Our Menu
  </h1>

  <p className="text-goodness-chocolate/80 max-w-xl text-sm md:text-base mb-10">
    Baked fresh in small batches with real butter, cozy flavors, and prayer.
    Every box is made to order for Friday or Saturday pickup.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  <Link to="/preorder" >
      <MenuItem
      title="Butter Rolls – 12 Pack"
      price="$25"
      description="Fluffy, extra-milky rolls brushed with warm sweet cream. Perfect for breakfast or dessert."
      image={rollsImg}
      />
    </Link>
    <Link to="/preorder" >
    <MenuItem
      title="Classic Sugar Cookies – 6 Pack"
      price="$18"
      description="Soft, thick, melt-in-your-mouth vanilla sugar cookies with cozy warm notes."
      image={sugarImg}
    />
    </Link>
    
  <Link to="/preorder" >

    <MenuItem
      title="Coconut Sugar Cookies – 6 Pack"
      price="$18.00"
      description="Golden edges, chewy center, and shredded coconut throughout. Sweet, warm, tropical comfort."
      image={coconutImg}
    />
    </Link>

    <Link to="/preorder" >
    <MenuItem
      title="Caramel Biscoff Cookies – 6 Pack"
      price="$21.00"
      description="Soft Biscoff cookie loaded with cinnamon spice, caramel swirl, and Lotus crumble."
      image={biscoffImg}
    />
    </Link>

    <Link to="/preorder" >
    <MenuItem
      title="Thick Chocolate Chip – 6 Pack"
      price="$18.00"
      description="Thick, gooey center with melty chocolate chunks. Crisp edges, soft middle — our signature favorite."
      image={chocolateChipImg}
    />
    </Link>

  </div>
</div>

    </>
  );
}

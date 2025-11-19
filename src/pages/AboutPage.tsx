import { Helmet } from "react-helmet";

export default function AboutPage() {
  return (<>
  <Helmet>
  <title>About Us | Goodness Bakery – Faith-Centered Home Bakery in Moore, OK</title>
  <meta
    name="description"
    content="Learn about Goodness Bakery, a faith-centered home bakery in Moore, Oklahoma. Small-batch, handcrafted cookies and rolls inspired by warmth and everyday blessings."
  />
  <meta
    name="keywords"
    content="about bakery Moore OK, home bakery Oklahoma, Christian bakery Moore, small batch bakery OK"
  />

  <meta property="og:title" content="About Goodness Bakery – Moore Oklahoma Home Bakery" />
  <meta
    property="og:description"
    content="A faith-filled home bakery in Moore, Oklahoma crafting cozy, homemade cookies and buttery rolls with purpose and prayer."
  />
  <meta property="og:url" content="https://thegoodnessbakery.com/about" />
  <meta property="og:type" content="article" />
</Helmet>

    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-goodness-chocolate text-center mb-8">
        About Goodness Bakery
      </h1>

      <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
        Goodness Bakery was born from a simple desire: to share God’s goodness 
        through warm, homemade treats. What began as family recipes and small 
        kitchen experiments quickly grew into a passion for creating baked goods 
        that make homes feel cozy and hearts feel loved.
      </p>

      <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
        Every cookie, roll, and sweet treat is made in small batches — crafted 
        with prayer, intention, and real ingredients. No shortcuts, no rushing. 
        Just genuine homemade comfort baked into every bite.
      </p>

      <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
        Goodness Bakery is more than a bakery — it’s a place where faith meets 
        flavor, where warmth is intentional, and where every order is an opportunity 
        to bless someone’s day. Whether you’re grabbing treats for family night, a 
        Bible study group, or just a moment of self-care, my hope is that you taste 
        the love and goodness behind every recipe.
      </p>

      <p className="text-goodness-chocolate/70 text-center italic text-sm md:text-base max-w-xl mx-auto">
        “Taste and see that the Lord is good.” — Psalm 34:8
      </p>
    </section>
    </>
  );
}

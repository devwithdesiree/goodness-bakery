import { Helmet } from "react-helmet";
import ScriptureImg from "../assets/bible-study.jpg";
import bakingImg from "../assets/baking.jpg";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Us | Goodness Bakery – Faith-Centered Home Bakery in Moore, OK
        </title>
        <meta
          name="description"
          content="Learn about Goodness Bakery, a faith-centered home bakery in Moore, Oklahoma. Small-batch, handcrafted cookies and rolls inspired by warmth and everyday blessings."
        />
        <meta
          name="keywords"
          content="about bakery Moore OK, home bakery Oklahoma, Christian bakery Moore, small batch bakery OK"
        />

        <meta
          property="og:title"
          content="About Goodness Bakery – Moore Oklahoma Home Bakery"
        />
        <meta
          property="og:description"
          content="A faith-filled home bakery in Moore, Oklahoma crafting cozy, homemade cookies and buttery rolls with purpose and prayer."
        />
        <meta
          property="og:url"
          content="https://thegoodnessbakery.com/about"
        />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ABOUT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-3xl md:text-4xl font-bold text-goodness-chocolate text-center mb-10">
          About Goodness Bakery
        </h1>

        {/* INTRO PARAGRAPH */}
        <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Goodness Bakery was born from a simple desire: to share God’s goodness
          through warm, homemade treats. What began as family recipes and small
          kitchen experiments quickly grew into a passion for creating baked
          goods that make homes feel cozy and hearts feel loved.
        </p>

        {/* SCRIPTURE IMAGE BLOCK */}
        <div className="max-w-3xl mx-auto mb-16">
          <img
            src={ScriptureImg}
            alt="Scripture Inspiration"
            className="w-full rounded-3xl shadow-md object-cover"
          />
          <p className="text-center text-goodness-chocolate/60 text-sm italic mt-4">
            A reminder of why we bake — to share the sweetness of God’s love.
          </p>
        </div>

        {/* WHY WE BAKE SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* TEXT */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-goodness-chocolate mb-4">
              Why We Bake
            </h2>
            <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed mb-4">
              Every cookie, roll, and sweet treat is made with prayer and
              intention. Baking is more than mixing flour and butter — it’s a
              ministry, a way to serve our community, and a way to create small
              moments of comfort in a busy world.
            </p>
            <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed">
              At Goodness Bakery, we believe food can be a blessing. That a warm
              cookie shared with someone you love can soften a hard day, spark a
              smile, and make your home feel a little warmer.
            </p>
          </div>

          {/* IMAGE PLACEHOLDER (can replace anytime) */}
          <div className="w-full">
  <img
    src={bakingImg}
    alt="Ingredients and baking inspiration"
    className="w-full h-auto rounded-3xl shadow-md object-cover"
  />
</div>
        </div>

        {/* MISSION ENDING PARAGRAPH */}
        <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Goodness Bakery is more than a bakery — it’s a place where faith meets
          flavor, where warmth is intentional, and where every order is an
          opportunity to bless someone’s day. Whether you’re grabbing treats for
          family night, a Bible study group, or just a moment of self-care, my
          hope is that you taste the love and goodness in every recipe.
        </p>

        {/* SCRIPTURE */}
        <p className="text-goodness-chocolate/70 text-center italic text-sm md:text-base max-w-xl mx-auto">
          “Taste and see that the Lord is good.” — Psalm 34:8
        </p>
      </section>
    </>
  );
}

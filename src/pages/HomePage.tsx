import { Link } from "react-router-dom";
import heroImage from "../assets/hero-cookie.jpg";


export default function HomePage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT SIDE — TEXT */}
      <div>
        <p className="uppercase tracking-[0.2em] text-xs text-goodness-caramel mb-3">
          Small Batch · Big Flavor
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-goodness-chocolate leading-tight mb-5">
          Goodness Bakery: Thick, cozy bakes that make your whole house smell like a hug.
        </h1>

        <p className="text-sm md:text-base text-goodness-chocolate/80 mb-8 max-w-md">
          Faith-centered, hand-crafted cookies, rolls, and sweet treats made with warm spices, 
          real butter, and gooey centers. Preorder a box and treat yourself, your family, 
          or your Bible study group.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <Link
            to="/preorder"
            className="px-6 py-3 rounded-full bg-goodness-caramel text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-[1px] transition"
          >
            Preorder a Bakery Box
          </Link>

          <span className="text-xs text-goodness-chocolate/70">
            Limited batches · Preorders only for now
          </span>
        </div>
      </div>

      {/* RIGHT SIDE — IMAGE WITH BACKGROUND CARD */}
      <div className="relative max-w-md mx-auto">
        {/* Background offset card */}
        <div className="absolute -right-4 top-4 w-full h-full bg-goodness-caramel/30 rounded-3xl"></div>

        {/* Main photo */}
        <img
          src={heroImage}
          alt="Goodness Bakery Cookies"
          className="
            relative 
            z-10 
            rounded-3xl 
            shadow-xl 
            w-full 
            h-full 
            object-cover
          "
        />
      </div>
    </section>

{/* MISSION SECTION */}
<section className="max-w-5xl mx-auto px-6 py-20 text-center bg-goodness-cream/60 rounded-3xl shadow-sm mt-10 border border-goodness-sugar/50">
  
  {/* decorative accent */}
  <div className="w-16 h-1 bg-goodness-caramel mx-auto mb-4 rounded-full"></div>

  <h2 className="text-3xl md:text-4xl font-bold text-goodness-chocolate mb-6">
    Our Mission
  </h2>

  <p className="text-goodness-chocolate/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
    Our mission is to share God’s goodness through every bite. At Goodness Bakery,
    we create small-batch, hand-crafted treats made with prayer, intention, and
    real ingredients — the way home should feel. We exist to warm hearts, gather
    families, and remind people of the sweetness found in everyday blessings.
  </p>

  <p className="text-goodness-chocolate/70 text-sm md:text-base italic max-w-xl mx-auto">
    “Taste and see that the Lord is good; blessed is the one who takes refuge in Him.”
    — Psalm 34:8
  </p>
</section>


      
      {/* MENU SECTION */}
{/* MENU SECTION */}
<section className="max-w-6xl mx-auto px-4 py-16" id="menu">
  <h2 className="text-2xl md:text-3xl font-semibold text-goodness-chocolate mb-6">
    Our Menu
  </h2>

  <p className="text-goodness-chocolate/80 text-sm mb-10 max-w-lg">
    Baked fresh in small batches with real butter, warm spices, and lots of love. 
    Preorder a box and treat yourself or someone you love.
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    {/* SUGAR COOKIES */}
    <div className="p-6 bg-white border border-goodness-sugar rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-goodness-chocolate">
          Sugar Cookies – 6 Pack
        </h3>
        <span className="text-goodness-caramel font-semibold">$15</span>
      </div>
      <p className="text-sm text-goodness-chocolate/70 mt-2">
        Soft, thick, melt-in-your-mouth sugar cookies with buttery vanilla and a 
        hint of nutmeg. Pure cozy goodness.
      </p>
    </div>

    {/* CHOCOLATE CHIP COOKIES */}
    <div className="p-6 bg-white border border-goodness-sugar rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-goodness-chocolate">
          Chocolate Chip Cookies – 6 Pack
        </h3>
        <span className="text-goodness-caramel font-semibold">$18</span>
      </div>
      <p className="text-sm text-goodness-chocolate/70 mt-2">
        Thick, chewy cookies loaded with melty chocolate chips. Crisp edges, gooey 
        centers — the signature Goodness Bakery classic.
      </p>
    </div>

    {/* BUTTER ROLLS */}
    <div className="p-6 bg-white border border-goodness-sugar rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-goodness-chocolate">
          Butter Rolls – 4 Pack
        </h3>
        <span className="text-goodness-caramel font-semibold">$12</span>
      </div>
      <p className="text-sm text-goodness-chocolate/70 mt-2">
        Fluffy, extra-milky butter rolls baked golden and brushed with warm sweet 
        cream. Perfect for breakfast or dessert.
      </p>
    </div>

  </div>
</section>
{/* HOW IT WORKS */}
<section className="max-w-6xl mx-auto px-4 py-16" id="how-it-works">
  <h2 className="text-2xl md:text-3xl font-semibold text-goodness-chocolate mb-6">
    How Preorders Work
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    {/* STEP 1 */}
    <div className="text-center">
      <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel text-white flex items-center justify-center font-bold">
        1
      </div>
      <h3 className="font-semibold text-goodness-chocolate mb-1">Choose</h3>
      <p className="text-sm text-goodness-chocolate/70">
        Browse our menu and pick your favorite goodies.
      </p>
    </div>

    {/* STEP 2 */}
    <div className="text-center">
      <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel text-white flex items-center justify-center font-bold">
        2
      </div>
      <h3 className="font-semibold text-goodness-chocolate mb-1">Preorder</h3>
      <p className="text-sm text-goodness-chocolate/70">
        Fill out the preorder form with your details and date.
      </p>
    </div>

    {/* STEP 3 */}
    <div className="text-center">
      <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel text-white flex items-center justify-center font-bold">
        3
      </div>
      <h3 className="font-semibold text-goodness-chocolate mb-1">Pay</h3>
      <p className="text-sm text-goodness-chocolate/70">
        You’ll receive a payment link right away. Pay securely via Stripe.
      </p>
    </div>

    {/* STEP 4 */}
    <div className="text-center">
      <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel text-white flex items-center justify-center font-bold">
        4
      </div>
      <h3 className="font-semibold text-goodness-chocolate mb-1">Pickup</h3>
      <p className="text-sm text-goodness-chocolate/70">
        I bake your order fresh. Pick up on your chosen date!
      </p>
    </div>
  </div>
</section>
{/* CONTACT SECTION WITH FORM */}
<section className="max-w-5xl mx-auto px-6 py-20" id="contact">
  <h2 className="text-2xl md:text-3xl font-semibold text-goodness-chocolate text-center mb-4">
    Get In Touch
  </h2>

  <p className="text-goodness-chocolate/80 text-sm md:text-base max-w-xl mx-auto text-center mb-10">
    Have a question or a custom order request? Send me a message and I’ll get back to you soon.
  </p>

  <form className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-goodness-sugar space-y-5">
    <div>
      <label className="text-xs text-goodness-chocolate font-medium">Name</label>
      <input
        className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-goodness-caramel"
      />
    </div>

    <div>
      <label className="text-xs text-goodness-chocolate font-medium">Email</label>
      <input
        type="email"
        className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-goodness-caramel"
      />
    </div>

    <div>
      <label className="text-xs text-goodness-chocolate font-medium">Message</label>
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
    <p>Email: thegoodnessbakery@gmail.com</p>
    <p>Phone: (405) 967-9160</p>
    <p>Norman, OK — Pickup Available</p>
  </div>
</section>






    </div>
  );
}

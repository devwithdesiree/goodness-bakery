import { type FormEvent, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CookieSpinner from "../components/CookieSpinner";


const prices: Record<string, number> = {
  "Classic Sugar Cookies": 1800,  // $18
  "Coconut Sugar Cookies": 1800,  // $18
  "Chocolate Chip Cookies": 1800, // $18
  "Caramel Biscoff Cookies": 2100, // $21
  "Butter Rolls": 2500 // $25
};


export default function PreorderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    flavor: "",
    quantity: 1,
    method: "pickup",
    date: "",
    notes: "",
    smsConsent: false, 
  });

  const [, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  // 🔸 REPLACE this with your real Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqanbobk";

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  }
async function handleCheckout() {
  try{
    setLoading(true);
    const priceInCents = prices[form.flavor];

  if (!priceInCents) {
    alert("Please select a valid flavor.");
    return;
  }
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/checkout/create-session`, {

    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      productName: form.flavor,
      amount: priceInCents,          // uses real price
      quantity: form.quantity        // multiplies in Stripe
    })
  });

  const data = await response.json();

  window.location.href = data.url; // take user to Stripe Checkout
  }
  catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setSubmitted(true);
      handleCheckout();

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  }


  return (
    <>
    <Helmet>
  <title>Preorder | Goodness Bakery – Homemade Cookies in Moore, Oklahoma</title>
  <meta
    name="description"
    content="Preorder your fresh homemade cookies and buttery rolls from Goodness Bakery in Moore, OK. Secure your batch before we sell out!"
  />
  <meta
    name="keywords"
    content="preorder cookies Moore OK, order bakery Moore Oklahoma, preorder homemade cookies OK"
  />

  <meta property="og:title" content="Preorder Homemade Cookies from Goodness Bakery" />
  <meta
    property="og:description"
    content="Reserve your small-batch cookies and rolls today. Pickup available in Moore, Oklahoma."
  />
  <meta property="og:url" content="https://thegoodnessbakery.com/preorder" />
  <meta property="og:type" content="article" />
   <link rel="canonical" href="https://thegoodnessbakery.com/preorder" />
</Helmet>

    <section className="max-w-xl mx-auto px-4 py-16">

      {/* HOW PREORDERING WORKS SECTION */}
<section className="mb-12 bg-goodness-cream/70 border border-goodness-sugar rounded-3xl p-6 md:p-10 shadow-sm">

  <h2 className="text-xl md:text-2xl font-bold text-goodness-chocolate mb-4 text-center">
    How Preordering Works
  </h2>

  <p className="text-goodness-chocolate/70 text-sm md:text-base text-center max-w-lg mx-auto mb-10">
    We bake in small batches with love, intention, and real ingredients.  
    Here’s how to reserve your box of goodness for this week:
  </p>

  <div className="grid md:grid-cols-4 gap-8">

    {/* STEP 1 */}
    <div className="text-center">
      <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel/90 text-white flex items-center justify-center font-bold">
        1
      </div>
      <h3 className="font-semibold text-goodness-chocolate mb-1">Pick Your Treat</h3>
      <p className="text-xs text-goodness-chocolate/70">
        Choose your favorite cookies or buttery rolls.
      </p>
    </div>

    {/* STEP 2 */}
    <div className="text-center">
      <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel/90 text-white flex items-center justify-center font-bold">
        2
      </div>
      <h3 className="font-semibold text-goodness-chocolate mb-1">Submit Your Preorder</h3>
      <p className="text-xs text-goodness-chocolate/70">
        Preorders are open Monday–Thursday each week.
      </p>
    </div>

    {/* STEP 3 */}
    <div className="text-center">
      <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel/90 text-white flex items-center justify-center font-bold">
        3
      </div>
      <h3 className="font-semibold text-goodness-chocolate mb-1">Secure Your Payment</h3>
      <p className="text-xs text-goodness-chocolate/70">
        After the form, complete your payment through Stripe.
      </p>
    </div>

    {/* STEP 4 */}
    <div className="text-center">
      <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-goodness-caramel/90 text-white flex items-center justify-center font-bold">
        4
      </div>
      <h3 className="font-semibold text-goodness-chocolate mb-1">Pick Up Fresh</h3>
      <p className="text-xs text-goodness-chocolate/70">
        Pickups are available Friday & Saturday in Moore, OK.
      </p>
    </div>

  </div>
</section>

      <h1 className="text-2xl font-semibold text-goodness-chocolate mb-4">
        Preorder Your Goodness Bakery Box
      </h1>

      

      <p className="text-sm text-goodness-chocolate/70 mb-6">
        Fill out this quick form. After submitting, you&apos;ll be redirected to
        complete payment for your selected treat.
      </p>

      {error && <p className="mb-4 text-red-600 text-sm">{error}</p>}

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-goodness-sugar rounded-2xl p-6 shadow-sm space-y-4"
      >
        {/* NAME */}
        <div className="space-y-1">
          <label className="text-xs text-goodness-chocolate font-medium">
            Name
          </label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-goodness-caramel"
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-1">
          <label className="text-xs text-goodness-chocolate font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-goodness-caramel"
          />
        </div>

        {/* PHONE */}
        <div className="space-y-1">
          <label className="text-xs text-goodness-chocolate font-medium">
            Phone
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-goodness-caramel"
          />
        </div>

        {/* SMS CONSENT */}
        <label className="flex items-start gap-2 text-sm text-gray-700">
  <input
    type="checkbox"
    required
    name="smsConsent"
    className="mt-1 h-4 w-4"
  />
  <span>
    I agree to receive SMS messages from Goodness Bakery related to my order.
    Message & data rates may apply. Reply STOP to opt out. View our 
    <a href="/privacy" className="underline text-blue-800"> Privacy Policy</a> and 
    <a href="/terms" className="underline text-blue-800"> Terms of Service</a>.
  </span>
</label>


        {/* FLAVOR */}
        <div className="space-y-1">
          <label className="text-xs text-goodness-chocolate font-medium">
            Flavor
          </label>
          <select
            name="flavor"
            required
            value={form.flavor}
            onChange={handleChange}
            className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm"
          >
            <option value="">Choose a flavor</option>
            <option value="Classic Sugar Cookies">Sugar Cookies – 6 Pack ($18)</option>
            <option value="Coconut Sugar Cookies">Sugar Cookies – 6 Pack ($18)</option>
            <option value="Chocolate Chip Cookies">Chocolate Chip Cookies – 6 Pack ($18)</option>
            <option value="Caramel Biscoff Cookies">Caramel Biscoff Cookies – 6 Pack ($21)</option>
            <option value="Butter Rolls">Butter Rolls – 12 Pack ($25)</option>
          </select>
        </div>

        {/* QUANTITY */}
        <div className="space-y-1">
          <label className="text-xs text-goodness-chocolate font-medium">
            Number of boxes
          </label>
          <input
            type="number"
            name="quantity"
            min={1}
            value={form.quantity}
            onChange={handleChange}
            className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm"
          />
          <p className="text-[11px] text-goodness-chocolate/60">
            Note: Payment page will show price per box. Multiply based on how many
            boxes you order.
          </p>
        </div>

        {/* PICKUP/DELIVERY */}
        <div className="space-y-1">
          <label className="text-xs text-goodness-chocolate font-medium">
            Select your pickup slot.
          </label>
          <div className="flex gap-3 mt-1">          
          </div>
        </div>

        {/* DATE */}
        <div className="space-y-1">
          <label className="text-xs text-goodness-chocolate font-medium">
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm"
          />
        </div>

        {/* NOTES */}
        <div className="space-y-1">
          <label className="text-xs text-goodness-chocolate font-medium">
            Notes (allergies, special requests, event details, etc.)
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            className="w-full border border-goodness-sugar bg-goodness-cream/50 px-3 py-2 rounded-lg text-sm"
          />
        </div>

<button
  type="submit"
  disabled={loading}
  className={`w-full mt-4 px-5 py-3 rounded-lg text-white text-sm font-semibold shadow-sm 
    ${loading ? "bg-goodness-caramel/50 cursor-not-allowed" : "bg-goodness-caramel hover:shadow-md"}`}
>
  {loading ? (
    <CookieSpinner />
  ) : (
    "Submit Preorder"
  )}
</button>

      </form>


      {/* CONTACT SECTION */}
<section className="max-w-5xl mx-auto px-4 py-20 text-center" id="contact">
  <h2 className="text-2xl md:text-3xl font-semibold text-goodness-chocolate mb-6">
    Contact Us
  </h2>

  <p className="text-goodness-chocolate/80 text-sm md:text-base max-w-xl mx-auto mb-8">
    Have a question, special request, or want to place a custom order?  
    I’d love to hear from you!
  </p>

  <div className="space-y-3 text-goodness-chocolate/80 text-sm">
    <p>
      📧 <span className="font-medium text-goodness-chocolate">Email: </span>  
      tastethegoodnessbakery@gmail.com
    </p>

    <p>
      📱 <span className="font-medium text-goodness-chocolate">Phone: </span>  
      (405) 967-9160
    </p>

    <p>
      📍 <span className="font-medium text-goodness-chocolate">Location: </span>  
      Moore, OK (pickup available)
    </p>
  </div>

  <Link
    to="/preorder"
    className="inline-block mt-8 px-6 py-3 rounded-full bg-goodness-caramel text-white text-sm font-semibold shadow-md hover:shadow-lg transition"
  >
    Preorder Now
  </Link>
</section>

    </section>
    </>
    
  );
}

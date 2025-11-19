import { type FormEvent, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const paymentLinks: Record<string, string> = {
  "Sugar Cookies": "https://buy.stripe.com/eVq8wOeBc0Q990T3AM3Nm02",
  "Chocolate Chip Cookies": "https://buy.stripe.com/aFa9AS0KmfL33Gz6MY3Nm01",
  "Butter Rolls": "https://buy.stripe.com/9B64gyct49mFfph1sE3Nm03",
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
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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

  function handleMethodChange(value: string) {
    setForm((prev) => ({ ...prev, method: value }));
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
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  }

  // ✅ After submit: show dynamic payment link based on flavor
  if (submitted) {
    const paymentUrl = paymentLinks[form.flavor];

    return (
      <section className="max-w-xl mx-auto px-4 py-16">
        <div className="bg-white border border-goodness-sugar rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-goodness-chocolate mb-3">
            Thank you! Your preorder has been received.
          </h2>

          <p className="text-sm text-goodness-chocolate/80 mb-4">
            Please complete your payment below. Once payment is confirmed, I will
            follow up with pick-up/delivery details.
          </p>

          {paymentUrl ? (
            <a
              href={paymentUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-goodness-caramel text-white text-sm font-semibold shadow-md hover:shadow-lg transition"
            >
              Pay for {form.flavor}
            </a>
          ) : (
            <p className="text-sm text-red-600">
              I couldn&apos;t find a payment link for this flavor. Please contact
              me directly to complete your order.
            </p>
          )}
        </div>
      </section>
    );
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
</Helmet>

    <section className="max-w-xl mx-auto px-4 py-16">
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
            <option value="Sugar Cookies">Sugar Cookies – 6 Pack ($15.99)</option>
            <option value="Chocolate Chip Cookies">
              Chocolate Chip Cookies – 6 Pack ($17.99)
            </option>
            <option value="Butter Rolls">Butter Rolls – 4 Pack ($11.99)</option>
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
            Pickup or Delivery?
          </label>
          <div className="flex gap-3 mt-1">
            <button
              type="button"
              onClick={() => handleMethodChange("pickup")}
              className={`px-3 py-1.5 rounded-full text-xs border transition ${
                form.method === "pickup"
                  ? "bg-goodness-caramel text-white border-goodness-caramel"
                  : "border-goodness-sugar text-goodness-chocolate bg-goodness-cream/50"
              }`}
            >
              Pickup
            </button>

            <button
              type="button"
              onClick={() => handleMethodChange("delivery")}
              className={`px-3 py-1.5 rounded-full text-xs border transition ${
                form.method === "delivery"
                  ? "bg-goodness-caramel text-white border-goodness-caramel"
                  : "border-goodness-sugar text-goodness-chocolate bg-goodness-cream/50"
              }`}
            >
              Delivery (if available)
            </button>
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
          className="w-full mt-4 px-5 py-3 rounded-full bg-goodness-caramel text-white text-sm font-semibold shadow-md hover:shadow-lg transition"
        >
          Submit Preorder
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
      📧 <span className="font-medium text-goodness-chocolate">Email:</span>  
      tastethegoodnessbakery@gmail.com
    </p>

    <p>
      📱 <span className="font-medium text-goodness-chocolate">Phone:</span>  
      (555) 123-4567
    </p>

    <p>
      📍 <span className="font-medium text-goodness-chocolate">Location:</span>  
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

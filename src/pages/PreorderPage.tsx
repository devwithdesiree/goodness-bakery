import { useState, type FormEvent } from "react";
import { Helmet } from "react-helmet";
import CookieSpinner from "../components/CookieSpinner";

/* -------------------------------------------
   PRICE MAP (Stripe uses this)
------------------------------------------- */
const prices: Record<string, number> = {
  "Classic Sugar Cookies": 1800,
  "Coconut Sugar Cookies": 1800,
  "Chocolate Chip Cookies": 1800,
  "Caramel Biscoff Cookies": 2100,
  "Butter Rolls": 2500,
};

/* -------------------------------------------
   PREORDER WINDOW LOGIC
------------------------------------------- */
function isPreorderOpen() {
  const FORCE_CLOSED = false;
  if (FORCE_CLOSED) return false;
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const minute = now.getMinutes();

  // Closed Friday (5) & Saturday (6)
  if (day === 5 || day === 6) return false;

  // Open Sunday–Wednesday
  if (day >= 0 && day <= 3) return true;

  // Thursday: open until 11:59 PM
  if (day === 4) {
    return hour < 23 || (hour === 23 && minute <= 59);
  }

  return false;
}

/* -------------------------------------------
   COMPONENT
------------------------------------------- */
export default function PreorderPage() {
  const preorderOpen = isPreorderOpen();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    flavor: "",
    quantity: 1,
    pickupDay: "",
    notes: "",
    smsConsent: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqanbobk";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : name === "quantity"
          ? Number(value)
          : value,
    }));
  }

  async function handleCheckout() {
    const priceInCents = prices[form.flavor];
    if (!priceInCents) throw new Error("Invalid flavor selected");

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/checkout/create-session`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: form.flavor,
          amount: priceInCents,
          quantity: form.quantity,
        }),
      }
    );

    const data = await response.json();
    window.location.href = data.url;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!preorderOpen) {
      setError("Preorders are currently closed. Please check back on Sunday.");
      return;
    }

    try {
      setLoading(true);

      // 1. Send data to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Form submission failed");

      // 2. Redirect to Stripe
      await handleCheckout();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Preorder | Goodness Bakery</title>
        <meta
          name="description"
          content="Preorder fresh homemade cookies and rolls from Goodness Bakery in Moore, Oklahoma."
        />
        <link rel="canonical" href="https://thegoodnessbakery.com/preorder" />
      </Helmet>

      <main className="max-w-md mx-auto px-5 py-20">
        {/* HEADER */}
        <h1 className="text-2xl font-semibold text-goodness-chocolate text-center mb-2">
          Preorder Your Bakery Box
        </h1>

        <p className="text-sm text-goodness-chocolate/70 text-center mb-6">
          Preorders close Thursday at 11:59 PM · Pickup Friday or Saturday
        </p>

        {/* CLOSED STATE */}
        {!preorderOpen && (
          <div className="bg-goodness-cream border border-goodness-sugar rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-goodness-chocolate mb-2">
              Preorders Are Closed
            </h2>
            <p className="text-sm text-goodness-chocolate/70">
              This week’s baking is complete.
              <br />
              Preorders reopen on Sunday.
            </p>
          </div>
        )}

        {/* OPEN STATE */}
        {preorderOpen && (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-goodness-sugar rounded-2xl p-6 shadow-sm space-y-4"
          >
            <input
              name="name"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-goodness-sugar px-3 py-2 rounded-lg text-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-goodness-sugar px-3 py-2 rounded-lg text-sm"
            />

            <input
              name="phone"
              placeholder="Phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-goodness-sugar px-3 py-2 rounded-lg text-sm"
            />

            <select
              name="flavor"
              required
              value={form.flavor}
              onChange={handleChange}
              className="w-full border border-goodness-sugar px-3 py-2 rounded-lg text-sm"
            >
              <option value="">Select an item</option>
              <option value="Classic Sugar Cookies">Sugar Cookies – 6 Pack ($18)</option>
              <option value="Coconut Sugar Cookies">Coconut Sugar Cookies – 6 Pack ($18)</option>
              <option value="Chocolate Chip Cookies">Chocolate Chip Cookies – 6 Pack ($18)</option>
              <option value="Caramel Biscoff Cookies">Caramel Biscoff Cookies – 6 Pack ($21)</option>
              <option value="Butter Rolls">Butter Rolls – 12 Pack ($25)</option>
            </select>

            <input
              type="number"
              name="quantity"
              min={1}
              value={form.quantity}
              onChange={handleChange}
              className="w-full border border-goodness-sugar px-3 py-2 rounded-lg text-sm"
            />

            <select
              name="pickupDay"
              required
              value={form.pickupDay}
              onChange={handleChange}
              className="w-full border border-goodness-sugar px-3 py-2 rounded-lg text-sm"
            >
              <option value="">Pickup day</option>
              <option value="Friday">Friday (4-7 PM)</option>
              <option value="Saturday">Saturday(4-7 PM)</option>
            </select>

            <textarea
              name="notes"
              rows={3}
              placeholder="Notes (optional)"
              value={form.notes}
              onChange={handleChange}
              className="w-full border border-goodness-sugar px-3 py-2 rounded-lg text-sm"
            />

            <label className="flex gap-2 text-xs text-goodness-chocolate/70">
              <input
                type="checkbox"
                name="smsConsent"
                required
                checked={form.smsConsent}
                onChange={handleChange}
              />
              I agree to receive order updates via SMS.
            </label>

            {error && (
              <p className="text-xs text-red-600 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold
                ${
                  loading
                    ? "bg-goodness-caramel/50 cursor-not-allowed"
                    : "bg-goodness-caramel hover:shadow-md"
                }`}
            >
              {loading ? <CookieSpinner /> : "Continue to Payment"}
            </button>

            <p className="text-[11px] text-center text-goodness-chocolate/60">
              You’ll be redirected to Stripe to complete payment.
            </p>
          </form>
        )}
      </main>
    </>
  );
}

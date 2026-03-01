import CookieSpinner from "../../components/CookieSpinner";
import type { PickupFormState } from "./pickup.types";

interface PickupFormProps {
  form: PickupFormState;
  loading: boolean;
  error: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onSubmit: () => void;
}

export default function PickupForm({
  form,
  loading,
  error,
  onChange,
  onSubmit,
}: PickupFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-4">
      <input
        name="name"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={onChange}
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={onChange}
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={onChange}
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <select
        name="flavor"
        required
        value={form.flavor}
        onChange={onChange}
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm bg-white"
      >
        <option value="">Select flavor</option>
        <option value="Biscoff">Biscoff</option>
        <option value="Chocolate">Chocolate</option>
        <option value="Cookies & Cream">Cookies & Cream</option>
      </select>

      <select
        name="boxSize"
        required
        value={form.boxSize}
        onChange={onChange}
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm bg-white"
      >
        <option value="">Select box size</option>
        <option value="6_PACK">6 Pack - $22</option>
        <option value="12_PACK">12 Pack - $42</option>
      </select>

      <input
        type="number"
        name="quantity"
        min={1}
        value={form.quantity}
        onChange={onChange}
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <select
        name="pickupDay"
        required
        value={form.pickupDay}
        onChange={onChange}
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm bg-white"
      >
        <option value="">Select pickup day</option>
        <option value="Friday">Friday (4-7 PM)</option>
        <option value="Saturday">Saturday (4-7 PM)</option>
      </select>

      <textarea
        name="notes"
        rows={2}
        placeholder="Notes (optional)"
        value={form.notes}
        onChange={onChange}
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <label className="flex gap-2 text-[11px] text-goodness-muted items-start">
        <input
          type="checkbox"
          name="smsConsent"
          required
          checked={form.smsConsent}
          onChange={onChange}
          className="mt-[2px]"
        />
        I agree to receive order updates via SMS.
      </label>

      {error && (
        <p className="text-xs text-red-600 text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2.5 rounded-md text-white text-sm font-medium transition
          ${
            loading
              ? "bg-goodness-gold/60 cursor-not-allowed"
              : "bg-goodness-gold hover:opacity-90"
          }`}
      >
        {loading ? <CookieSpinner /> : "Continue to Secure Payment"}
      </button>

      <p className="text-[10px] text-center text-goodness-muted">
        Secure checkout powered by Stripe.
      </p>
    </form>
  );
}

import { useState } from "react";

export default function EventInquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const formData = new FormData(e.currentTarget);

      const response = await fetch("https://formspree.io/f/mqanbobk", {
        method: "POST",
        body: formData,
        headers:{
          "Accept": "application/json"
        }
      });

      if (!response.ok) throw new Error("Failed");

      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <p className="text-center text-sm text-goodness-muted">
        Thank you. We will respond within 24 hours.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="name"
        placeholder="Full Name"
        required
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <input
        name="eventType"
        placeholder="Event Type (Wedding, Shower, Corporate...)"
        required
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <input
        type="date"
        name="eventDate"
        required
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <input
        type="number"
        name="estimatedQuantity"
        placeholder="Estimated Quantity"
        required
        min={24}
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      <textarea
        name="details"
        rows={3}
        placeholder="Additional details (optional)"
        className="w-full border border-goodness-charcoal/10 px-3 py-2 rounded-md text-sm"
      />

      {error && (
        <p className="text-xs text-red-600 text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 rounded-md text-white text-sm font-medium bg-goodness-gold hover:opacity-90 transition"
      >
        {loading ? "Submitting..." : "Request Quote"}
      </button>

    </form>
  );
}

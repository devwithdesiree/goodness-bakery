import { useState } from "react";
import { PRICES } from "./pickup.Constants";
import { sendOrderToFormspree, createStripeSession } from "./pickup.service";
import type { PickupFormState } from "./pickup.types";

export function usePickupForm(formspreeEndpoint: string) {
  const [form, setForm] = useState<PickupFormState>({
  name: "",
  email: "",
  phone: "",
  flavor: "",
  boxSize: "",
  quantity: 1,
  pickupDay: "",
  notes: "",
  smsConsent: false,
});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  async function submit() {
    setError("");

    try {
      setLoading(true);

      await sendOrderToFormspree(formspreeEndpoint, form);

      const price = PRICES[form.boxSize];
      if (!price) throw new Error("Invalid box size");

      const url = await createStripeSession(
        `${form.flavor} – ${form.boxSize}`,
        price,
        form.quantity
      );

      window.location.href = url;
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return {
    form,
    loading,
    error,
    handleChange,
    submit,
  };
}

export async function sendOrderToFormspree(
  endpoint: string,
  formData: unknown
) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }
}

export async function createStripeSession(
  productKey: string,
  quantity: number
) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/checkout/create-session`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productKey,
        quantity,
      }),
    }
  );
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  const data = await response.json();
  return data.url;
}

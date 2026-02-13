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
  productName: string,
  amount: number,
  quantity: number
) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/checkout/create-session`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName,
        amount,
        quantity,
      }),
    }
  );

  const data = await response.json();
  return data.url;
}

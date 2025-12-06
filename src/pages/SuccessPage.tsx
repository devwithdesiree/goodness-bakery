import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-goodness-cream/60">
      <div className="bg-white shadow-lg border border-goodness-sugar rounded-3xl max-w-lg w-full p-8 text-center">
        
        <h1 className="text-2xl font-bold text-goodness-chocolate mb-3">
          🎉 Payment Successful!
        </h1>

        <p className="text-goodness-chocolate/80 text-sm mb-6 leading-relaxed">
          Thank you so much for supporting Goodness Bakery!  
          Your order has been received and payment is confirmed.  
          I will follow up soon with your pickup / delivery details.  
        </p>

        <div className="py-6 text-goodness-chocolate text-lg font-semibold">
          🍪 Your batch of goodness is officially on the way!
        </div>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-goodness-caramel text-white font-medium shadow-md hover:shadow-lg transition"
        >
          Return Home
        </Link>
      </div>

      <p className="mt-6 text-xs text-goodness-chocolate/60">
        “Taste and see that the Lord is good.” – Psalm 34:8
      </p>
    </section>
  );
}

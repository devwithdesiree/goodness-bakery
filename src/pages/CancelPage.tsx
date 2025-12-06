import { Link } from "react-router-dom";

export default function CancelPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-goodness-cream/60">
      <div className="bg-white shadow-lg border border-goodness-sugar rounded-3xl max-w-lg w-full p-8 text-center">
        
        <h1 className="text-2xl font-bold text-goodness-chocolate mb-3">
          ❌ Payment Canceled
        </h1>

        <p className="text-goodness-chocolate/80 text-sm mb-6 leading-relaxed">
          It looks like the payment didn’t go through.  
          No worries — you can try again whenever you're ready.  
          Your treats are still waiting for you! 🍪
        </p>

        <Link
          to="/preorder"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-goodness-caramel text-white font-medium shadow-md hover:shadow-lg transition"
        >
          Try Again
        </Link>

        <p className="mt-4 text-xs text-goodness-chocolate/60">
          Need help? Contact me at tastethegoodnessbakery@gmail.com
        </p>
      </div>
    </section>
  );
}

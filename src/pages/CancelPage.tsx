import { Link } from "react-router-dom";

export default function CancelPage() {
  return (
    <section className="relative bg-goodness-beige min-h-[70vh] flex items-center justify-center px-6 py-24 overflow-hidden">

      {/* Soft Background Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/cookies-bg.jpg')",
        }}
      />

      <div className="relative max-w-xl w-full bg-white border border-goodness-charcoal/10 rounded-2xl shadow-md p-10 text-center">

        <h1 className="font-serifLogo text-3xl text-goodness-charcoal mb-4">
          Payment Canceled
        </h1>

        <div className="w-10 h-[2px] bg-goodness-gold mx-auto mb-6"></div>

        <p className="text-goodness-muted leading-relaxed mb-8">
          It looks like your payment didn’t go through.
          No worries — your treats are still waiting for you.
          You can return anytime to complete your order.
        </p>

        <Link
          to="/pickup"
          className="inline-block px-8 py-3 rounded-full bg-goodness-gold text-white font-medium hover:opacity-90 transition"
        >
          Return to Order
        </Link>

        <p className="mt-6 text-xs text-goodness-muted">
          Need assistance? tastethegoodnessbakery@gmail.com
        </p>
      </div>
    </section>
  );
}

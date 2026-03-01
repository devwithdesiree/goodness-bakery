import { Helmet } from "react-helmet";
import WholesaleInquiryForm from "./WholesaleInquiryForm";

export default function WholesalePage() {
  return (
    <>
      <Helmet>
        <title>Wholesale | Goodness Bakery</title>
        <meta
          name="description"
          content="Partner with Goodness Bakery for premium individually packaged cookies supplied to cafés and businesses."
        />
      </Helmet>

      <main className="bg-goodness-white min-h-screen">

        {/* HERO WITH IMAGE */}
        <section className="relative py-32 px-4 text-center overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: "url('/coffee-shop.jpg')",
            }}
          />

          {/* Soft Warm Overlay */}
          <div className="absolute inset-0 bg-goodness-beige/75" />

          <div className="relative max-w-3xl mx-auto">
            <h1 className="font-serifLogo text-4xl text-goodness-charcoal">
              Café & Wholesale Partnerships
            </h1>

            <div className="w-12 h-[2px] bg-goodness-gold mx-auto mt-4"></div>

            <p className="mt-6 text-goodness-muted text-lg leading-relaxed">
              Consistent small-batch cookie supply for cafés, coffee shops, 
              and local businesses seeking elevated dessert offerings.
            </p>
          </div>
        </section>

        {/* WHY PARTNER */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center">

            <div>
              <h3 className="font-serifLogo text-xl text-goodness-charcoal mb-3">
                Individually Packaged
              </h3>
              <p className="text-sm text-goodness-muted">
                Clean, display-ready packaging suitable for café counters.
              </p>
            </div>

            <div>
              <h3 className="font-serifLogo text-xl text-goodness-charcoal mb-3">
                Consistent Weekly Supply
              </h3>
              <p className="text-sm text-goodness-muted">
                Reliable fulfillment with structured baking schedule.
              </p>
            </div>

            <div>
              <h3 className="font-serifLogo text-xl text-goodness-charcoal mb-3">
                Premium Flavor Profile
              </h3>
              <p className="text-sm text-goodness-muted">
                Biscoff, Chocolate, and Cookies & Cream.
              </p>
            </div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-goodness-beige py-16 px-4">
          <div className="max-w-2xl mx-auto text-center text-sm text-goodness-muted leading-relaxed space-y-3">
            <p>Minimum initial order: 40 cookies</p>
            <p>Weekly or biweekly supply available</p>
            <p>Wholesale pricing provided after inquiry review</p>
          </div>
        </section>

        {/* FORM */}
        <section className="py-24 px-4">
          <div className="max-w-lg mx-auto bg-white border border-goodness-charcoal/10 rounded-2xl p-8 shadow-md">
            <h2 className="font-serifLogo text-2xl text-goodness-charcoal text-center mb-6">
              Inquire About Wholesale
            </h2>

            <WholesaleInquiryForm />
          </div>
        </section>

      </main>
    </>
  );
}

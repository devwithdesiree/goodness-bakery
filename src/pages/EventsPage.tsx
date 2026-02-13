import { Helmet } from "react-helmet";
import EventInquiryForm from "./EventInquiryForm";

export default function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Events | Goodness Bakery</title>
        <meta
          name="description"
          content="Premium individually packaged cookies for weddings, showers, corporate events, and gatherings."
        />
      </Helmet>

      <main className="bg-goodness-white min-h-screen">

        {/* HERO */}
        <section className="bg-goodness-beige py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serifLogo text-4xl text-goodness-charcoal">
              Events & Celebrations
            </h1>

            <div className="w-12 h-[2px] bg-goodness-gold mx-auto mt-4"></div>

            <p className="mt-6 text-goodness-muted text-lg leading-relaxed">
              Elegant, individually packaged cookies crafted to elevate 
              weddings, showers, corporate gatherings, and church events.
            </p>
          </div>
        </section>

        {/* OFFER SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center">

            <div>
              <h3 className="font-serifLogo text-xl text-goodness-charcoal mb-3">
                Individually Wrapped
              </h3>
              <p className="text-sm text-goodness-muted">
                Perfect for place settings, dessert tables, and gifting.
              </p>
            </div>

            <div>
              <h3 className="font-serifLogo text-xl text-goodness-charcoal mb-3">
                Custom Tag Options
              </h3>
              <p className="text-sm text-goodness-muted">
                Personalized event tags available upon request.
              </p>
            </div>

            <div>
              <h3 className="font-serifLogo text-xl text-goodness-charcoal mb-3">
                Signature Flavors
              </h3>
              <p className="text-sm text-goodness-muted">
                Biscoff, Chocolate, and Cookies & Cream.
              </p>
            </div>

          </div>
        </section>

        {/* DETAILS */}
        <section className="bg-goodness-beige py-16 px-4">
          <div className="max-w-2xl mx-auto text-center text-sm text-goodness-muted leading-relaxed">
            <p>
              Minimum order: 24 cookies
            </p>
            <p className="mt-2">
              Lead time: 5–7 days depending on quantity
            </p>
            <p className="mt-2">
              Event pricing varies by quantity and packaging needs.
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="py-24 px-4">
          <div className="max-w-lg mx-auto bg-white border border-goodness-charcoal/10 rounded-2xl p-8 shadow-md">
            <h2 className="font-serifLogo text-2xl text-goodness-charcoal text-center mb-6">
              Request an Event Quote
            </h2>

            <EventInquiryForm />
          </div>
        </section>

      </main>
    </>
  );
}

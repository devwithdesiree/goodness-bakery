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

        {/* HERO WITH IMAGE */}
        <section className="relative py-32 px-4 text-center overflow-hidden">

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-goodness-beige/80" />

          <div className="relative max-w-3xl mx-auto">
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

        {/* OFFER SECTION WITH IMAGE GRID */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* Left Image */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/gift.jpg"
                alt="Individually wrapped cookies"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="space-y-8 text-center md:text-left">

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

          </div>
        </section>

        {/* STACK IMAGE SECTION */}
        <section className="py-20 px-4 bg-goodness-beige">
          <div className="max-w-4xl mx-auto text-center space-y-8">    

            <div className="text-sm text-goodness-muted leading-relaxed">
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

          </div>
        </section>

        {/* FORM SECTION WITH SOFT BACKGROUND */}
        <section className="relative py-24 px-4 overflow-hidden">


          <div className="relative max-w-lg mx-auto bg-white border border-goodness-charcoal/10 rounded-2xl p-8 shadow-md">
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

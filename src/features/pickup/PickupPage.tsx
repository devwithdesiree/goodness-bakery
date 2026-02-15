import { Helmet } from "react-helmet";
import { isPreorderOpen } from "./pickup.constants";
import { usePickupForm } from "./usePickupForm";
import PickupForm from "./PickupForm";

export default function PickupPage() {
  const preorderOpen = isPreorderOpen();
  const { form, loading, error, handleChange, submit } =
    usePickupForm("https://formspree.io/f/mqanbobk");

  return (
    <>
      <Helmet>
        <title>Order Pickup | Goodness Bakery</title>
      </Helmet>

      <main className="bg-goodness-beige min-h-screen py-24 px-4">

        <div className="max-w-xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-10">
            <h1 className="font-serifLogo text-3xl text-goodness-charcoal">
              Order Pickup
            </h1>
            <div className="w-12 h-[2px] bg-goodness-gold mx-auto mt-4"></div>


            <p className="text-sm text-goodness-muted mt-3 leading-relaxed">
              Moore, Oklahoma · Orders close Thursday at 11:59 PM
              <br />
              Pickup: Friday & Saturday · 4-7 PM
            </p>
          </div>

          {/* CLOSED STATE */}
          {!preorderOpen && (
            <div className="bg-white border border-goodness-charcoal/10 rounded-xl p-6 text-center text-sm text-goodness-muted">
              Orders are currently closed.
              <br />
              Please check back Sunday.
            </div>
          )}

          {/* FORM CARD */}
          {preorderOpen && (
            <div className="bg-white border border-goodness-charcoal/10 rounded-2xl p-8 shadow-md">
              <PickupForm
                form={form}
                loading={loading}
                error={error}
                onChange={handleChange}
                onSubmit={submit}
              />
            </div>
          )}

        </div>

      </main>
    </>
  );
}

import { Helmet } from "react-helmet";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
      <Helmet>
        <title>Terms of Service | Goodness Bakery</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-pink-600">
        Terms of Service
      </h1>

      <p className="mb-4">
        <strong>Last Updated: December 2025</strong>
      </p>

      <p className="mb-6">
        These Terms govern your use of thegoodnessbakery.com and all orders
        placed through our site. By using our website, you agree to these
        Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Orders & Payments</h2>

      <ul className="list-disc ml-6 mb-6">
        <li>All orders must be prepaid at checkout.</li>
        <li>Payments are securely processed through Stripe.</li>
        <li>Prices are shown in USD. Taxes may apply.</li>
        <li>Orders are final once placed.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Pickup Policy</h2>
      <p className="mb-6">
        Goodness Bakery currently offers local pickup only in Oklahoma.
        Customers must pick up within the scheduled time window. We are not
        responsible for items left unclaimed.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Refunds & Cancellations</h2>
      <p className="mb-6">
        Because our products are made to order, refunds may not be issued
        once baking has started. Requests for changes must be made within 1
        hour of ordering.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Allergens</h2>
      <p className="mb-6">
        Our products may contain wheat, dairy, eggs, soy, and almond
        extract. Cross-contamination is possible. Customers with allergies
        should exercise caution.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. SMS & Email</h2>
      <p className="mb-6">
        By placing an order, you agree to receive email confirmations and
        SMS updates (if consent was given). Reply STOP at any time to opt
        out of SMS communication.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
      <p className="mb-6">
        Goodness Bakery is not responsible for allergic reactions, missed
        pickups, delays caused by weather, or the misuse of products after
        pickup.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Changes to Terms</h2>
      <p className="mb-6">
        We may update these Terms at any time. Continued use of the site
        means you accept the updated Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
      <p>
        For questions about these Terms, contact us at:
        <br />
        <strong>tastegoodnessbakery@gmail.com</strong>
      </p>
    </div>
  );
}

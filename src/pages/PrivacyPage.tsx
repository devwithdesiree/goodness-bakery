import { Helmet } from "react-helmet";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
      <Helmet>
        <title>Privacy Policy | Goodness Bakery</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-pink-600">
        Privacy Policy
      </h1>

      <p className="mb-4">
        <strong>Last Updated: December 2025</strong>
      </p>

      <p className="mb-4">
        Goodness Bakery (“we,” “us,” or “our”) operates the website
        thegoodnessbakery.com and provides baked goods for preorder and
        pickup. We are committed to protecting your personal information and
        your right to privacy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>

      <p className="mb-4">We may collect the following types of information:</p>

      <ul className="list-disc ml-6 mb-6">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Order details</li>
        <li>Pickup preferences</li>
        <li>SMS consent</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Payment Information</h3>
      <p className="mb-4">
        Payments are securely processed using Stripe. We do not store or
        have access to your credit card information.
      </p>

      <h3 className="text-xl font-semibold mb-2">Automatically Collected Data</h3>
      <p className="mb-6">
        This may include your IP address, device information, browser type,
        and pages visited. Cookies may be used to enhance your experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>

      <ul className="list-disc ml-6 mb-6">
        <li>Process and fulfill orders</li>
        <li>Communicate about your order</li>
        <li>Send SMS updates (if consented)</li>
        <li>Improve our services and website</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. SMS Messaging</h2>
      <p className="mb-6">
        By giving SMS consent, you agree to receive order-related text
        messages. Message & data rates may apply. Reply STOP at any time to
        unsubscribe, or HELP for assistance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Sharing Your Information</h2>
      <p className="mb-6">
        We only share information with essential service providers such as
        Stripe or Google Analytics. We never sell or trade your data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Your Rights</h2>
      <p className="mb-6">
        You may request access, correction, or deletion of your personal
        data by emailing us at tastegoodnessbakery@gmail.com.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Contact Us</h2>
      <p>
        For any privacy-related questions, please email:
        <br />
        <strong>tastegoodnessbakery@gmail.com</strong>
      </p>
    </div>
  );
}

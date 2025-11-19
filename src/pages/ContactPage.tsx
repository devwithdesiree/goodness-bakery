export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold text-goodness-chocolate mb-6">
        Contact Us
      </h1>

      <p className="text-goodness-chocolate/80 max-w-xl mb-10">
        Got questions, custom requests, or need help placing an order?
        We’re here to help. Reach out anytime!
      </p>

      <div className="bg-white border border-goodness-sugar rounded-2xl p-8 shadow-sm">

        <h2 className="text-lg font-semibold text-goodness-chocolate mb-4">
          Get in Touch
        </h2>

        <p className="text-goodness-chocolate/80 mb-2">
          📍 Moore, OK — Pickup Available
        </p>

        <p className="text-goodness-chocolate/80">
          📧 thegoodnessbakery@gmail.com
        </p>

        <hr className="my-8 border-goodness-sugar" />

        <h3 className="font-semibold text-goodness-chocolate mb-4">Send a Message</h3>

        <form
          action="https://formspree.io/f/mpwbdyaa"
          method="POST"
          className="grid gap-4"
        >

            <input type="hidden" name="_subject" value="New Goodness Bakery Contact Message" />
          <input
            className="border border-goodness-sugar rounded-lg p-3"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="border border-goodness-sugar rounded-lg p-3"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="border border-goodness-sugar rounded-lg p-3"
            name="message"
            placeholder="Your Message"
            rows={4}
            required
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-goodness-caramel text-white font-semibold shadow hover:shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

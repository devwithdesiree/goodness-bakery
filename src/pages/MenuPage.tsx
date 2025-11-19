import { Link } from "react-router-dom";

export default function MenuPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold text-goodness-chocolate mb-6">
        Our Menu
      </h1>

      <p className="text-goodness-chocolate/80 mb-10 max-w-2xl">
        Baked fresh in small batches with warm spices, real butter, and plenty of
        cozy goodness. Preorder your treats below.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Sugar Cookies */}
        <div className="p-6 bg-white border border-goodness-sugar rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-goodness-chocolate">
                Sugar Cookies – 6 Pack
              </h3>
              <span className="text-goodness-caramel font-semibold">$15.99</span>
            </div>
            <p className="text-sm text-goodness-chocolate/70 mt-2">
              Soft, thick, melt-in-your-mouth sugar cookies with buttery vanilla and a hint of nutmeg.
            </p>
          </div>

          {/* Preorder Button */}
          <Link
            to="/preorder"
            className="mt-6 inline-block text-center w-full px-4 py-2 rounded-lg bg-goodness-caramel text-white font-semibold shadow hover:shadow-md transition"
          >
            Preorder
          </Link>
        </div>


        {/* Chocolate Chip Cookies */}
        <div className="p-6 bg-white border border-goodness-sugar rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-goodness-chocolate">
                Chocolate Chip Cookies – 6 Pack
              </h3>
              <span className="text-goodness-caramel font-semibold">$17.99</span>
            </div>
            <p className="text-sm text-goodness-chocolate/70 mt-2">
              Thick, chewy cookies loaded with melty chocolate chips. Crisp edges, gooey centers.
            </p>
          </div>

          <Link
            to="/preorder"
            className="mt-6 inline-block text-center w-full px-4 py-2 rounded-lg bg-goodness-caramel text-white font-semibold shadow hover:shadow-md transition"
          >
            Preorder
          </Link>
        </div>


        {/* Butter Rolls */}
        <div className="p-6 bg-white border border-goodness-sugar rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-goodness-chocolate">
                Butter Rolls – 4 Pack
              </h3>
              <span className="text-goodness-caramel font-semibold">$11.99</span>
            </div>
            <p className="text-sm text-goodness-chocolate/70 mt-2">
              Fluffy, extra-milky butter rolls baked golden and brushed with sweet warm cream.
            </p>
          </div>

          <Link
            to="/preorder"
            className="mt-6 inline-block text-center w-full px-4 py-2 rounded-lg bg-goodness-caramel text-white font-semibold shadow hover:shadow-md transition"
          >
            Preorder
          </Link>
        </div>

      </div>
    </div>
  );
}

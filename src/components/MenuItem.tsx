 export default function  MenuItem({ title, description, price, image }: {
  title: string;
  description: string;
  price: string;
  image: string;}) {
  return (
    <div className="bg-white rounded-2xl border border-goodness-sugar shadow-sm hover:shadow-lg hover:-translate-y-[2px] transition overflow-hidden">
      
      {/* IMAGE */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-goodness-chocolate">{title}</h3>
          <span className="text-goodness-caramel font-semibold">{price}</span>
        </div>

        <p className="text-sm text-goodness-chocolate/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

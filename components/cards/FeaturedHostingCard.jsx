import Link from "next/link";
import { BsCheck2 } from "react-icons/bs";

export default function FeaturedHostingCard({ pack }) {
  return (
    <div
      className={`relative rounded-md border bg-[#fafbff] px-4 py-8 ${pack.mostPopular ? "border-royal-blue scale-y-105 border-2" : "border-neutral-200"}`}
    >
      {pack.mostPopular && (
        <p className="bg-royal-blue absolute -top-[1px] right-0 rounded-bl-md px-4 py-1.5 text-sm font-semibold text-white">
          Most Popular
        </p>
      )}
      <h5 className="text-2xl font-bold">{pack.name}</h5>
      <p className="mt-1 text-sm">{pack.description}</p>
      <p className="mt-4">
        from $<span className="text-3xl font-extrabold">{pack.price}</span>
        /month
      </p>
      <p className="mt-1 text-sm font-semibold">
        + $0 Setup Fee & No Extra Renewal Charge
      </p>
      <Link
        href="/"
        className={`border-royal-blue text-royal-blue mt-4 block rounded-md border-2 py-2 text-center font-bold transition-all duration-200 ease-linear ${pack.mostPopular ? "bg-royal-blue hover:bg-royal-blue-hover text-white hover:border-transparent" : "hover:bg-neutral-200"}`}
      >
        Learn More
      </Link>
      <ul className="mt-8 space-y-1 text-sm">
        {pack.features.map((feat, i) => (
          <li key={i} className="flex items-center gap-1.5 tracking-wider">
            <BsCheck2 className="text-accent min-w-fit text-lg" />
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
}

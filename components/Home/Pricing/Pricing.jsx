import FeaturedHostingCard from "@/components/cards/FeaturedHostingCard";
const hostingPackages = [
  {
    name: "Basic",
    price: 2.99,
    description: "A simple and affordable solution for small websites.",
    features: [
      "Up to 2 vCores",
      "Up to 8 GB RAM",
      "Up to 100 GB SSD",
      "100 Mbit/s network",
      "Unlimited traffic",
    ],
  },
  {
    name: "Business",
    price: 6.99,
    description: "Best value for growing websites and businesses.",
    features: [
      "Up to 4 vCores",
      "Up to 16 GB RAM",
      "Up to 250 GB SSD",
      "200 Mbit/s network",
      "Unlimited traffic",
      "Priority Support",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: 12.99,
    description: "Powerful hosting for high-performance websites.",
    features: [
      "Up to 6 vCores",
      "Up to 32 GB RAM",
      "Up to 500 GB SSD",
      "1 Gbit/s network",
      "Unlimited traffic",
      "Dedicated Resources",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="text-primary w-full px-5 py-10 md:container md:mx-auto md:px-0 md:py-20">
      <h2 className="font-urbanist text-center text-4xl font-bold">
        Our Pricing Plan
      </h2>
      <p className="mt-4 text-center text-lg">
        Get started with unbeatable pricing offerings! With Free Setup Charge &
        No Extra Renewal Fee.
      </p>

      {/* pricing card container */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
        {/* card */}
        {hostingPackages.map((pack, i) => (
          <FeaturedHostingCard key={i} pack={pack} />
        ))}
      </div>
    </div>
  );
}

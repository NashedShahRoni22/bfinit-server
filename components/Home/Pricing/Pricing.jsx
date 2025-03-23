import FeaturedHostingCard from "@/components/cards/FeaturedHostingCard";
const hostingPackages = [
  {
    name: "VIRTUAL SERVER SSD",
    price: 4.99,
    description: "A simple and affordable solution for small websites.",
    features: [
      "Great performance at an affordable price",
      "Fast setup",
      "Up to 6 vCores",
      "Up to 32 GB RAM",
      "Up to 500 GB SSD",
      "100 Mbit/s network",
      "Unlimited traffic",
    ],
  },
  {
    name: "VIRTUAL SERVER HDD",
    price: 14.99,
    description: "Best value for growing websites and businesses.",
    features: [
      "Dedicated performance at the lowest price",
      "Intel® Xeon CPUs",
      "Up to 6 vCores",
      "Up to 32 GB RAM",
      "Up to 2 TB SATA HDD",
      "100 Mbit/s network",
      "Unlimited traffic",
    ],
    mostPopular: true,
  },
  {
    name: "DEDICATED SERVER",
    price: 77.99,
    description: "Powerful hosting for high-performance websites.",
    features: [
      "Maximum performance - no ifs, no buts",
      "Powerful Intel® CPUs",
      "Up to 16 Cores",
      "Up to 256 GB DDR4 RAM",
      "SATA, SSD or NVMe storage",
      "Up to 1 Gbit/s network",
      "Unlimited traffic",
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

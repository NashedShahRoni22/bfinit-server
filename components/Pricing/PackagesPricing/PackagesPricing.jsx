"use client";

import { useState } from "react";

const plans = {
  "VPS Hosting": [
    {
      name: "VPS BASIC",
      vCore: 1,
      ram: "4GB RAM DDR4 ECC",
      speed: "100 MBit/s²",
      ip: "1 IP incl.",
      price: "$3.99",
      storageOptions: ["100 GB SSD"],
    },
    {
      name: "VPS STANDARD",
      vCore: 2,
      ram: "8GB RAM DDR4 ECC",
      speed: "100 MBit/s²",
      ip: "1 IP incl.",
      price: "$5.99",
      storageOptions: ["200 GB SSD"],
    },
    {
      name: "VPS PROFESSIONAL",
      vCore: 4,
      ram: "16GB RAM DDR4 ECC",
      speed: "100 MBit/s²",
      ip: "1 IP incl.",
      price: "$10.99",
      storageOptions: ["300 GB SSD"],
    },
    {
      name: "VPS ELITE",
      vCore: 6,
      ram: "32GB RAM DDR4 ECC",
      speed: "100 MBit/s²",
      ip: "1 IP incl.",
      price: "$18.99",
      storageOptions: ["500 GB SSD"],
    },
  ],
  "Web Hosting": [
    {
      name: "Starter Plan",
      vCore: "-",
      ram: "2GB RAM",
      speed: "Unlimited Bandwidth",
      ip: "Shared IP",
      price: "$2.99",
      storageOptions: ["50 GB SSD"],
    },
    {
      name: "Business Plan",
      vCore: "-",
      ram: "4GB RAM",
      speed: "Unlimited Bandwidth",
      ip: "Shared IP",
      price: "$5.99",
      storageOptions: ["100 GB SSD"],
    },
  ],
  "Dedicated Server": [
    {
      name: "DS BASIC",
      vCore: 8,
      ram: "32GB RAM DDR4 ECC",
      speed: "1 GBit/s",
      ip: "1 IP incl.",
      price: "$99.99",
      storageOptions: ["1 TB SSD"],
    },
    {
      name: "DS PROFESSIONAL",
      vCore: 16,
      ram: "64GB RAM DDR4 ECC",
      speed: "1 GBit/s",
      ip: "1 IP incl.",
      price: "$199.99",
      storageOptions: ["2 TB SSD"],
    },
  ],
};

const packages = [
  "All Packages",
  "Web Hosting",
  "VPS Hosting",
  "Dedicated Server",
];

export default function PackagesPricing() {
  const [selectedPackage, setSelectedPackage] = useState("All Packages");
  const [selectedStorage, setSelectedStorage] = useState(
    Object.values(plans)
      .flat()
      .map((plan) => plan.storageOptions[0]),
  );

  const filteredPlans =
    selectedPackage === "All Packages"
      ? Object.values(plans).flat()
      : plans[selectedPackage] || [];

  return (
    <div className="text-primary px-5 py-10 md:container md:mx-auto md:px-0 md:py-20">
      <p className="text-center text-lg">Choose Your Hosting Plan!</p>
      <h2 className="font-urbanist mt-4 text-center text-4xl font-bold">
        More Performance. Less Cost
      </h2>

      {/* tab button */}
      <div className="mt-8 grid grid-cols-2 gap-4 py-2.5 md:mx-auto md:max-w-3xl md:grid-cols-4">
        {packages.map((packName, i) => (
          <button
            key={i}
            onClick={() => setSelectedPackage(packName)}
            className={`min-w-fit cursor-pointer rounded-lg px-4 py-2 ${
              selectedPackage === packName
                ? "bg-royal-blue text-white"
                : "bg-white hover:bg-neutral-100"
            }`}
          >
            {packName}
          </button>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredPlans.map((plan, index) => (
          <div
            key={plan.name}
            className="rounded-lg border border-neutral-200 bg-[#fafbff] p-6 text-center"
          >
            <h3 className="font-urbanist text-xl font-bold">{plan.name}</h3>
            <p className="text-sm text-gray-700">{plan.vCore} vCore</p>
            <p className="text-sm text-gray-700">{plan.ram}</p>
            <p className="text-sm text-gray-700">{plan.speed}</p>
            <p className="text-sm text-gray-700">{plan.ip}</p>
            <select
              className="mt-2 w-full rounded border p-2"
              value={selectedStorage[index]}
              onChange={(e) => {
                const newStorage = [...selectedStorage];
                newStorage[index] = e.target.value;
                setSelectedStorage(newStorage);
              }}
            >
              {plan.storageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <p className="my-4">
              from <span className="text-xl font-bold">{plan.price}</span>
            </p>
            <p className="text-accent font-semibold">$0 SETUP FEE</p>
            <button className="bg-royal-blue hover:bg-royal-blue-hover mt-4 w-full cursor-pointer rounded px-4 py-2 text-white">
              ORDER NOW!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

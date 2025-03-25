"use client";
import { useState } from "react";

export default function PackagesPricing({ hostingPackage }) {
  const [selectedStorage, setSelectedStorage] = useState(
    hostingPackage?.packages?.map((plan) => plan.storageOptions[0]) || [],
  );

  return (
    <div className="text-primary px-5 py-10 md:container md:mx-auto md:px-0 md:py-20">
      <h2 className="font-urbanist text-center text-4xl font-bold">
        {hostingPackage.packageTitle}
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {hostingPackage.packages.map((plan, index) => (
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
            <button className="bg-royal-blue hover:bg-royal-blue-hover mt-4 w-full cursor-pointer rounded-full px-4 py-2 text-white">
              ORDER NOW!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

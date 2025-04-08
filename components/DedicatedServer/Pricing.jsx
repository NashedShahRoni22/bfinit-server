"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "../ProductCardSkeleton";

const dedicateServerProducts = [
  {
    id: 1,
    title: "Fully Managed Server",
  },
  {
    id: 3,
    title: "Self Managed Server",
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState(true);
  const [productId, setProductId] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://hpanel.bfinit.com/api/product/list/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
    setLoading(false);
  }, [productId]);

  return (
    <div className="text-primary px-5 py-10 md:container md:mx-auto md:px-0 md:py-20">
      {/* section title */}
      <p className="text-center text-lg">Choose Your Dedicated Server Plan!</p>
      <h2 className="font-urbanist mt-4 text-center text-4xl font-bold">
        More Performance. Less Cost
      </h2>

      {/* tab button */}
      <div className="mt-8 flex items-center justify-center gap-4 py-2.5">
        {dedicateServerProducts.map((product, i) => (
          <button
            key={i}
            onClick={() => setProductId(product.id)}
            className={`min-w-fit cursor-pointer rounded-full px-4 py-2 ${
              product.id === productId
                ? "bg-royal-blue text-white"
                : "bg-white hover:bg-neutral-100"
            }`}
          >
            {product.title}
          </button>
        ))}
      </div>

      {/* Products Container */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {!loading && products && products.length > 0
          ? products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-[#fafbff] p-6 text-center"
              >
                <h3 className="font-urbanist text-xl font-bold">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-700">{product.core} vCore</p>
                <p className="text-sm text-gray-700">{product.uniqueRams[0]}</p>
                <p className="text-sm text-gray-700">{product.processor}</p>
                <p className="text-sm text-gray-700">{product.ips}</p>
                <select
                  className={`mt-2 w-full rounded-full border px-4 py-1.5 outline-none ${product.uniqueRams.length > 1 ? "border-black" : "border-neutral-200 bg-neutral-200 text-neutral-700"}`}
                  disabled={product.uniqueRams.length <= 1}
                >
                  {product.uniqueRams &&
                    product.uniqueRams.length > 0 &&
                    product.uniqueRams.map((ram, i) => (
                      <option key={i} value={ram}>
                        {ram}
                      </option>
                    ))}
                </select>
                <select
                  className={`mt-2 w-full rounded-full border px-4 py-1.5 outline-none ${product.storages.length > 1 ? "border-black" : "border-neutral-200 bg-neutral-200 text-neutral-700"}`}
                  disabled={product.storages.length <= 1}
                >
                  {product.storages &&
                    product.storages.length > 0 &&
                    product.storages.map((storage, i) => (
                      <option key={i} value={storage}>
                        {storage}
                      </option>
                    ))}
                </select>

                <p className="mt-4">
                  from{" "}
                  <span className="text-xl font-bold">
                    ${product.defaultStorage.price}
                  </span>
                </p>
                <p className="text-accent font-semibold">$0 SETUP FEE</p>
                <Link
                  href="/"
                  className="bg-royal-blue hover:bg-royal-blue-hover mt-4 w-full cursor-pointer rounded-full px-4 py-2 text-white"
                >
                  ORDER NOW!
                </Link>
              </div>
            ))
          : Array.from({ length: 4 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
      </div>
    </div>
  );
}

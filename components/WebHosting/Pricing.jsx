"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "../ProductCardSkeleton";
import { getData } from "../shared/Helpers/GetData";

const webHostingProducts = [
  {
    id: 4,
    title: "Professional Web Hosting",
  },
  {
    id: 5,
    title: "Performance Web Hosting",
  },
  {
    id: 7,
    title: "Small Business Web Hosting",
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState(4);
  const [products, setProducts] = useState([]);
  const [skeletonCount, setSkeletonCount] = useState(4);

  // fetch all dedicated servers
  useEffect(() => {
    setLoading(true);

    getData(`https://hpanel.bfinit.com/api/product/list/${productId}`).then(
      (data) => {
        setProducts(data.data);
        setSkeletonCount(data.data.length || 4);
        setLoading(false);
      },
    );
  }, [productId]);

  return (
    <div className="text-primary px-5 py-10 md:container md:mx-auto md:px-0 md:py-20">
      {/* section title */}
      <p className="text-center text-lg">Choose Your Web Hosting Plan!</p>
      <h2 className="font-urbanist mt-4 text-center text-4xl font-bold">
        More Performance. Less Cost
      </h2>

      {/* tab button */}
      <div className="mt-8 flex items-center justify-center gap-4 py-2.5">
        {webHostingProducts.map((product, i) => (
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
        {loading || !products.length
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-[#fafbff] p-6 text-center"
              >
                <h3 className="font-urbanist text-xl font-bold">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-700">{product.core}</p>
                <p
                  className={`text-sm text-gray-700 ${product.uniqueRams[0] === "0 setup fee" && "hidden"} `}
                >
                  {product.uniqueRams[0]}
                </p>
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
                  /mo
                </p>
                <p className="text-accent font-semibold">$0 SETUP FEE</p>
                <Link
                  className="bg-royal-blue hover:bg-royal-blue-hover mt-4 w-full cursor-pointer rounded-full px-4 py-2 text-white"
                  href={`https://hpanel.bfinit.com/checkout?productId=${product?.defaultStorage?.server_id}&packageType=server&ram=${product?.defaultStorage?.ram}&storage=${
                    product?.defaultStorage?.storage
                  }&timePeriod=1&currency=USD&currencyRate=1&storageVariantId=`}
                  target="_blanck"
                >
                  ORDER NOW!
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}

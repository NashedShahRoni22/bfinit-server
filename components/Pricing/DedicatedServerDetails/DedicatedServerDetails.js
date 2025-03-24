import Image from "next/image";
import serverImg from "@/public/images/pricing/fshape.png";
import { GiCheckMark } from "react-icons/gi";

const dedicatedServerInfo = {
  features: [
    { label: "Unlimited traffic", checked: true },
    { label: "Email support", checked: true },
    { label: "Advanced Services ($39.00 / 30 min)", checked: true },
    { label: "External connections", value: "550 Gbit/s", checked: true },
    {
      label: "Uplink providers",
      value:
        "Deutsche Telekom, Level 3, Global Crossing, cogent, DE-CIX, interoute, and others",
    },
    {
      label: "Operating systems",
      value:
        "Linux: Almalinux 8/9, Debian 11/12, Ubuntu 18.04/20.04/22.04/24.04 Windows Server 2002 / 2019 / 2016 (Single CPU + $40/month, Dual CPU + $80/month)",
    },
    {
      label: "Control panels",
      value:
        "Plesk Web Admin: $9.99/month, Plesk Web Pro: $16.99/month, Plesk Web Host: $40.99/month, cPanel Premier Metal 100: $45.00/month",
    },
    {
      label: "Minimum contract period",
      value: "1 month",
      extra: "additional $2.20/month per IP",
      highlight: true,
    },
  ],
};

export default function DedicatedServerDetails() {
  return (
    <div className="text-primary mx-auto grid grid-cols-1 gap-8 px-5 py-10 md:container md:grid-cols-2 md:py-20">
      {/* Left Section - Image & Title */}
      <div className="text-center md:text-left">
        <h2 className="font-urbanist mb-4 text-2xl font-bold md:text-3xl">
          High-performance Dedicated Servers with Full Control and Fast Setup
        </h2>
        <Image src={serverImg} alt="Dedicated Server" />
      </div>

      {/* Right Section - Features */}
      <div>
        <ul className="space-y-3">
          {dedicatedServerInfo.features.map((feature, index) => (
            <li
              key={index}
              className="border-b border-neutral-200 pb-4 last:border-0"
            >
              <p className="flex items-center gap-3 text-xl font-semibold">
                {feature.checked && (
                  <GiCheckMark className="text-accent min-w-fit text-base" />
                )}
                {feature.label}
              </p>
              {feature.value && (
                <p className={`mt-2 text-sm ${feature.checked && "pl-7"}`}>
                  {feature.value}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

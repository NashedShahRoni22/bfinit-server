import HeroNew from "./HeroNew/HeroNew";
import PackagesPricing from "./PackagesPricing/PackagesPricing";

const allHostingPackages = {
  "web-hosting": {
    heroTitle: "Your Web Hosting Needs? Covered!",
    heroDescription:
      "If you\'re looking for a fast, flexible, and affordable solution, our web hosting are ready to meet your demands!",
    packageTitle: "Web Hosting Packages",
    packages: [
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
  },
  "vps-hosting": {
    heroTitle: "Your VPS Hosting Needs? Covered!",
    heroDescription:
      "If you\'re looking for a fast, flexible, and affordable solution, our VPS hosting are ready to meet your demands!",
    packageTitle: "VPS Hosting Packages",
    packages: [
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
  },
  "dedicated-server": {
    heroTitle: "Your Dedicated Server Needs? Covered!",
    heroDescription:
      "If you\'re looking for a fast, flexible, and affordable solution, our dedicated servers are ready to meet your demands!",
    packageTitle: "Dedicated Server Packages",
    packages: [
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
  },
};

export default function HostingDetails({ slug }) {
  const hostingPackage = allHostingPackages[slug];

  return (
    <>
      <HeroNew hostingPackage={hostingPackage} />
      <PackagesPricing hostingPackage={hostingPackage} />
    </>
  );
}

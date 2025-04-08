import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import logo from "@/public/images/logo/logo.png";
import MobileNav from "./MobileNav";

const navItems = [
  /*  {
    name: "Pricing",
    url: "/pricing",
  }, */
  {
    name: "Hosting & Servers",
    children: [
      {
        icon: "https://img.icons8.com/ios/50/domain.png",
        title: "Web Hosting",
        href: "/web-hosting",
        description: "Reliable and affordable web hosting solutions.",
      },
      {
        icon: "https://img.icons8.com/ios/50/database--v1.png",
        title: "VPS Hosting",
        href: "/vps-hosting",
        description: "Scalable and secure virtual private servers.",
      },
      /* {
        icon: "https://img.icons8.com/windows/50/maintenance.png",
        title: "Custom VPS",
        href: "/hosting/build-your-own-vps",
        description: "Customize resources for your exact needs.",
      }, */
      {
        icon: "https://img.icons8.com/badges/50/server.png",
        title: "Dedicated Server",
        href: "/dedicated-server",
        description: "High-performance servers for demanding applications.",
      },
    ],
  },
  {
    name: "Data Center",
    url: "/data-center",
  },
];

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between gap-6 px-5 md:container md:mx-auto md:px-0">
      <Link href="/">
        <Image
          src={logo}
          alt="bfinit logo"
          width={90}
          height={30}
          className="py-3.5"
        />
      </Link>

      {/* large device navlinks */}
      <ul className="hidden items-center gap-12 md:flex">
        {navItems.map((item, i) =>
          item.children ? (
            <li key={i} className="group relative">
              <p className="group flex cursor-pointer items-center gap-1 py-3.5 text-[15px] font-medium transition-all duration-200 ease-in-out group-hover:text-[#2e68b4]">
                {item.name}
                <IoIosArrowDown className="min-w-fit scale-105 transition-all duration-200 ease-linear group-hover:-rotate-180" />
              </p>

              {/* hover dropdown element */}
              <div className="absolute top-full left-1/2 flex h-fit w-80 origin-top -translate-x-1/2 scale-y-0 flex-col gap-1 bg-white shadow transition-all duration-200 ease-linear group-hover:scale-y-100">
                {item.children.map((subItem, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-md px-4 py-3 hover:bg-neutral-100"
                  >
                    <div className="min-w-fit rounded-lg bg-[#d8efef] p-1.5">
                      <Image
                        src={subItem.icon}
                        alt={subItem.title}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <Link
                        href={subItem.href}
                        className="font-semibold hover:text-[#2e68b4]"
                      >
                        {subItem.title}
                      </Link>
                      <p className="mt-0.5 text-[13px] text-[#777777]">
                        {subItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ) : (
            <li key={i}>
              <Link
                href={item.url}
                className="text-[15px] font-medium hover:text-[#2e68b4]"
              >
                {item.name}
              </Link>
            </li>
          ),
        )}
      </ul>

      {/* large device login button */}
      <Link
        href="/"
        className="bg-royal-blue hidden rounded-full px-5 py-2 text-[15px] font-semibold text-white shadow md:block"
      >
        Login
      </Link>

      {/* mobile navbar */}
      <MobileNav navItems={navItems} />
    </nav>
  );
}

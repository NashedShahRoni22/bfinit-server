import { BiCopyright } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import logo from "@/public/images/logo/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const hostingProducts = [
    {
      icon: "https://img.icons8.com/ios/50/domain.png",
      title: "Web Hosting",
      href: "/hosting/web-hosting",
      description: "Reliable and affordable web hosting solutions.",
    },
    {
      icon: "https://img.icons8.com/ios/50/database--v1.png",
      title: "VPS Hosting",
      href: "/hosting/vps-hosting",
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
      href: "/hosting/dedicated-server",
      description: "High-performance servers for demanding applications.",
    },
  ];

  const Products = [
    {
      name: "Bitss Cyber Security",
      link: "https://bitss.fr/",
    },
    {
      name: "Pensaki Blackboard",
      link: "https://pensaki.org/",
    },
    {
      name: "Omada HR Payroll",
      link: "https://omada-clasico.com/",
    },
    {
      name: "Ifgaap Acounting & Invoicing",
      link: "https://ifgaap.org/",
    },
    {
      name: "BFINIT Sass Software",
      link: "https://officetools.bobosoho.com/special-software/",
    },
    {
      name: "BFINIT White Label",
      link: "https://bfin.company/software/white_label/",
    },
    {
      name: "Sosay Social Media",
      link: "https://sosay.org/",
    },
  ];

  const Pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Career",
      link: "/career",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Our blogs",
      link: "/blogs",
    },
    {
      name: "Cookie Policy",
      link: "/cookie-policy",
    },
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      link: "/terms-and-conditions",
    },
  ];

  return (
    <footer className="bg-neutral-300">
      <div className="mx-5 py-10 md:container md:mx-auto md:py-20">
        <section className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 md:gap-8">
            <Link
              href={"/"}
              className="flex w-fit max-w-32 items-center rounded-xl bg-white p-2"
            >
              <Image src={logo} alt="bfinit logo" width={421} height={148} />
            </Link>
            <p>
              BFIN IT to fuel your growth goals. We build world-class digital
              products, software and branding.
            </p>
            <h5 className="font-semibold">Join BFINIT Cosmopolitan </h5>
            <form className="flex w-full items-center">
              <input
                className="text-primary w-full rounded-l-xl border border-white bg-white px-4 py-2 outline-none"
                placeholder="Enter your email"
                type="email"
                required
              />
              <button
                type="submit"
                className="bg-royal-blue hover:bg-royal-blue-hover rounded-r-xl border border-white px-4 py-2 text-white transition-all duration-200 ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            <div>
              <h5 className="font-semibold">Hosting Products</h5>
              <div className="mt-2 ml-2 flex flex-col gap-2">
                {hostingProducts.map((product, i) => (
                  <Link
                    key={i}
                    href={product.href}
                    className="flex gap-2.5 hover:underline"
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold">Products</h5>
              <div className="mt-2 ml-2 flex flex-col gap-2">
                {Products.map((product, i) => (
                  <Link
                    href={product.link}
                    target="_blank"
                    key={i}
                    className="flex gap-2.5 hover:underline"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold">Quick Links</h5>
              <div className="mt-2 ml-2 flex flex-col gap-2">
                {Pages.map((product, i) => (
                  <Link
                    href={product.link}
                    key={i}
                    className="flex gap-2.5 hover:underline"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="my-5 h-0.5 w-full bg-white"></div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <p className="flex items-center gap-2">
            <BiCopyright className="min-w-fit text-xl" />
            2024 BFIN Company All rights Reserved | 8 rue de Dublin, 34200,
            Sète, France.
          </p>
          <div className="flex justify-center gap-4">
            <FaFacebook className="lg:text-xl" />
            <FaSquareXTwitter className="lg:text-xl" />
            <BsLinkedin className="lg:text-xl" />
            <BsInstagram className="lg:text-xl" />
            <BsYoutube className="lg:text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
}

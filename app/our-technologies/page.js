import Link from "next/link";
import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

export default function page() {
  const data = [
    {
      header: "Bitss Cyber Security",
      subChild: [
        {
          name: "Bitss WAP",
          link: "https://bitss.fr/products/wap-website-protection/wp",
        },
        {
          name: "Bitss C",
          link: "https://bitss.fr/products/c-contact-form/wp",
        },
        {
          name: "Bitss VWAR",
          link: "https://bitss.fr/products/vwar-frontline/wp",
        },
      ],
    },
    {
      header: "Database Hosting & Security",
      subChild: [
        {
          name: "Data Center",
          link: "/data-center",
        },
        {
          name: "Hosting",
          link: "/hosting-products/7",
        },
        {
          name: "H Panel",
          link: "https://hpanel.bfinit.com/login",
        },
      ],
    },
    {
      header: "Build Business",
      subChild: [
        {
          name: "SaaS Software",
          link: "/sass-software",
        },
        {
          name: "White Label",
          link: "/white-label",
        },
        {
          name: "Become a Reseller",
          link: "/reseller-program",
        },
        {
          name: "E-commerce Platform",
          link: "/bfinit-ecomerce-platform",
        },
        {
          name: "E-commerce Guide",
          link: "/ecommerce-guide",
        },
      ],
    },
    {
      header: "Expand Business",
      subChild: [
        {
          name: "Pensaki Blackboard",
          link: "https://pensaki.org/",
        },
        {
          name: "Omada HR Payroll",
          link: "https://omada-clasico.com/omada-hr-payroll",
        },
        {
          name: "Omada Project Management",
          link: "https://omada-clasico.com/project-management",
        },
        {
          name: "Clasico Payslips",
          link: "https://omada-clasico.com/clasico-payslip",
        },
        {
          name: "Ifgaap Mobile Invoicing",
          link: "https://ifgaap.org/",
        },
        {
          name: "Ifgaap GL Accounting",
          link: "https://ifgaap.org/",
        },
      ],
    },
    {
      header: "Social Communication",
      subChild: [
        {
          name: "Sosay",
          link: "https://sosay.org/",
        },
        {
          name: "Bobosoho",
          link: "https://bobosoho.com/",
        },
      ],
    },
  ];
  return (
    <section className="mx-5 py-5 md:container md:mx-auto md:py-10">
      <h5 className="text-royal-blue text-2xl font-semibold md:text-4xl">
        Our Technologies
      </h5>

      <div className="mt-5 grid gap-5 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {data.map((d, i) => (
          <div key={i} className="rounded p-4 shadow">
            <h5 className="text-xl font-semibold text-royal-blue">{d.header}</h5>
            <ul className="mt-2.5 ml-5">
              {d.subChild.map((ds, i) => (
                <li key={i} className="list-disc">
                  <Link href={ds.link} className="flex justify-between">
                    {ds.name} <IoArrowRedoSharp className="text-royal-blue"/>{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

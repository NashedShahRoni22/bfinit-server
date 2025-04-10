"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

export default function MobileNav({ navItems }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState("");

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const toggleDropDown = (i) => {
    setShowDropDown((prev) => (prev === i ? "" : i));
  };

  return (
    <>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="cursor-pointer">
          {showMenu ? (
            <HiMiniXMark className="min-w-fit text-2xl" />
          ) : (
            <HiBars3 className="min-w-fit text-2xl" />
          )}
        </button>
      </div>

      {showMenu && (
        <div className="absolute top-[60px] left-0 flex min-h-[calc(100vh-60px)] w-full flex-col gap-4 bg-white p-5 md:hidden">
          {navItems.map((item, i) =>
            item.children ? (
              <div key={i}>
                <button
                  onClick={() => toggleDropDown(i)}
                  className="flex cursor-pointer items-center gap-1 font-medium hover:text-[#2e68b4]"
                >
                  {item.name}
                  <IoIosArrowDown
                    className={`min-w-fit scale-105 rotate-0 transition-all duration-200 ease-linear ${showDropDown && "rotate-180"}`}
                  />
                </button>

                {showDropDown === i && (
                  <div className="flex flex-col gap-1.5">
                    {item.children.map((subItem, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 rounded-md p-2 hover:bg-neutral-100"
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
                )}
              </div>
            ) : (
              <Link
                key={i}
                href={item.url}
                className="font-medium hover:text-[#2e68b4]"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
      )}
    </>
  );
}

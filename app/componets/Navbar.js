"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "about-us" }, // Remove the "#" for react-scroll to work
  { name: "Hire Talent", href: "/hire" },
  { name: "Join Talent Pool", href: "/talentpool" },
  { name: "Contact Us", href: "contact-us" }, // Remove the "#" for react-scroll to work
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="container lg:mx-auto flex  justify-between lg:justify-start lg:items-center p-6 lg:px-20"
          aria-label="Global"
        >
          <div className="flex justify-end lg:justify-start   lg:mb-0 ">
            <ScrollLink to="hero" smooth={true} duration={500}>
              <Image
                src="/images/logo.png" // Replace with the path to your logo
                alt="Logo"
                width={173} // Set the default width
                height={50} // Set the default height
                className="w-40 h-12 md:w-36 md:h-10 lg:w-44 lg:h-12"
              />
            </ScrollLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex  justify-end rounded-md p-6 text-black"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:ml-8 lg:gap-x-14">
            {navigation.map((item) =>
              item.href.startsWith("/") ? ( // External links
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#161C2D] font-bold hover:text-[#EB1260] text-sm leading-6"
                  style={{ fontSize: "15px" }}
                >
                  {item.name}
                </a>
              ) : (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="text-[#161C2D] font-bold hover:text-[#EB1260] text-sm leading-6 cursor-pointer"
                  style={{ fontSize: "15px" }}
                >
                  {item.name}
                </ScrollLink>
              )
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
            <div className="flex items-center justify-between">
              <ScrollLink to="hero" smooth={true} duration={500}>
                <span className="text-white text-lg font-bold">Siscom</span>
              </ScrollLink>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.href.startsWith("/") ? ( // External links
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <ScrollLink
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
                      >
                        {item.name}
                      </ScrollLink>
                    )
                  )}
                </div>
                <div className="py-6">
                  <ScrollLink
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
                  >
                    Log in
                  </ScrollLink>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}

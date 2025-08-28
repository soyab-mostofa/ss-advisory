"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.getElementById("mobile-drawer");
      const hamburger = document.getElementById("hamburger-button");

      if (
        isDrawerOpen &&
        drawer &&
        hamburger &&
        !drawer.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node)
      ) {
        closeDrawer();
      }
    };

    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  // Close drawer on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDrawerOpen) {
        closeDrawer();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isDrawerOpen]);

  return (
    <>
      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center justify-between w-full px-4 py-4 bg-white">
        <Link href="/">
          <Image
            src="/images/megv1vhw-25cglug.svg"
            alt="SS Advisory Logo"
            width={51}
            height={54}
            className="flex-shrink-0"
          />
        </Link>
        <button
          id="hamburger-button"
          onClick={toggleDrawer}
          className="inline-flex items-center gap-[10px] border border-[#d4e4ff] rounded bg-[#eef8ff] p-[11px] focus:outline-none focus:ring-2 focus:ring-[#204199] focus:ring-opacity-50"
          aria-label="Toggle navigation menu"
          aria-expanded={isDrawerOpen}
        >
          <Menu className="w-6 h-6 text-[#204199]" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#dde2eb]">
            <Link href="/">
              <Image
                src="/images/megv1vhw-25cglug.svg"
                alt="SS Advisory Logo"
                width={51}
                height={54}
                className="flex-shrink-0"
              />
            </Link>
            <button
              onClick={closeDrawer}
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#204199] focus:ring-opacity-50"
              aria-label="Close navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              onClick={closeDrawer}
              className={`flex items-center justify-center gap-[10px] rounded-lg px-4 py-3 w-full transition-colors ${
                pathname === "/" ? "bg-[#d4e4ff]" : "hover:bg-gray-50"
              }`}
            >
              <p
                className={`font-urbanist text-lg leading-[25px] ${
                  pathname === "/"
                    ? "text-[#204199] font-medium"
                    : "text-[#545660]"
                }`}
              >
                Home
              </p>
            </Link>

            <Link
              href="/services"
              onClick={closeDrawer}
              className={`flex items-center justify-center px-4 py-3 w-full rounded-lg transition-colors ${
                pathname === "/services" ? "bg-[#d4e4ff]" : "hover:bg-gray-50"
              }`}
            >
              <p
                className={`font-urbanist text-lg leading-[25px] ${
                  pathname === "/services"
                    ? "text-[#204199] font-medium"
                    : "text-[#545660]"
                }`}
              >
                Services
              </p>
            </Link>

            <Link
              href="/careers"
              onClick={closeDrawer}
              className={`flex items-center justify-center px-4 py-3 w-full rounded-lg transition-colors ${
                pathname === "/careers" ? "bg-[#d4e4ff]" : "hover:bg-gray-50"
              }`}
            >
              <p
                className={`font-urbanist text-lg leading-[25px] ${
                  pathname === "/careers"
                    ? "text-[#204199] font-medium"
                    : "text-[#545660]"
                }`}
              >
                Careers
              </p>
            </Link>

            <Link
              href="/contact"
              onClick={closeDrawer}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#204199] px-4 py-3 w-full mt-6"
            >
              <p className="text-white font-urbanist text-lg font-medium leading-[25px]">
                Contact
              </p>
              <Image
                src="/images/megv1vhw-xry6gqf.svg"
                alt="Phone icon"
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center w-full gap-[351px] bg-white px-[120px] py-5">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/megv1vhw-25cglug.svg"
            alt="SS Advisory Logo"
            width={71}
            height={75}
            className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
          />
        </Link>
        <div className="flex items-center justify-between w-[778px] min-w-[778px]">
          <div className="inline-flex items-center gap-7 border border-[#dde2eb] rounded-xl bg-[#f8f8f8] py-[7px] px-[15px] pl-[7px]">
            <Link
              href="/"
              className={`flex items-center justify-center gap-[10px] rounded-lg px-4 py-1 w-[90px] transition-colors ${
                pathname === "/" ? "bg-[#d4e4ff]" : "hover:bg-[#e5e7eb]"
              }`}
            >
              <p
                className={`font-urbanist text-lg leading-[25px] ${
                  pathname === "/" ? "text-[#204199]" : "text-[#545660]"
                }`}
              >
                Home
              </p>
            </Link>
            <div className="relative w-px h-4">
              <div className="absolute top-2 -left-2 bg-[#dde2eb] w-4 h-px rotate-90"></div>
            </div>
            <Link
              href="/services"
              className={`font-urbanist text-lg leading-[25px] px-2 py-1 rounded transition-colors ${
                pathname === "/services"
                  ? "text-[#204199] bg-[#d4e4ff]"
                  : "text-[#545660] hover:bg-[#e5e7eb]"
              }`}
            >
              Services
            </Link>
            <div className="relative w-px h-4">
              <div className="absolute top-2 -left-2 bg-[#dde2eb] w-4 h-px rotate-90"></div>
            </div>
            <Link
              href="/careers"
              className={`font-urbanist text-lg leading-[25px] px-2 py-1 rounded transition-colors ${
                pathname === "/careers"
                  ? "text-[#204199] bg-[#d4e4ff]"
                  : "text-[#545660] hover:bg-[#e5e7eb]"
              }`}
            >
              Careers
            </Link>
          </div>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#204199] px-4 py-2 w-36 h-11 hover:bg-[#1a3580] transition-colors"
          >
            <p className="text-white font-urbanist text-base font-medium leading-6">
              Contact
            </p>
            <Image
              src="/images/megv1vhw-xry6gqf.svg"
              alt="Phone icon"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;

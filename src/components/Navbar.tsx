"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ModeChange } from "./ModeChange";
import ContactUs from "./ContactUs";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const Navbar: React.FC = () => {
  // State for controlling the mobile menu and sidebar
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close the sidebar when clicking outside of it
  const closeSidebar = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="px-4 sticky top-1 z-50 mx-auto max-w-screen-xl rounded-2xl xl:h-[95px] xl:mt-2 sm:px-8 text-black bg-white dark:bg-gray-900 dark:text-white sm:h-24">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <span className="sr-only">Company Name</span>
                  <Image
                    src="/logo.png"
                    loading="lazy"
                    width={202}
                    height={40}
                    alt="Company logo"
                  />
                </Link>
                <div className="flex items-center -mr-2 md:hidden">
                  <button
                    onClick={toggleMobileMenu} // This is where the toggle happens
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-md hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                    type="button"
                    aria-expanded={isMobileMenuOpen ? "true" : "false"}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:space-x-10 list-none">
              <li>
                <Link
                  href="/"
                  className="text-base font-normal text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-base font-normal text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base font-normal text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-base font-normal text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  Our Team
                </Link>
              </li>
            </div>

            {/* Contact Us Button */}
            <div className="hidden md:absolute gap-5 md:flex md:items-center items-center justify-center md:justify-end md:inset-y-0 md:right-0">
              <div className="inline-flex  gap-5 justify-center items-center">
                <AlertDialog>
                  <div className="mt-8 rounded-full">
                    <AlertDialogTrigger>
                      <span className=" rounded-full bg-zinc-900 text-zinc-200 mt-0 relative inline-flex items-center justify-center px-2 py-3 xl:ml-5  text-md xl:mb-7 font-semibold transition-all duration-200 dark:bg-zinc-300 dark:text-black cursor-pointer shadow-lg hover:scale-105 hover:shadow-xl transform ease-in-out">
                        Contact Us
                      </span>
                    </AlertDialogTrigger>
                  </div>

                  <AlertDialogContent>
                    <ContactUs />
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <ModeChange />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-300 dark:bg-gray-800 bg-opacity-50 z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={closeSidebar}
      >
        {/* Sidebar */}
        <div
          className={`absolute bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white w-56 min-h-screen overflow-y-auto transform transition-transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } ease-in-out duration-300`}
          onClick={(e) => e.stopPropagation()} // Prevent sidebar from closing when clicking inside
        >
          <div className="p-4 space-y-8 mt-10">
            <h1 className="mb-2 font-semibold">Sidebar</h1>
            <ul className="p-5 space-y-12 mt-10">
              <li className="mb-2">
                <Link
                  href="#"
                  className="block hover:text-indigo-400"
                  onClick={closeSidebar}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/services"
                  className="block hover:text-indigo-400"
                  onClick={closeSidebar}
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about"
                  className="block hover:text-indigo-400"
                  onClick={closeSidebar}
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/team"
                  className="block hover:text-indigo-400"
                  onClick={closeSidebar}
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Content */}
      <div
        className={`md:hidden flex justify-center flex-col items-center space-y-6 mt-10 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="#"
          className="text-2xl text-white font-semibold hover:text-gray-400"
          onClick={closeSidebar}
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-2xl text-white font-semibold hover:text-gray-400"
          onClick={closeSidebar}
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-2xl text-white font-semibold hover:text-gray-400"
          onClick={closeSidebar}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-2xl text-white font-semibold hover:text-gray-400"
          onClick={closeSidebar}
        >
          Our Team
        </Link>
      </div>
    </>
  );
};

export default Navbar;

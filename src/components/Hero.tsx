import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import ContactUs from "./ContactUs";

const Hero = () => {
  return (
    <div>
      <section className=" lg:-mt-16 xl:-mt-16 md:pt-40 sm:mt-11 ">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Get Started Today and Build Your Dream Website
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Showcasing Custom Web Solutions for Startups, Small Businesses,
              and Entrepreneurs. Create Stunning Websites That Engage, Convert,
              and Grow Your Audience.
            </p>
            <p className="mt-8 md:mt-12">
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100  xl:ml-5 xl:-mt-6 group-hover:-inset-1 group-hover:duration-100 animate-no"></div>

                {/* AlertDialog in place of the button */}
                <AlertDialog>
                  <AlertDialogTrigger>
                    <span className="relative inline-flex items-center justify-center px-8 py-4 xl:ml-5 xl:-mt-6 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer">
                      Contact Us
                    </span>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <ContactUs />
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://pixelque.com/images/services/web-design-development-img.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

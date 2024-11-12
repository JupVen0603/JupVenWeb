import React from "react";

import Link from "next/link";

// Sample data and config (you need to define these or import them)
const sampleArcs = [
  { id: 1, data: "sample data" }, // Replace with actual data
  // Add other arcs as needed
];

const globeConfig = {
  // Define the necessary configuration for the globe
  enableZoom: true,
  // other configuration options...
};

const Page = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Empty container for image or content */}
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            {/* Add image or other content here */}
            <img
              src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Grow your Business
            </h2>

            <p className="mt-4 text-gray-600">
              In today's digital age, having a strong online presence is crucial
              for the success of any business. Whether you're a small startup or
              an established company, Jupven Webtech offers a comprehensive
              range of web solutions designed to help your business thrive in
              the digital world.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

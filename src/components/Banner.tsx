import React from "react";
import { Cover } from "./ui/cover";

const Banner = () => {
  return (
    <div className="flex items-center -mt-16 justify-center mx-5 h-screen">
      <div className="w-full sm:flex  sm:justify-center sm:items-center mb-2 rounded-lg text-white dark:bg-[#09090B]">
        <h3 className="text-white p-3 md:text-2xl lg:text-2xl text-lg hidden"></h3>
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight  dark:text-white text-gray-900 sm:text-4xl xl:text-5xl">
            <Cover>Boost</Cover>  Your Productivity
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-300 sm:mt-8">
            Enhance your workflow with advanced features
          </p>
        </div>
        <div className="p-5 pt-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 m-5 xl:gap-16 xl:justify-between">
          {/* Delivery Cost */}
          <div className="bg-gradient-to-r dark:from-gray-950 dark:to-gray-900 shadow-lg rounded-lg w-32 h-32 sm:w-36 sm:h-36 md:w-42 md:h-42 flex justify-center items-center">
            <div className="p-4 md:p-7 text-center">
              <h2 className="text-xl dark:text-gray-200 capitalize text-black">
                10$
              </h2>
              <h3 className="text-sm dark:text-gray-400 text-black">
                delivery cost
              </h3>
            </div>
          </div>

          {/* Minimum Order Amount */}
          <div className="bg-gradient-to-r dark:from-gray-950 dark:to-gray-900 shadow-lg rounded-lg w-32 h-32 sm:w-36 sm:h-36 md:w-42 md:h-42 flex justify-center items-center">
            <div className="p-4 md:p-7 text-center">
              <h2 className="text-xl dark:text-gray-200 text-black capitalize">
                30$
              </h2>
              <h3 className="text-sm text-black dark:text-gray-400">
                minimum order amount
              </h3>
            </div>
          </div>

          {/* Estimated Delivery Time */}
          <div className="bg-gradient-to-r dark:from-gray-950 dark:to-gray-900 shadow-lg rounded-lg w-32 h-32 sm:w-36 sm:h-36 md:w-42 md:h-42 flex justify-center items-center">
            <div className="p-4 md:p-7 text-center">
              <h2 className="text-lg text-black dark:text-gray-200 capitalize">
                <span>00:40 AM</span> - <span>01:30 AM</span>
              </h2>
              <h3 className="text-sm text-black dark:text-gray-400">
                estimated delivery time
              </h3>
            </div>
          </div>

          {/* City */}
          <div className="bg-gradient-to-r dark:from-gray-950 dark:to-gray-900 shadow-lg rounded-lg w-32 h-32 sm:w-36 sm:h-36 md:w-42 md:h-42 flex justify-center items-center">
            <div className="p-4 md:p-7 text-center">
              <h2 className="text-lg dark:text-gray-200 text-black capitalize">
                Rewa
              </h2>
              <h3 className="text-sm dark:text-gray-400">city</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

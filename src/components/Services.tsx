import React from "react";
import { Cover } from "./ui/cover";

const Services = () => {
  return (
    <section
      id="new-features"
      className="py-8 bg-white dark:bg-[#09090B] dark:text-white sm:py-10 lg:py-16"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-tight dark:text-white text-gray-900 sm:text-4xl xl:text-6xl">
            Our Company <Cover>Services</Cover>
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-300 sm:mt-8">
            Enhance your workflow with advanced features
          </p>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {/* Feature 1 */}
          <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
              <i className="fa-solid fa-chart-column text-3xl dark:text-white text-gray-900">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5595/5595272.png"
                  alt=""
                />
              </i>
            </div>
            <h3 className="mt-8 text-xl font-bold dark:text-white text-gray-900">
              Website Development
            </h3>
            <p className="mt-5 text-base dark:text-white text-gray-600">
              Build and optimize websites with cutting-edge technologies.
              Leverage advanced development tools to create scalable,
              high-performance solutions that drive user engagement and business
              success.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
              <i className="fa-solid fa-truck-fast text-3xl text-gray-900">
                <img
                  src="https://www.webplanex.com/wp-content/uploads/2023/08/ux-ui.png"
                  alt=""
                />
              </i>
            </div>
            <h3 className="mt-6 text-xl font-bold dark:text-white text-gray-900">
              UI/UX Designer
            </h3>
            <p className="mt-5 text-base dark:text-white text-gray-600">
              Design intuitive, user-centered interfaces that enhance the
              overall user experience. Use data-driven insights and design tools
              to craft visually appealing and functional designs that drive
              engagement and satisfaction.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
              <i className="fa-solid fa-shield text-3xl text-gray-900">
                <img
                  src="https://sunrisesoftech.com/wp-content/uploads/2016/12/resp-300x300.png"
                  alt=""
                />
              </i>
            </div>
            <h3 className="mt-12 text-xl font-bold dark:text-white text-gray-900">
              Responsive Web Design
            </h3>
            <p className="mt-5 text-base dark:text-white text-gray-600">
              Create adaptive and mobile-friendly websites that deliver seamless
              experiences across all devices. Use responsive design principles
              and modern frameworks to ensure optimal performance and usability,
              no matter the screen size.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
              <i className="fa-solid fa-cloud text-3xl text-gray-900">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5538/5538843.png"
                  alt=""
                />
              </i>
            </div>
            <h3 className="mt-12 text-xl font-bold dark:text-white text-gray-900">
              S.E.O
            </h3>
            <p className="mt-5 text-base dark:text-white text-gray-600">
              Optimize your website’s visibility with proven SEO strategies.
              Leverage keyword research, on-page optimization, and performance
              analytics to drive organic traffic and improve search engine
              rankings.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
              <i className="fa-solid fa-pen-nib text-3xl text-gray-900">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--website-smartphone-application-mobile-pack-design-icons-5580808.png?f=webp"
                  alt=""
                />
              </i>
            </div>
            <h3 className="mt-12 text-xl font-bold dark:text-white text-gray-900">
              Mobile App Development
            </h3>
            <p className="mt-5 text-base dark:text-white text-gray-600">
              Develop high-performance mobile apps that provide seamless
              experiences across iOS and Android devices. Utilize modern
              frameworks and technologies to create intuitive, feature-rich
              applications that engage users and drive business growth.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
              <i className="fa-solid fa-bolt text-3xl text-gray-900">
                <img
                  src="https://www.pngplay.com/wp-content/uploads/6/Domain-Hosting-PNG-HD-Quality.png"
                  alt=""
                />
              </i>
            </div>
            <h3 className="mt-12 text-xl font-bold dark:text-white text-gray-900">
              Hosting & Domains
            </h3>
            <p className="mt-5 text-base dark:text-white text-gray-600">
              Secure reliable hosting and custom domain solutions for your
              website. Ensure fast loading speeds, uptime, and easy management
              with top-tier hosting services, while building a strong online
              presence with personalized domain names.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { LinkPreview } from "@/components/ui/link-preview";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the type for TeamMember Props
interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl: string;
  previewUrl: string; // New prop for LinkPreview URL
}

// TeamMember Component to reuse for each member
const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  imageUrl,
  previewUrl, // Receive the previewUrl prop
}) => (
  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
    <div className="flex flex-col items-center">
      {/* Avatar */}
      <Link href={previewUrl} passHref>
        <LinkPreview url={previewUrl}>
          <Image
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
            src={imageUrl}
            alt={`Preview of ${name}'s work`}
            width={400}
            height={400}
            layout="intrinsic" // Ensures image is responsive
          />
        </LinkPreview>
      </Link>

      {/* Details */}
      <div className="text-center mt-6">
        {/* Name */}
        <h1 className="light:text-gray-900 dark:text-gray-400 text-xl font-bold mb-1">
          <LinkPreview
            url={previewUrl}
            className="font-bold hover:text-indigo-600 transition duration-300"
          >
            {name}
          </LinkPreview>
        </h1>

        {/* Title */}
        <div className="light:text-gray-700 dark:text-gray-400 font-light mb-2">
          {title}
        </div>
      </div>
    </div>
  </div>
);

const Page: React.FC = () => {
  return (
    <div>
      {/* MDI Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
      />

      {/* Page Container */}
      <div className="flex xl:mt-16 items-center justify-center min-h-screen dark:bg-[#09090B] bg-white">
        <div className="flex flex-col">
          <div className="flex flex-col mt-2">
            {/* Our Works Section */}
            <div className="container max-w-7xl px-4">
              {/* Section Header */}
              <div className="flex flex-wrap justify-center text-center mb-16">
                <div className="w-full lg:w-6/12 px-4">
                  {/* Header */}
                  <h1 className="light:text-gray-900 lg:mt-0 xl:-mt-40 sm:mt-8 dark:text-gray-200 text-4xl font-bold mb-6">
                    Our <Cover>Work</Cover>
                  </h1>

                  {/* Description */}
                  <p className="light:text-gray-900 dark:text-gray-300 text-lg font-light">
                    Delivering custom, high-performance websites with a focus on
                    design, functionality, and user experience.
                  </p>
                </div>
              </div>

              {/* Team Members */}
              <div className="flex flex-wrap">
                {/* Team Member #1 */}
                <TeamMember
                  name="Male Fashion"
                  title="Male Clothing"
                  imageUrl="/CardPreview1.png"
                  previewUrl="https://jupven0603.github.io/MaleFashion/"
                />

                {/* Team Member #2 */}
                <TeamMember
                  name="Coffee Shop"
                  title="Landing Page"
                  imageUrl="/CardPreview2.png"
                  previewUrl="https://jupven0603.github.io/Coffo-coffee/"
                />

                {/* Team Member #3 */}
                <TeamMember
                  name="Colo Shop"
                  title="E-Commerce"
                  imageUrl="/CardPreview3.png"
                  previewUrl="https://jupven0603.github.io/Colo-shop/"
                />

                {/* Team Member #4 */}
                <TeamMember
                  name="Planets"
                  title="E-Commerce"
                  imageUrl="/CardPreview4.png"
                  previewUrl="https://demo.tailgrids.com/templates/planet/build/"
                />
              </div>
              {/* End of team members */}
            </div>
            {/* End of container */}
          </div>
          {/* End of flex col */}
        </div>
      </div>
    </div>
  );
};

export default Page;

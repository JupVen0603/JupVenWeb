import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/logo.png",
  },
];

const page = () => {
  return (
    <WavyBackground className="max-w-full mx-auto pb-40">
      <div className="flex flex-row items-center text-6xl justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </WavyBackground>
  );
};

export default page;

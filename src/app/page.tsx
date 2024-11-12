import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="my-12 border-t-1 border-gray-300" />
      <Services />
      <hr className="my-12 border-t-1 border-gray-300" />
      <Banner />
    </>
  );
}

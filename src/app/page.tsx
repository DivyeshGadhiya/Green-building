import { useEffect } from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import ProjectSub from "@/components/ProjectSub.tsx";
import ServicesMainPage from "@/components/ServicesmainPage";
import "../styles/index.css";
import HomeAbout from "@/components/HomeAbout";


export const metadata: Metadata = {
  title: "Raivat green - Home",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <HomeAbout />
      <AboutSectionTwo />
      {/* <Features /> */}
      <Brands />
      <Counter /> 
      <ServicesMainPage />
      {/* <Video />
      <AboutSectionOne />
      <Testimonials />
      <Pricing />
      <Blog /> */}
      {/* <ProjectSub />  */}
      <Contact />
    </>
  );
}

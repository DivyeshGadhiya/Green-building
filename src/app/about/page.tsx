"use client"
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionAwards from "@/components/About/AboutSectionAwards";

 const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page",
};

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Green building, also known as sustainable building, is the practice of creating structures and using processes that are environmentally responsible and resource-efficient throughout a building's life cycle: from siting to design, construction, operation, maintenance, renovation, and deconstruction. This holistic approach aims to enhance the well-being of both people and the planet."
      />
      <AboutSectionOne />
      <AboutSectionThree />
      <AboutSectionTwo />
      <AboutSectionAwards />
    </>
  );
};

export default AboutPage;

// components/About/AboutSectionTwo.js
"use client"
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSectionTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container pb-16">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 mb-8 lg:mb-0">
            <div className="max-w-[510px] max-lg:max-w-full" data-aos="fade-left">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Eco-Friendly Solutions
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We offer a range of eco-friendly solutions that are designed to help our clients achieve sustainability goals while minimizing environmental impact.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Innovative Technology
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our innovative technology solutions are designed to provide maximum efficiency and reduce energy consumption.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-aos="fade-right"
            >
              <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src="/images/about/green earth.jpg"
                  alt="Rotating eco-friendly image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full animate-spin-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

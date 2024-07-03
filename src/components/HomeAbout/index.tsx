import Image from "next/image";
import React from "react";

const HomeAbout = () => {
  return (
    <section className="container py-16 lg:pt-28 lg:pb-16">
      <div className="flex flex-row max-lg:flex-col">
        <Image
          src="/images/home/HomeAbout_1.svg"
          alt="about image"
          height={650}
          width={650}
          className="w-1/2 max-lg:w-full"
        />
        <div className="w-1/2 pl-8 pt-8 max-lg:pt-6 max-lg:pl-0 max-lg:w-full">
          <p className="mb-4 text-xl font-semibold text-[#000]">
            Green Building: A Sustainable Future
          </p>
          <p className="text-[16px] tracking-wide max-lg:text-[14px] text-[#000]">
            Green building is an approach to construction that prioritizes
            environmental responsibility and resource efficiency throughout a
            building&apos;s life cycle, from planning and design to
            construction, operation, maintenance, renovation, and demolition. It
            aims to reduce the overall impact of the built environment on human
            health and the natural environment by efficiently using energy,
            water, and other resources, protecting occupant health, improving
            employee productivity, and reducing waste, pollution, and
            environmental degradation.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-row max-lg:flex-col-reverse">
        <div className="w-1/2 pr-8 pt-11 max-lg:pt-4 max-lg:pl-0 max-lg:w-full">
          <p className="mb-4 text-xl font-semibold text-[#000]">
            Innovative Solutions for a Greener Tomorrow
          </p>
          <p className="text-[16px] tracking-wide max-lg:text-[14px] text-[#000]">
            By incorporating sustainable materials and innovative technologies,
            green buildings provide a healthier, more sustainable living and
            working environment. These buildings often feature energy-efficient
            systems, renewable energy sources, water conservation measures, and
            enhanced indoor air quality. Green building practices not only
            contribute to the fight against climate change but also promote the
            well-being of communities, leading to a more sustainable and
            resilient future for all.
          </p>
        </div>
        <Image
          src="/images/home/HomeAbout_2.svg"
          alt="about image"
          height={650}
          width={650}
          className="w-1/2 max-lg:w-full"
        />
      </div>
    </section>
  );
};

export default HomeAbout;

import Image from "next/image";
import React from "react";

const HomeAbout = () => {
  return (
    <section className="container py-16 md:py-20 lg:py-28">
      <div className="flex flex-row">
        <Image
          src="/images/home/HomeAbout_1.svg"
          alt="about image"
          height={650}
          width={650}
          className="w-1/2"
        />
        <div className="w-1/2 pl-8 pt-14">
          <p className="mb-4 text-xl font-semibold">
            Green Building: A Sustainable Future
          </p>
          <p className="text-[16px] tracking-wide">
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
      <div className="mt-8 flex flex-row">
        <div className="w-1/2 pr-8 pt-11">
          <p className="mb-4 text-xl font-semibold">
            Innovative Solutions for a Greener Tomorrow
          </p>
          <p className="text-[16px] tracking-wide">
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
          className="w-1/2"
        />
      </div>
    </section>
  );
};

export default HomeAbout;

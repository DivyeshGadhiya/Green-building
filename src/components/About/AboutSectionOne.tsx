// components/About/AboutSectionOne.js
import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <section className="container pt-16 ">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-aos="fade-right"
            >
              <Image
                src="/images/about/about-image.png"
                alt="about image"
                fill
                className="drop-shadow-three"
              />
            </div>
          </div> */}
          <div className="w-full px-4 ">
            <div className=" text-center max-lg:max-w-full" data-aos="fade-left">
              <h2 className="mb-4 text-2xl font-bold  text-black">
                Raivat
              </h2>
              <p className="text-base font-medium leading-relaxed text-body-color">
                Raivat was established in 2017 to provide end-to-end eco-friendly solutions.
                Raivat represents a holy mountain with abundant natural beauties.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-body-color">
                At Raivat, we offer our expertise to our clients towards achieving environmental sustainability. We rollout the 3R model: Reduce, Reuse, and Recycle in achieving the goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="container py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
              data-aos="fade-right"
            >
              <Image
                src="/images/about/about-image.png"
                alt="about image"
                fill
                className="drop-shadow-three"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[510px] max-lg:max-w-full" data-aos="fade-left">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                To play the role as a reliable service provider in achieving sustainable environment for the clients and to involve in minimizing the carbon footprint by deploying eco-friendly solutions.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Rolling out spectrum of services in implementing Green Building concepts through sustainable business policies. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

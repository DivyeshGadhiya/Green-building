// components/About/AboutSectionAwards.js
import Image from "next/image";

const AboutSectionAwards = () => {
  return (
    <section className="container pt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black" data-aos="fade-up">
        Raivat&rsquo;s Achievements
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center" data-aos="fade-up">
        <div className="mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src="/images/about/award1.png"
            alt="Young Achievers' Award 2021"
            width={500}
            height={700}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-[50%]">
          <Image
            src="/images/about/award2.png"
            alt="Certificate of Appreciation"
            width={800}
            height={700}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionAwards;

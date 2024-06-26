import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-[url('/images/acc/baground.jpg')] bg-center bg-no-repeat  bg-fixed">
        <div className="container backdrop-blur-lg p-5" data-aos="fade-up" >
          <SectionTitle
            title="Accreditation"
            paragraph=""
            center
          />

          <div className="grid grid-cols-2 gap-x-0 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

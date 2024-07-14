// components/About/AboutSectionThree.js
const AboutSectionThree = () => {
    return (
      <section className="container pb-24 pt-10">
        <div className="container">
          <div className="flex flex-col items-center" data-aos="fade-up">
            {/* <h3 className="mb-4 text-2xl font-bold text-black">3R Model</h3> */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="py-2 px-4 border">Reduce</th>
                    <th className="py-2 px-4 border">Reuse</th>
                    <th className="py-2 px-4 border">Recycle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">Diligent use of raw materials</td>
                    <td className="py-2 px-4 border">Intelligent use of available resources</td>
                    <td className="py-2 px-4 border">Minimizing the carbon footprint</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-base font-medium leading-relaxed text-body-color text-center">
              We work with our clients for certification and their benefits, by exchanging our knowledge, helping them to achieve "Building Sustainability".
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSectionThree;
  
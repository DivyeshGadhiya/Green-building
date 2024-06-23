import React from 'react';

const stepsData = [
  {
    title: 'Project Feasibility',
    steps: [
      'Data Analysis of the project',
      'Feasibility Study and Checklist',
      'Project Planning and discussion',
      'Prepare Documentation and Coordination with Client',
    ],
  },
  {
    title: 'Project Simulation',
    steps: [
      'Design Review',
      'Energy Simulation',
      'Daylight Simulation',
      'Microclimatic Analysis',
    ],
  },
  {
    title: 'Facilitation',
    steps: [
      'Coordination with Project stakeholders',
      'Training and detailed guidelines',
      'Data collection, Review of specifications',
      'Site visits',
      'Documentation and Calculations towards credit compliance',
    ],
  },
  {
    title: 'Project Submission',
    steps: [
      'Pre-certification',
      'Review submission',
      'Award of Rating',
      'M & V',
    ],
  },
  {
    title: 'Quality Control by team leads',
    steps: [
      'Project documentation review',
      'Consistency Checks',
      'Coordination with clients',
    ],
  },
  {
    title: 'Commissioning',
    steps: [
      'Design Review',
      'OPR & BOD',
      'On-site measurements & audits',
      'Reporting of findings log',
      'Training of team',
      'Submitting Report',
    ],
  },
];

const ProjectSub = () => {
  return (
    <div className="w-[100%] min-h-screen bg-gray-100 flex flex-col items-center py-10 bg-[url('/images/project/bground.jpg')] bg-fixed bg-center bg-no-repeat" >
      <div className='flex justify-center'>
        <h1 className="text-4xl font-seriftext-black max-md:text-xl max-md:w-full pb-10 w-[100%] font-extrabold mb-8">Project Submission Process</h1></div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14 max-w-7xl w-full px-5">
        {/* First row */}
        <div className="col-span-1 flex flex-col items-center relative" data-aos="fade-right">
          <div className="backdrop-blur-lg text-black text-[20px] font-semibold p-6 rounded-lg shadow-md w-full h-full">
            <h3 className="text-2xl font-bold mb-4">{stepsData[0].title}</h3>
            <ul className="list-disc ml-6 space-y-2 ">
              {stepsData[0].steps.map((subStep, subIndex) => (
                <li key={subIndex}>{subStep}</li>
              ))}
            </ul>
          </div>
          <div className="absolute right-[-3rem] top-1/2 max-md:hidden transform -translate-y-1/2" >
            <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 485.963"><path fill="#000" d="M273.559 171.532L17.064 151.724C7.717 151.002 0 159.413 0 168.785v148.393c0 9.372 7.704 17.783 17.064 17.06l256.495-19.807v.369l-35.318 100.959c-19.779 51.211 12.189 91.873 49.588 57.439l199.982-191.637c32.252-32.255 32.252-45.759 0-78.011L287.829 11.913c-36.273-32.432-69.367 6.228-49.588 57.436l35.318 100.962v1.221z" /></svg>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center relative" data-aos="fade-down"
            >
          <div className=" text-black text-[20px] font-semibold backdrop-blur-lg  p-6 rounded-lg shadow-md w-full h-full">
            <h3 className="text-2xl font-bold mb-4">{stepsData[1].title}</h3>
            <ul className="list-disc ml-6 space-y-2 ">
              {stepsData[1].steps.map((subStep, subIndex) => (
                <li key={subIndex}>{subStep}</li>
              ))}
            </ul>
          </div>
          <div className="absolute bottom-[-3.6rem] max-md:hidden rotate-90 left-1/2 transform -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 485.963"><path fill="#000" d="M273.559 171.532L17.064 151.724C7.717 151.002 0 159.413 0 168.785v148.393c0 9.372 7.704 17.783 17.064 17.06l256.495-19.807v.369l-35.318 100.959c-19.779 51.211 12.189 91.873 49.588 57.439l199.982-191.637c32.252-32.255 32.252-45.759 0-78.011L287.829 11.913c-36.273-32.432-69.367 6.228-49.588 57.436l35.318 100.962v1.221z" /></svg>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center relative" data-aos="fade-left">
          <div className="backdrop-blur-lg text-black text-[20px] font-semibold p-6 rounded-lg shadow-md w-full h-full">
            <h3 className="text-2xl font-bold mb-4">{stepsData[2].title}</h3>
            <ul className="list-disc ml-6 space-y-2">
              {stepsData[2].steps.map((subStep, subIndex) => (
                <li key={subIndex}>{subStep}</li>
              ))}
            </ul>
          </div>
          <div className="absolute -left-12 max-md:hidden rotate-[132deg] top-[106%]">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 485.963"><path fill="#000" d="M273.559 171.532L17.064 151.724C7.717 151.002 0 159.413 0 168.785v148.393c0 9.372 7.704 17.783 17.064 17.06l256.495-19.807v.369l-35.318 100.959c-19.779 51.211 12.189 91.873 49.588 57.439l199.982-191.637c32.252-32.255 32.252-45.759 0-78.011L287.829 11.913c-36.273-32.432-69.367 6.228-49.588 57.436l35.318 100.962v1.221z" /></svg>
          </div>
        </div>
        {/* Second row */}
        <div className="col-span-1 flex flex-col items-center relative pt-5 " data-aos="fade-up-right">
          <div className="backdrop-blur-lg text-black text-[20px] font-semibold p-6 rounded-lg shadow-md w-full h-full">
            <h3 className="text-2xl font-bold mb-4">{stepsData[3].title}</h3>
            <ul className="list-disc ml-6 space-y-2">
              {stepsData[3].steps.map((subStep, subIndex) => (
                <li key={subIndex}>{subStep}</li>
              ))}
            </ul>

          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center relative md:pt-5" data-aos="fade-up"  >
          <div className="backdrop-blur-lg text-black text-[20px] font-semibold p-6 rounded-lg shadow-md w-full h-full">
            <h3 className="text-2xl font-bold mb-4">{stepsData[4].title}</h3>
            <ul className="list-disc ml-6 space-y-2">
              {stepsData[4].steps.map((subStep, subIndex) => (
                <li key={subIndex}>{subStep}</li>
              ))}
            </ul>
          </div>
          <div className="absolute max-md:hidden right-[-2.9rem] rotate-180 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 485.963"><path fill="#000" d="M273.559 171.532L17.064 151.724C7.717 151.002 0 159.413 0 168.785v148.393c0 9.372 7.704 17.783 17.064 17.06l256.495-19.807v.369l-35.318 100.959c-19.779 51.211 12.189 91.873 49.588 57.439l199.982-191.637c32.252-32.255 32.252-45.759 0-78.011L287.829 11.913c-36.273-32.432-69.367 6.228-49.588 57.436l35.318 100.962v1.221z" /></svg>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center maz relative md:pt-5">
          <div className="backdrop-blur-lg text-black text-[20px] font-semibold p-6 rounded-lg shadow-md w-full h-full" data-aos="fade-up-left">
            <h3 className="text-2xl font-bold mb-4">{stepsData[5].title}</h3>
            <ul className="list-disc ml-6 space-y-2">
              {stepsData[5].steps.map((subStep, subIndex) => (
                <li key={subIndex}>{subStep}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute left-[31.5%] rotate-180 top-[calc(81%-2rem)] z-50 max-md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 485.963"><path fill="#000" d="M273.559 171.532L17.064 151.724C7.717 151.002 0 159.413 0 168.785v148.393c0 9.372 7.704 17.783 17.064 17.06l256.495-19.807v.369l-35.318 100.959c-19.779 51.211 12.189 91.873 49.588 57.439l199.982-191.637c32.252-32.255 32.252-45.759 0-78.011L287.829 11.913c-36.273-32.432-69.367 6.228-49.588 57.436l35.318 100.962v1.221z" /></svg>
        </div>
      </div>
      {/* Arrows for Vertical Steps */}

    </div>
  );
};

export default ProjectSub;

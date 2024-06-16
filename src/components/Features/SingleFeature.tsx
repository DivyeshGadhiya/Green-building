import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp flex flex-col items-center justify-center text-center" data-wow-delay=".15s">
        <div className="mb-2 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-[#2c9e4b]">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white max-sm:text-[14px] sm:text-[16px] xl:text-[18px]">
          {title}
        </h3>
        {/* <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p> */}
      </div>
    </div>
  );
};

export default SingleFeature;

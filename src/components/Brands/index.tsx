import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16 overflow-hidden">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative overflow-hidden bg-gray-light rounded-sm">
            <div className="flex w-[200%] animate-marquee">
              <div className="flex w-[50%]">
                {brandsData.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </div>
              <div className="flex w-[50%]">
                {brandsData.map((brand) => (
                  <SingleBrand key={`${brand.id}-duplicate`} brand={brand} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex items-center justify-center px-3 py-4 w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 select-none">
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="relative h-16 w-full opacity-70 transition hover:opacity-100"
    >
      <Image
        src={imageLight}
        alt={name}
        layout="fill"
        objectFit="contain"
        className="hidden"
      />
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="contain"
        className="block"
      />
    </a>
  </div>
  );
};

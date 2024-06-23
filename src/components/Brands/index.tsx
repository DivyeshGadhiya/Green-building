import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="overflow-hidden pt-16">
      <div className="m-auto flex w-[90%] flex-wrap max-sm:w-full">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-sm bg-gray-light">
            <div className="flex w-[200%] animate-marquee">
              <div className="flex w-[50%] max-sm:w-[100%]">
                {brandsData.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </div>
              <div className="flex w-[50%] max-sm:w-[100%]">
                {brandsData.map((brand) => (
                  <SingleBrand key={`${brand.id}-duplicate`} brand={brand} />
                ))}
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
    <div className="flex h-24 w-[100%] select-none items-center justify-center px-3 py-4 max-sm:w-[250px] max-sm:px-1 max-sm:py-0">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-16 w-full opacity-100 transition hover:opacity-70"
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

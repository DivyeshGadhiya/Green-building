"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [childIndex, setChildIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });


  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnter = (index: number) => {
    clearTimeoutRef();
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
      setChildIndex(null);
    }, 200); // Adjust delay as needed
  };

  const handleChildMouseEnter = (subIndex: number) => {
    clearTimeoutRef();
    setChildIndex(subIndex);
  };

  const handleChildMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setChildIndex(null);
    }, 200); // Adjust delay as needed
  };

  const usePathName = usePathname();
  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
        ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
        : "absolute bg-transparent  backdrop-blur-md"
        }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-2"
                } `}
            >
              <Image
                src="/images/logo/green_logo.svg"
                alt="logo"
                width={140}
                height={30}
                className="w-full"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "
                    }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
                  }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menu, index) => (
                    <div
                      key={menu.id}
                      className="group relative"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link href={menu.path || ''} className={`flex text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menu.path
                        ? "text-primary"
                        : "text-dark hover:text-primary"
                        }`}>
                        <div className="flex cursor-pointer items-center justify-between text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0">{menu.title}
                          {menu.submenu &&
                            <IoIosArrowDown className="pl-3 w-[30px] h-25" />
                          }
                        </div>
                      </Link>
                      {menu.submenu && (
                        <p
                          className={`relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block w-[290px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${activeIndex !== index ? "block" : "hidden"
                            }`}
                        >
                          {menu.submenu.map((submenu, subIndex) => (
                            <li
                              key={submenu.id}
                              className="relative"
                              onMouseEnter={() => handleChildMouseEnter(subIndex)}
                              onMouseLeave={handleChildMouseLeave}
                            >
                              <Link href={submenu.path || ''}>
                                <div className="flex justify-between rounded py-2.5 text-sm text-dark hover:text-primary lg:px-3 ">
                                  {submenu.title}
                                  <IoIosArrowForward className="inline-block text-end" />
                                </div>
                              </Link>
                              {submenu.childSubMenu && (
                                <ul className={`absolute left-full w-[210px] top-0 ml-3 bg-white p-4 rounded-md shadow-lg ${childIndex === subIndex ? 'block' : 'hidden'}`}>
                                  {submenu.childSubMenu.map((child, index) => (
                                    <Link href={child.path || ''} key={index} className="block rounded py-2.5 text-sm text-dark hover:text-primary lg:px-3">
                                      {child.title}
                                    </Link>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </p>
                      )}
                    </div>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              {/* <Link
                  href="/signin"
                  className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 md:block"
                >
                  Sign In
                </Link> */}
              <Link
                href="#"
                className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-[#2c9e4b] px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6"
              >
                Enquiry Now
              </Link>
              {/* <div>
                  <ThemeToggler />
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
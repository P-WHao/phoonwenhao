import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

//For Import Icon
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn, FaAngleUp } from "react-icons/fa";

//For Constant Text
import userData from "../constants/data";

//For Import Navbar Logo
import NavLogo from "../public/assets/navWenHaoLogo.png";
import NavDarkLogo from "../public/assets/navLogoDarkWenHao.png";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      setNavBg("#1F2937");
    } else if(theme === "light") {
      setNavBg("#ecf0f3");
    }
  }, [theme]);

  //Bottom UP
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 select-none bg-white dark:bg-gray-800"
          : "fixed w-full h-20 z-[100] select-none bg-white dark:bg-gray-800"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:text-[#ffffff]">
        {theme == "light" ? (
          <Link href="/#mantra">
          <Image
            src={NavLogo}
            alt="Wen Hao Logo Image"
            width="150"
            height="50"
          />
        </Link>
        ) : (
          <Link href="/#mantra">
            <Image
              src={NavDarkLogo}
              alt="Wen Hao Logo Image"
              width="150"
              height="50"
            />
          </Link>
        )}
        <div>
          <ul className="hidden md:flex">
            <Link href="/#mantra">
              <li className="m-5 text-base content-center font-bold uppercase text-black dark:text-white hover:text-[#5651e5] dark:font-bold dark:hover:text-[#64ffda]">
                {userData.navbar.home}
              </li>
            </Link>
            <Link href="/#aboutme">
              <li className="m-5 text-base uppercase font-bold text-black dark:text-white hover:text-[#5651e5] dark:font-bold dark:hover:text-[#64ffda]">
                {userData.navbar.about}
              </li>
            </Link>
            <Link href="/#skills">
              <li className="m-5 text-base uppercase font-bold text-black dark:text-white hover:text-[#5651e5] dark:font-bold dark:hover:text-[#64ffda]">
                {userData.navbar.skills}
              </li>
            </Link>
            <Link href="/#experiences">
              <li className="m-5 text-base uppercase font-bold text-black dark:text-white hover:text-[#5651e5] dark:font-bold dark:hover:text-[#64ffda]">
                {userData.navbar.experiences}
              </li>
            </Link>
            <Link href="/#projects">
              <li className="m-5 text-base uppercase font-bold text-black dark:text-white hover:text-[#5651e5] dark:font-bold dark:hover:text-[#64ffda]">
                {userData.navbar.projects}
              </li>
            </Link>
            <Link href="/#contact">
              <li className="m-5 text-base uppercase font-bold text-black dark:text-white hover:text-[#5651e5] dark:font-bold dark:hover:text-[#64ffda]">
                {userData.navbar.contact}
              </li>
            </Link>

            {/* Dark Mode or Light Mode Section */}
            <li>
              <buttontoggledarklightmode
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-10 mt-1 h-10 p-3 rounded focus:outline-none"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-8 h-8 text-yellow-500 dark:text-yellow-500"
                  >
                    {theme === "light" ? (
                      <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    )}
                  </svg>
                )}
              </buttontoggledarklightmode>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile View */}
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Bottom UP */}
      <div className="fixed bottom-10 right-10">
        {" "}
        {showTopBtn && (
          <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block p-3 bg-[#5651e5] dark:bg-[#64ffda] dark:hover:bg-[#a2ffe8] dark:text-[#000000] dark:text-bold text-[white] font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#9996ef] transition duration-150 ease-in-out"
          id="btn-back-to-top"
          onClick={goToTop}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            class="w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </button>
        )}{" "}
      </div>

      
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen pl-10 pr-10 pt-5 ease-in duration-500 bg-white dark:bg-gray-800"
              : "fixed left-[-100%] top-0 w-[80%] p-10 ease-in duration-500 bg-white dark:bg-gray-800"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {theme === "light" ? (
                <Link href="/#mantra" onClick={() => setNav(false)}>
                <Image
                  src={NavLogo}
                  width="60"
                  height="50"
                  alt="Wen Hao Logo Image"
                />
              </Link>
              ) : (
                <Link href="/#mantra" onClick={() => setNav(false)}>
                  <Image
                    src={NavDarkLogo}
                    width="60"
                    height="50"
                    alt="Wen Hao Logo Image"
                  />
                </Link>
              )}

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-[#ffffff] dark:border-white dark:border-2 dark:shadow-none dark:hover:bg-[#2d3c50]"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 ">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-[#ffffff]">
                {userData.navbar.quotes}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase dark:text-[#ffffff]">
              <Link href="/#mantra">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5] hover:font-bold dark:hover:text-[#64ffda]"
                >
                  {userData.navbar.home}
                </li>
              </Link>
              <Link href="/#aboutme">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5] hover:font-bold dark:hover:text-[#64ffda]"
                >
                  {userData.navbar.about}
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5] hover:font-bold dark:hover:text-[#64ffda]"
                >
                  {userData.navbar.skills}
                </li>
              </Link>
              <Link href="/#experiences">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5] hover:font-bold dark:hover:text-[#64ffda]"
                >
                  {userData.navbar.experiences}
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5] hover:font-bold dark:hover:text-[#64ffda]"
                >
                  {userData.navbar.projects}
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5] hover:font-bold dark:hover:text-[#64ffda]"
                >
                  {userData.navbar.contact}
                </li>
              </Link>
              {/* Dark Light Mode Icon */}
              <li>
                <buttontoggledarklightmode
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="w-8 h-8 p-3 rounded focus:outline-none"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {mounted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-8 h-8 -ml-3 text-yellow-500 dark:text-yellow-500"
                    >
                      {theme === "light" ? (
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      )}
                    </svg>
                  )}
                </buttontoggledarklightmode>
              </li>
            </ul>

            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5] dark:text-[#64ffda]">
                {userData.navbar.letconnect}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://github.com/P-WHao"
                target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-none dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#ffffff] dark:hover:bg-[#2d3c50] hover:scale-105 ease-in">
                    <FaGithub />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/p-whao/"
                target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-none dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#ffffff] dark:hover:bg-[#2d3c50] hover:scale-105 ease-in">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="mailto:whphoongeneral@gmail.com?subject = Let's Connect"
                target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-none dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#ffffff] dark:hover:bg-[#2d3c50] hover:scale-105 ease-in">
                    <AiOutlineMail />
                  </div>
                </a>
                <a href="https://www.facebook.com/phoon.wenhao/"
                target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-none dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#ffffff] dark:hover:bg-[#2d3c50] hover:scale-105 ease-in">
                    <FaFacebook />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

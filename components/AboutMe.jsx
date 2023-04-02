import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//For Constant Text
import userData from "../constants/data";

//For Import Icon
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn, FaChevronLeft, FaChevronRight } from "react-icons/fa";

//For Import Image
import ProfileImage from "../public/assets/aboutWenHaoLight.png";

export const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? 3 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === 3 ? 0 : activeIndex + 1);
  };

  const aboutMeText = [
    userData.aboutMe.aboutmedescp,
    userData.aboutMe.aboutmedescp1,
    userData.aboutMe.aboutmedescp2,
    userData.aboutMe.aboutmedescp3,
  ];

  return (
    <div
      id="aboutme"
      className="bg-[#ecf0f3] text-[#1f2937] w-full md:h-screen p-2 flex dark:bg-gray-900 items-center py-40 select-none"
    >
      <div className="max-w-[1400px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-[#64ffda]">
            {userData.aboutMe.title}
          </p>
          <h2 className="py-4 dark:text-[#ffffff]">{userData.aboutMe.descp}</h2>
          <div>
            <p className="py-2 text-gray-600 dark:text-[#ffffff] text-justify leading-relaxed">
              {aboutMeText[activeIndex]}
            </p>
            <div className="flex justify-end">
              <button
                className="p-4 bg-[#5651e5] hover:bg-[#9996ef] dark:text-[#ffffff] dark:bg-gray-900 dark:border-2 dark:border-[#ffffff] dark:shadow-none dark:hover:bg-[#2d3c50] text-gray-100 mt-4 mr-4"
                onClick={handlePrevClick}
              >
                <FaChevronLeft />
              </button>
              <button
                className="p-4 bg-[#5651e5] hover:bg-[#9996ef] dark:text-[#ffffff] dark:bg-gray-900 dark:border-2 dark:border-[#ffffff] dark:shadow-none dark:hover:bg-[#2d3c50] text-gray-100 mt-4"
                onClick={handleNextClick}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className="flex items-center md:flex my-4 w-full sm:w-[80%] py-4 text-[#000000] dark:text-[#000000]">
            <a
              href="https://github.com/P-WHao"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 border-2 border-[#5651e5] cursor-pointer dark:shadow-none dark:text-[#64ffda] dark:bg-transparent dark:border-2 dark:border-[#64ffda] dark:hover:bg-[#2d3c50] hover:scale-105 ease-in">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/p-whao/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="ml-5 md:ml-10 rounded-full shadow-lg shadow-gray-400 p-6 border-2 border-[#5651e5] cursor-pointer dark:shadow-none dark:text-[#64ffda] dark:bg-transparent dark:border-2 dark:border-[#64ffda] dark:hover:bg-[#2d3c50] hover:scale-105 ease-in">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="mailto:whphoongeneral@gmail.com?subject = Let's Connect"
              target="_blank"
              rel="noreferrer"
            >
              <div className="ml-5 md:ml-10 rounded-full shadow-lg shadow-gray-400 p-6 border-2 border-[#5651e5] cursor-pointer dark:shadow-none dark:text-[#64ffda] dark:bg-transparent dark:border-2 dark:border-[#64ffda] dark:hover:bg-[#2d3c50] hover:scale-105 ease-in">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://www.facebook.com/phoon.wenhao/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="ml-5 md:ml-10 rounded-full shadow-lg shadow-gray-400 p-6 border-2 border-[#5651e5] cursor-pointer dark:shadow-none dark:text-[#64ffda] dark:bg-transparent dark:border-2 dark:border-[#64ffda] dark:hover:bg-[#2d3c50] hover:scale-105 ease-in">
                <FaFacebook />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl dark:shadow-none dark:border-2 dark:bg-[#112340] dark:border-none flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={ProfileImage}
            className="rounded-xl"
            alt="Wen Hao Profile Image"
          />
        </div>
      </div>
    </div>
  );
};

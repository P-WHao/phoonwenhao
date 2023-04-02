import React from "react";
import Link from "next/link";
import Image from "next/image";

//For Constant Text
import userData from "../constants/data";

//For YARN add
import Typed from "react-typed";

//For Import Image
import MantraImage from "../public/assets/mantraAstronaut.png";

export const Mantra = () => {
  const talkAbout = [
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
  ];

  return (
    <div
      id="mantra"
      className="bg-[#ecf0f3] text-[#1f2937] dark:bg-gray-800 w-full md:h-screen p-2 flex items-center py-20 select-none"
    >
      <div className="max-w-[1400px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="py-4 text-gray-700 dark:text-[#ffffff]">
            {userData.mantra.title}
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-[#ffffff]">
            {userData.mantra.iam}
            <span className="text-[#5651e5] dark:text-[#64ffda]">
              {userData.mantra.wenhao}
            </span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-[#ffffff] underline underline-offset-8">
            {userData.mantra.softwareEngineeringStudent}
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-[#ffffff]">
            {userData.mantra.iaminto}{" "}
            <Typed
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={talkAbout}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
            />
          </h1>
          <div className="flex items-center md:flex my-4 w-full sm:w-[80%] py-4">
            <Link href="/#aboutme">
              <button className="px-8 py-2 mt-4 bg-[#5651e5] shadow-xl shadow-gray-400 text-white hover:bg-[#9996ef] hover:scale-105 ease-in duration-300 dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#64ffda] dark:shadow-none dark:hover:bg-[#2d3c50]">
                {userData.mantra.aboutMe}
              </button>
            </Link>

            <a
              href="https://drive.google.com/file/d/1EsFwcoEgGQFIxxPnaSCiu5sH6P4tyaSj/view?usp=share_link"
              target="_blank"
            >
              <button className="ml-10 px-8 py-2 mt-4 bg-[#5651e5] shadow-xl shadow-gray-400 text-white hover:bg-[#9996ef] hover:scale-105 ease-in duration-300 dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#64ffda] dark:shadow-none dark:hover:bg-[#2d3c50]">
                {userData.mantra.resume}
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-auto m-auto  rounded-xl flex items-center justify-center p-4">
          <Image
            src={MantraImage}
            className="rounded-xl"
            alt="Wen Hao Mantra Astronaut Image"
          />
        </div>
      </div>
    </div>
  );
};

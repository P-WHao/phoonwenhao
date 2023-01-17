import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, githubUrl, demoUrl, tech }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group dark:shadow-none dark:hover:bg-gradient-to-r dark:from-[#00C5A3] dark:to-[#64FFDA] hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] select-none">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[40%] translate-x-[-30%] translate-y-[-50%]">
        <h3 className="text-2xl text-white dark:text-black tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white dark:text-black text-center">{tech}</p>
        <div className="flex items-center w-full ">
          <Link href={githubUrl}>
            <p className="text-center py-3 rounded-lg w-20 bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Github
            </p>
          </Link>
          <Link href={demoUrl}>
            <p className="ml-10 text-center py-3 w-20 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Demo
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;

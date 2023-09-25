import React from "react";

//For Import Image
import foodOrderingImg from "../public/assets/projects/foodordering.png";
import beesFarmImg from "../public/assets/projects/beesfarm.png";
import robotImg from "../public/assets/projects/robot.png";
import ezChargeImg from "../public/assets/projects/ezcharge.jpg";
import potatoSwapImg from "../public/assets/projects/potatoswap.png";
import employeeManagementImg from "../public/assets/projects/employeemanagement.png";
import travellingSalesManProblem from "../public/assets/projects/travellingsalesmanproblem.png";

//For Display Grid
import ProjectItem from "./ProjectItem";

//For Constant Text
import userData from "../constants/data";

export const Projects = () => {
  return (
    <div id="projects" className="bg-[#ecf0f3] text-[#1f2937] dark:bg-gray-800 w-full pt-20 select-none">
      <div className="max-w-[1400px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] dark:text-[#64ffda]">
          {userData.projectsdata.title}
        </p>
        <h2 className="py-4 dark:text-[#ffffff]">{userData.projectsdata.whatihavebuilt}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Food Ordering"
            backgroundImg={foodOrderingImg}
            githubUrl="https://github.com/P-WHao"
            demoUrl="/404"
            tech="HTML, CSS, Javascript"
          />
          <ProjectItem
            title="Bees Farm"
            backgroundImg={beesFarmImg}
            githubUrl="https://github.com/P-WHao"
            demoUrl="/404"
            tech="Assembly Language (ASM)"
          />
          <ProjectItem
            title="3D Robot"
            backgroundImg={robotImg}
            githubUrl="https://github.com/P-WHao"
            demoUrl="/404"
            tech="OpenGL (C++)"
          />
          <ProjectItem
            title="Ez Charge"
            backgroundImg={ezChargeImg}
            githubUrl="https://github.com/P-WHao"
            demoUrl="/404"
            tech="Java, Kotlin"
          />
          <ProjectItem
            title="Potato Swap"
            backgroundImg={potatoSwapImg}
            githubUrl="https://github.com/P-WHao"
            demoUrl="/404"
            tech="Solidity, React JS"
          />
          <ProjectItem
            title="EMP System"
            backgroundImg={employeeManagementImg}
            githubUrl="https://github.com/P-WHao"
            demoUrl="/404"
            tech="Python Flask, AWS"
          />
          <ProjectItem
            title="TSMP System"
            backgroundImg={travellingSalesManProblem}
            githubUrl="https://github.com/P-WHao"
            demoUrl="/404"
            tech="C++"
          />
        </div>
      </div>
    </div>
  );
};

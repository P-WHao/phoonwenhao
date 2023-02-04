import React from "react";

//For Constant Text
import userData from "../constants/data";

export const Experience = () => {
  return (
    <div id="experiences" className="pt-20 bg-[#ecf0f3] text-[#1f2937] dark:bg-gray-900 select-none">
      <div className="max-w-[1400px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] dark:text-[#64ffda]">
          {userData.experiencesText.title}
        </p>
        <h2 className="py-4 dark:text-[#ffffff]">
          {userData.experiencesText.mytimestones}
        </h2>
      </div>
      <div className="grid grid-cols-1  max-w-5xl mx-auto pb-20">
        {/* Experience card */}
        {userData.experiences.map((exp, idx) => (
          <>
            <ExperienceCard
              key={idx}
              title={exp.title}
              desc={exp.desc}
              desc1={exp.desc1}
              desc2={exp.desc2}
              year={exp.year}
              company={exp.company}
              companyLink={exp.companyLink}
            />
            {idx === userData.experiences.length - 1 ? null : (
              <div className="divider-container flex flex-col items-center -mt-2">
                <div className="w-4 h-4 bg-green-500 dark:bg-[#64ffda] rounded-full relative z-10">
                  <div className="w-4 h-4 bg-green-500 dark:bg-[#64ffda] rounded-full relative z-10 animate-ping"></div>
                </div>
                <div className="w-1 h-32 bg-gray-200 dark:bg-gray-500 rounded-full "></div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
  desc1,
  desc2,
}) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:border-none dark:bg-[#1F2937] z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-[#1f2937] dark:text-[#64ffda] font-bold">
        {year}
      </h1>
      <a
        href={companyLink}
        className="text-gray-500 dark:text-[#ffffff]"
      >
        <h1 className="font-semibold text-[#1f2937] text-xl dark:text-[#ffffff] incline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r dark:before:from-[#00C5A3] dark:before:to-[#64FFDA] before:from-[#5651e5] before:to-[#709dff] hover:before:w-full hover:before:opacity-100 ">
          {title}
        </h1>
      </a>
      <p className="text-gray-600 my-4 dark:text-slate-400">{company}</p>
      <p className="text-gray-600  my-2 dark:text-slate-400">{desc}</p>
      <p className="text-gray-600 my-2 dark:text-slate-400">{desc1}</p>
      <p className="text-gray-600my-2 dark:text-slate-400">{desc2}</p>
    </div>
  );
};

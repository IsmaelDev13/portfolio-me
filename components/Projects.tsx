/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import PersonalProjects from "./PersonalProjects";
import MorePersonalProjects from "./MorePersonalProjects";

export const Projects = () => {
  const [showProjects, setShowProjects] = useState(true);
  return (
    <div id="work" className="max-7xl mx-auto py-10 md:p-20">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h1 className="font-bold stroke-4 mb-4 text-2xl py-8 -ml-20  md:text-3xl uppercase leading-4 text-[#0F97B8] tracking-wide transform  relative select-none">
          What I've Done?
        </h1>
        <div className="flex max-w-3xl items-center space-x-5 lg:space-x-10">
          <div
            onClick={() => setShowProjects(true)}
            className={`${
              !showProjects
                ? "flex items-center text-lg space-x-2 transition-transform duration-200 ease-in-out text-[#0F97B8] cursor-pointer hover:bg-blue-100 px-9 py-2 rounded-full  font-sans"
                : "flex items-center text-lg space-x-2 transition-transform duration-200 ease-in-out bg-[#0F97B8] hover:shadow-blue-100 shadow-md cursor-pointer  hover:drop-shadow-xl px-9 py-2 rounded-full text-white font-sans"
            }`}
          >
            <CodeIcon className="h-6 w-6" />
            <input className="cursor-pointer" type="submit" value="Code" />
          </div>
          <div
            onClick={() => setShowProjects(false)}
            className={`${
              showProjects
                ? "flex items-center text-lg space-x-2 transition-transform duration-200 ease-in-out text-[#0F97B8] cursor-pointer hover:bg-blue-100 px-9  py-2 rounded-full  font-sans"
                : "flex items-center text-lg space-x-2 transition-transform duration-200 ease-in-out bg-[#0F97B8] hover:shadow-blue-100 shadow-md cursor-pointer   hover:drop-shadow-xl px-9 py-2 rounded-full text-white font-sans"
            }`}
          >
            <AutoFixHighIcon className="h-6 w-6" />
            <input className="cursor-pointer" type="submit" value="Design" />
          </div>
        </div>
      </div>
      <div>
        {showProjects ? <PersonalProjects /> : <MorePersonalProjects />}
      </div>
    </div>
  );
};

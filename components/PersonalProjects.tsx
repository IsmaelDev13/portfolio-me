import React from "react";

interface PersonalProjectsProps {
  title: string;
  description: string;
  tech: string;
  image: string;
}

export const PersonalProjects: React.FC<PersonalProjectsProps> = ({
  title,
  description,
  tech,
  image,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto pt-20 text-[#262f3d]">
      <div className="flex flex-col items-start lg:w-full space-y-4 px-6 pr-10">
        <h1 className="text-3xl font-serif tracking-widest text-[#262f3d] font-semibold">
          {title}
        </h1>
        <h3 className="text-lg tracking-wide font-sans">{description}</h3>
        <h3 className="p-4 bg-white rounded-md text-lg font-sans  drop-shadow-md ">
          <span className="text-[#0F97B8]  ">Tech Stack:</span> {tech}
        </h3>
        <div className="flex py-4 space-x-5">
          <input
            className="flex items-center text-lg space-x-2 transition-transform duration-200 ease-in-out bg-[#0F97B8] hover:shadow-blue-100 shadow-md cursor-pointer  hover:drop-shadow-xl px-6 py-2 rounded-full text-white font-sans uppercase"
            type="submit"
            value="Live Preview"
          />
          <input
            className="flex items-center text-lg space-x-2 transition-transform duration-200 ease-in-out text-[#0F97B8] cursor-pointer hover:bg-blue-100 px-6 py-2 rounded-full  font-sans"
            type="submit"
            value="View Code"
          />
        </div>
      </div>
      <div className="mx-4 border-4 rounded-md shadow-md my-5 shadow-[#0F97B8] border-[#0F97B8] ">
        <img loading="lazy" className=" object-contain" src={image} alt="" />
      </div>
    </div>
  );
};

import React from "react";

interface PersonalProjectsProps {
  title: string;
  description: string;
  tech: string;
  image: string;
  livePreview: string;
  code: string;
}

export const PersonalProjects2: React.FC<PersonalProjectsProps> = ({
  title,
  description,
  tech,
  image,
  livePreview,
  code,
}) => {
  return (
    <div className="hidden lg:inline-flex flex-col my-20 lg:flex-row items-center max-w-7xl mx-auto pt-20 text-[#262f3d]">
      <div className="relative mx-4 border-[8px] rounded-md shadow-sm my-5 shadow-[#0F97B8] border-[#0F97B8] ">
        <img loading="lazy" className=" object-contain" src={image} alt="" />
        <div className="absolute top-10 md:left-32 border-4 border-t-8 border-b-8 rounded shadow-md shadow-[#262f3d] border-[#262f3d]">
          <img
            loading="lazy"
            className="w-24 md:w-44 h-full  object-contain"
            src="/amazon-mobile.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-start lg:w-full space-y-4 px-6 pr-10">
        <h1 className="text-3xl font-serif tracking-widest text-[#262f3d] font-semibold">
          {title}
        </h1>
        <h3 className="text-lg tracking-wide font-sans">{description}</h3>
        <h3 className="p-4 bg-white rounded-md text-lg font-sans  drop-shadow-md ">
          <span className="text-[#0F97B8]  ">Tech Stack:</span> {tech}
        </h3>
        <div className="flex py-4 space-x-5">
          <a target="_blank" rel="noreferrer" href={livePreview}>
            <input
              className="flex items-center text-lg space-x-2 transition-transform duration-200 ease-in-out bg-[#0F97B8] hover:shadow-blue-100 shadow-md cursor-pointer  hover:drop-shadow-xl px-6 py-2 rounded-full text-white font-sans uppercase"
              type="submit"
              value="Live Preview"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={code}>
            <input
              className="flex items-center text-lg space-x-2 uppercase transition-transform duration-200 ease-in-out text-[#0F97B8] cursor-pointer hover:bg-blue-100 px-6 py-2 rounded-full  font-sans"
              type="submit"
              value="View Code"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

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
    <div className="my-20 mx-auto hidden max-w-7xl flex-col items-center pt-20 text-[#262f3d] lg:inline-flex lg:flex-row">
      <div className="relative mx-4 my-5 rounded-md border-[8px] border-[#0F97B8] shadow-sm shadow-[#0F97B8] ">
        <img loading="lazy" className=" object-contain" src={image} alt="" />
        <div className="absolute top-10 rounded border-4 border-t-8 border-b-8 border-[#262f3d] shadow-md shadow-[#262f3d] md:left-32">
          <img
            loading="lazy"
            className="h-full w-24 object-contain  md:w-44"
            src="/amazon-mobile.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 px-6 pr-10 lg:w-full">
        <h1 className="font-serif text-3xl font-semibold tracking-widest text-[#262f3d]">
          {title}
        </h1>
        <h3 className="font-sans text-lg tracking-wide">{description}</h3>
        <h3 className="rounded-md bg-white p-4 font-sans text-lg  drop-shadow-md ">
          <span className="text-[#0F97B8]  ">Tech Stack:</span> {tech}
        </h3>
        <div className="flex space-x-5 py-4">
          <a target="_blank" rel="noreferrer" href={livePreview}>
            <input
              className="flex cursor-pointer items-center space-x-2 rounded-full bg-[#0F97B8] px-6 py-2 font-sans text-lg uppercase  text-white shadow-md transition-transform duration-200 ease-in-out hover:shadow-blue-100 hover:drop-shadow-xl"
              type="submit"
              value="Live Preview"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={code}>
            <input
              className="flex cursor-pointer items-center space-x-2 rounded-full px-6 py-2 font-sans text-lg uppercase text-[#0F97B8] transition-transform duration-200 ease-in-out  hover:bg-blue-100"
              type="submit"
              value="View Code"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import MorePersonalProjects from "./MorePersonalProjects";
import { PersonalProjects } from "./PersonalProjects";
import { motion } from "framer-motion";
import { errorAnim, pageZoom } from "../util";

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
        {showProjects ? (
          <motion.div
            initial="initial"
            animate="out"
            exit="in"
            variants={pageZoom}
          >
            <PersonalProjects
              title="MetaShop"
              description=" A ecommerse with a modern UI, complete functionality including Payment Processing(Stripe API) and full backend with MongoDB."
              tech="React, MongoDB, Postman, Stripe API, TailwindCSS, Heroku, Github Actions."
              image="/metashop.jpg"
            />
            <PersonalProjects
              title="Netflix"
              description=" A compact single page application to browse and search for your
              favorite Movies and TV Shows. API provided by themoviedb.org."
              tech="React, Firebase, CSS"
              image="/metashop.jpg"
            />
            <PersonalProjects
              title="Spotify"
              description=" A Spotify - based Web Player, built with ReactJs, which uses the offical Spotify API to obtain user's details, playlists and control play state."
              tech="ReactJS, SpotifyAPI, Recoil"
              image="/metashop.jpg"
            />
          </motion.div>
        ) : (
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={errorAnim}
          >
            <MorePersonalProjects />
          </motion.div>
        )}
      </div>
    </div>
  );
};

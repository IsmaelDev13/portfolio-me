/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import MorePersonalProjects from "./MorePersonalProjects";
import { PersonalProjects } from "./PersonalProjects";
import { motion } from "framer-motion";
import { errorAnim, pageZoom } from "../util";
import { PersonalProjects2 } from "./PersonalProjects2";
import { PersonalProjects3 } from "./PersonalProjects3";
import GitHub from "@mui/icons-material/GitHub";

export const Projects = () => {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div id="work" className="max-7xl mx-auto py-10 md:py-20 ">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <h1 className="stroke-4 relative mb-4 transform select-none py-8  pl-10 text-2xl font-bold uppercase leading-4 tracking-wide  text-[#0F97B8] md:text-3xl">
          What I've Done?
        </h1>
        <div className="flex max-w-3xl items-center space-x-5 lg:space-x-10">
          <div
            onClick={() => setShowProjects(true)}
            className={`${
              !showProjects
                ? "flex cursor-pointer items-center space-x-2 rounded-full px-9 py-2 font-sans text-lg text-[#0F97B8] transition-transform duration-200 ease-in-out  hover:bg-blue-100"
                : "flex cursor-pointer items-center space-x-2 rounded-full bg-[#0F97B8] px-9 py-2 font-sans text-lg text-white  shadow-md transition-transform duration-200 ease-in-out hover:shadow-blue-100 hover:drop-shadow-xl"
            }`}
          >
            <CodeIcon className="h-6 w-6" />
            <input className="cursor-pointer" type="submit" value="Code" />
          </div>
          <div
            onClick={() => setShowProjects(false)}
            className={`${
              showProjects
                ? "flex cursor-pointer items-center space-x-2 rounded-full px-9 py-2 font-sans text-lg text-[#0F97B8] transition-transform  duration-200 ease-in-out  hover:bg-blue-100"
                : "flex cursor-pointer items-center space-x-2 rounded-full bg-[#0F97B8] px-9 py-2 font-sans text-lg text-white   shadow-md transition-transform duration-200 ease-in-out hover:shadow-blue-100 hover:drop-shadow-xl"
            }`}
          >
            <AutoFixHighIcon className="h-6 w-6" />
            <input className="cursor-pointer" type="submit" value="Design" />
          </div>
        </div>
      </div>
      <div className={`${showProjects && "-mt-20"}`}>
        {showProjects ? (
          <motion.div
            initial="initial"
            animate="out"
            exit="in"
            variants={pageZoom}
          >
            <>
              <PersonalProjects
                title="MetaShop"
                description=" A ecommerce with a modern UI, complete functionality including Payment Processing(Stripe API) and full backend with MongoDB."
                tech="React (NextJS), Typescript, MongoDB, Postman, Stripe API, TailwindCSS, Heroku, Github Actions."
                image="/metashop.jpg"
                imagePhone="/meta-mobile.jpg"
                livePreview="https://meta-shop.herokuapp.com/"
                code="https://github.com/IsmaelDev13/FullStack-MetaShop"
              />

              <PersonalProjects2
                title="Amazon-clone"
                description="Amazon redesign with a modern UI, complete E-Commerce functionality including Payment Processing (Stripe API) and User Authentication (Firebase)."
                image="/amazon.jpg"
                tech="React, Redux, Stripe API, Firebase."
                livePreview="https://amazon-clone-qo3yy1pne-ismaeldev13.vercel.app/"
                code="https://github.com/IsmaelDev13/amazon--clone"
              />
              <PersonalProjects3
                title="Amazon-clone"
                description="Amazon redesign with a modern UI, complete E-Commerce functionality including Payment Processing (Stripe API) and User Authentication (Firebase)."
                image="/amazon.jpg"
                tech="React, Stripe API, Firebase."
                livePreview="https://amazon-clone-qo3yy1pne-ismaeldev13.vercel.app/"
                code="https://github.com/IsmaelDev13/amazon--clone"
              />

              <PersonalProjects
                title="Spotify"
                description=" A Spotify - based Web Player, built with ReactJs, which uses the official Spotify API to obtain user's details, playlists and control play state."
                tech="NextJS, SpotifyAPI (remote API), Recoil, middleware."
                image="/spotify.jpg"
                imagePhone="spotify-mobile.jpg"
                livePreview="https://spotify2-0-rouge.vercel.app/"
                code="https://github.com/IsmaelDev13/spotify2.0"
              />
            </>
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
      <a
        href="https://github.com/IsmaelDev13"
        target="_blank"
        rel="noreferrer"
        className="hidden text-center  md:mx-auto md:block md:max-w-lg"
      >
        <button className="transform cursor-pointer rounded-full bg-black px-6 py-2 uppercase text-white shadow-md transition duration-200 ease-out hover:shadow-2xl ">
          <GitHub className="mr-2 h-5 w-5" />
          View More
        </button>
      </a>
    </div>
  );
};

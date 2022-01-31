/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Graph, Notes, Web } from "../heroComponents";
// eslint-disable-next-line @typescript-eslint/no-var-requires
// import audio from "../audio/src_audio_yesterday.mp3";

export const Banner = () => {
  const [playAudio, setPlayAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | any>(null);

  useEffect(() => {
    if (playAudio) {
      audioRef.current.play();
    }
  }, [playAudio]);

  const toggleAudio = () => {
    if (!playAudio) {
      setPlayAudio(true);
      setTimeout(() => {
        setPlayAudio(false);
      }, 2500);
    } else {
      setPlayAudio(false);
    }
  };
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto mt-28 rounded-md shadow-lg shadow-blue-100 bg-white md:p-20"
    >
      {/* Who Am I */}
      <div className="flex flex-col  ">
        <h1 className="font-bold pl-8 pt-20 stroke-4 mb-4 text-2xl  md:text-3xl uppercase leading-4 text-[#0F97B8] tracking-widest transform scale-y-90 relative select-none">
          Who Am I?
        </h1>
        <div className="md:flex md:flex-row items-center">
          <img
            loading="lazy"
            className="h-96 my-10 mx-auto w-full object-contain"
            src="/tanjiro.jpg"
            alt=""
          />
          <div className="flex flex-col space-y-5 p-6">
            <h1 className="text-[#0F97B8] font-black text-2xl uppercase tracking-tight text-opacity-70">
              Hello. THIS IS
              <br />
              <span className="font-black stroke-4 mb-4 text-3xl drop-shadow-sm antialiased md:text-4xl uppercase leading-4 text-black  tracking-widest transform scale-y-90 relative select-none">
                Ismael Diaz
              </span>
            </h1>
            <div className="flex items-center">
              <span className="flex text-gray-400 px-2">/ҽɾաìղ ʂʍìէհ/</span>
              <audio ref={audioRef} src={require("../audio/erwin.mp3")}>
                Erwin
              </audio>
              <img
                onClick={toggleAudio}
                className={`${
                  playAudio
                    ? "h-6 animate-bounce  transition-all transform duration-200 ease-out"
                    : "h-5 active:scale-105 transition-all transform duration-200 ease-out cursor-pointer"
                }`}
                src="/speaker.svg"
                alt=""
              />
            </div>
            <p className="font-sans tracking-wide mb-12">
              <span className="text-[#0F97B8] ">defn</span>. a male, who once
              happened to click on 'View Source' of a webpage with genuine
              curiosity, and now is a <b>Front-End Developer</b> and{" "}
              <b>UI/UX Designer</b>{" "}
              <a href="#work" className="text-[#0F97B8] text-sm pl-1 ">
                [more]
              </a>
            </p>
            <Link href="#contact">
              <button className="px-4 py-3 w-1/2 mx-auto md:w-1/4 md:mx-0 text-[#0F97B8] bg-[#EFF7FA] rounded-full font-medium">
                Say "Hi"
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* What Do I Do */}
      <h1 className="font-bold pt-40 stroke-4 mb-4 text-2xl pl-8  md:text-3xl uppercase leading-4 text-[#0F97B8] tracking-widest transform  relative select-none pb-20">
        Who Do I do?
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 px-5 pb-10 select-none">
        <div className=" transition transform duration-200 ease-in-out rounded-md hover:scale-105 hover:bg-blue-50 px-5 md:border-2 border-blue-50 py-4 md:shadow">
          <Web className="h-48 w-full object-contain" />{" "}
          <h4 className="text-2xl font-bold">Web Design and Development</h4>
          <p className="font-sans tracking-wide whitespace-wrap py-2">
            Starting from single page landing sites to e-commerce sites, I help
            you visualize what you think, in the form of full-fledged websites
            and design prototypes.
          </p>
        </div>

        <div className=" transition transform duration-200 ease-in-out rounded-md hover:scale-105 hover:bg-blue-50 px-5 md:border-2 border-blue-50 py-4 md:shadow">
          <Graph className="h-48 w-full object-contain" />{" "}
          <h4 className="text-2xl font-bold">
            {" "}
            Targeted, Results Providing Sites
          </h4>
          <p className="font-sans tracking-wide whitespace-wrap py-2">
            With years of experience and extensive market research, the sites I
            build are targeted and user-oriented websites, that'll increase your
            overall conversion rate.
          </p>
        </div>
        <div className=" transition transform duration-200 ease-in-out rounded-md hover:scale-105 hover:bg-blue-50 px-5 md:border-2 border-blue-50 py-4 md:shadow">
          <Notes className="h-48 w-full object-contain " />{" "}
          <h4 className="text-2xl font-bold">
            Copywriting and Online Strategies
          </h4>
          <p className="font-sans tracking-wide whitespace-wrap py-2">
            A good copy does what thousands of better designs can't. That, along
            with other strategies like SEO, AdSense, Analytics etc. can take you
            far - in the long run.
          </p>
        </div>
      </div>
    </div>
  );
};

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
      className="mx-auto mt-28 max-w-7xl rounded-md bg-white shadow-lg shadow-blue-100 md:p-20"
    >
      {/* Who Am I */}
      <div className="flex flex-col  ">
        <h1 className="stroke-4 relative mb-4 scale-y-90 transform select-none pl-8 pt-20 text-2xl font-bold uppercase leading-4 tracking-widest text-[#0F97B8] md:text-3xl">
          Who Am I?
        </h1>
        <div className="items-center md:flex md:flex-row">
          <div className="relative w-full">
            <img
              loading="lazy"
              className=" relative my-10 mx-auto h-96 w-full rounded-full object-contain"
              src="/nobgsh.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-5 p-6">
            <h1 className="text-2xl font-black uppercase tracking-tight text-[#0F97B8] text-opacity-70">
              Hello. THIS IS
              <br />
              <span className="stroke-4 relative mb-4 scale-y-90 transform select-none text-3xl font-black uppercase leading-4  tracking-widest text-black antialiased drop-shadow-sm md:text-4xl">
                Ismael Diaz
              </span>
            </h1>
            <div className="flex items-center">
              <span className="flex px-2 text-gray-400">/ҽɾաìղ ʂʍìէհ/</span>
              <audio ref={audioRef} src={require("../audio/erwin.mp3")}>
                Erwin
              </audio>
              <img
                onClick={toggleAudio}
                className={`${
                  playAudio
                    ? "h-6 transform  animate-bounce transition-all duration-200 ease-out"
                    : "h-5 transform cursor-pointer transition-all duration-200 ease-out active:scale-105"
                }`}
                src="/speaker.svg"
                alt=""
              />
            </div>
            <p className="mb-12 font-sans tracking-wide">
              <span className="text-[#0F97B8] ">defn</span>. a male, who once
              happened to click on 'View Source' of a webpage with genuine
              curiosity, and now is a <b>Front-End Developer</b> and{" "}
              <b>UI/UX Designer</b>{" "}
              <a href="#work" className="pl-1 text-sm text-[#0F97B8] ">
                [more]
              </a>
            </p>
            <Link href="#contact">
              <button className="mx-auto flex w-1/2 transform items-center rounded-full bg-[#EFF7FA] px-6  py-3 font-medium text-[#0F97B8] transition duration-200 ease-out hover:shadow-md md:mx-0 md:w-1/4">
                <img
                  className="pr-2"
                  src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                  width="50px"
                />
                Say <span className="pr-2 ">"Hi"</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* What Do I Do */}
      <h1 className="stroke-4 relative mb-4 transform select-none pt-40  pl-8 pb-20 text-2xl font-bold uppercase leading-4  tracking-widest text-[#0F97B8] md:text-3xl">
        Who Do I do?
      </h1>

      <div className="flex select-none flex-col items-center justify-evenly gap-10 px-5 pb-10 lg:flex-row">
        <div className=" transform rounded-md border-blue-50 px-5 py-4 transition duration-200 ease-in-out hover:scale-105 hover:bg-blue-50 md:border-2 md:shadow">
          <Web className="h-48 w-full object-contain" />{" "}
          <h4 className="text-2xl font-bold">Web Design and Development</h4>
          <p className="whitespace-wrap py-2 font-sans tracking-wide">
            Starting from single page landing sites to e-commerce sites, I help
            you visualize what you think, in the form of full-fledged websites
            and design prototypes.
          </p>
        </div>

        <div className=" transform rounded-md border-blue-50 px-5 py-4 transition duration-200 ease-in-out hover:scale-105 hover:bg-blue-50 md:border-2 md:shadow">
          <Graph className="h-48 w-full object-contain" />{" "}
          <h4 className="text-2xl font-bold">
            {" "}
            Targeted, Results Providing Sites
          </h4>
          <p className="whitespace-wrap py-2 font-sans tracking-wide">
            With years of experience and extensive market research, the sites I
            build are targeted and user-oriented websites, that'll increase your
            overall conversion rate.
          </p>
        </div>
        <div className=" transform rounded-md border-blue-50 px-5 py-4 transition duration-200 ease-in-out hover:scale-105 hover:bg-blue-50 md:border-2 md:shadow">
          <Notes className="h-48 w-full object-contain " />{" "}
          <h4 className="text-2xl font-bold">
            Copywriting and Online Strategies
          </h4>
          <p className="whitespace-wrap py-2 font-sans tracking-wide">
            A good copy does what thousands of better designs can't. That, along
            with other strategies like SEO, AdSense, Analytics etc. can take you
            far - in the long run.
          </p>
        </div>
      </div>
    </div>
  );
};

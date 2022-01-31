/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import SvgHero from "../heroComponents/Hero";
import PaperIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import { pageZoom } from "../util";

export const Hero = () => {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (inputRef.current.value) {
      fetch("/api/new-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputRef.current.value,
        }),
      })
        .then(() => {
          setSubmitted(true);
          setEmail("");
          setTimeout(() => {
            setSubmitted(false);
          }, 7000);
        })
        .catch((err) => {
          setSubmitted(false);
          console.log(err);
        });
    }
  };
  return (
    <section className="mt-28 flex items-start justify-evenly md:mx-auto md:max-w-7xl">
      <div className="flex flex-col items-start">
        <span className="stroke-4 relative mb-4 scale-y-90 transform  select-none px-6 text-2xl font-black uppercase leading-4 tracking-widest text-[#0F97B8] md:text-4xl">
          Expand. Evolve. <i></i>
        </span>
        <h1 className="z-1 relative mb-20 w-fit transform select-none bg-clip-text px-5  font-serif text-5xl font-bold text-[#262f3d] drop-shadow-lg transition-all duration-200 ease-in-out md:text-6xl ">
          Give your business a <br /> boost, with websites
          <br /> that <span>make sense!</span>
          {/* <img
            className="hidden md:inline absolute h-40 w-full -z-1 object-contain fill-yellow-500 bottom-0 left-20 md:right-0"
            src="/underline2.svg"
            alt=""
          /> */}
        </h1>
        {!submitted ? (
          <form onSubmit={sendEmail} className="ml-6 flex items-center ">
            <label>
              <span className="text-[#0F97B8] sm:inline  md:text-lg">
                Know More about my process...
              </span>
              <div className="flex items-center">
                <input
                  required
                  ref={inputRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="h-15 w-full rounded-l-md rounded-r border border-[#0F97B8] py-4 px-3 text-lg outline-none focus:ring-1 focus:ring-[#0F97B8] md:mb-7"
                  placeholder="Type your Email Address"
                />
                <PaperIcon
                  onClick={sendEmail}
                  className="h-14 w-14 transform rounded-r-lg bg-[#0F97B8] p-3 text-white transition-all duration-200 ease-in-out active:scale-105"
                />
              </div>
            </label>

            <input
              type="submit"
              className="h-15 hidden  transform cursor-pointer rounded-r-md bg-[#0F97B8] py-4 px-3  text-lg uppercase text-white  shadow-md transition-all duration-150 
            ease-in-out hover:shadow active:scale-95 md:inline"
              value="Sure Why Not!"
            />
          </form>
        ) : (
          <motion.h1
            initial="initial"
            animate="in"
            exit="out"
            variants={pageZoom}
            className="ml-6 border p-4 text-center font-serif  text-xl text-[#0F97B8] shadow "
          >
            I'll be in Contact with You Soon!
          </motion.h1>
        )}
      </div>

      <div className="hidden md:inline-flex ">
        <SvgHero
          width={360}
          height={360}
          className="transition-transform duration-200 ease-in-out hover:stroke-[#0F97B8] hover:stroke-2"
        />
      </div>
    </section>
  );
};

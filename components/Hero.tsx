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
    <section className="flex items-start justify-evenly md:max-w-7xl md:mx-auto mt-28">
      <div className="flex flex-col items-start">
        <span className="font-black stroke-4 px-6 mb-4 text-2xl  md:text-4xl uppercase leading-4 text-[#0F97B8] tracking-widest transform scale-y-90 relative select-none">
          Expand. Evolve. <i></i>
        </span>
        <h1 className="select-none font-bold transition-all transfrom duration-200 ease-in-out drop-shadow-lg text-5xl  px-5 md:text-6xl font-serif z-1 relative w-fit mb-20 text-[#262f3d] bg-clip-text ">
          Give your business a <br /> boost, with websites
          <br /> that <span>make sense!</span>
          {/* <img
            className="hidden md:inline absolute h-40 w-full -z-1 object-contain fill-yellow-500 bottom-0 left-20 md:right-0"
            src="/underline2.svg"
            alt=""
          /> */}
        </h1>
        {!submitted ? (
          <form onSubmit={sendEmail} className="flex items-center ml-6 ">
            <label>
              <span className="md:text-lg md:inline  text-[#0F97B8]">
                Know More about my process...
              </span>
              <div className="flex items-center">
                <input
                  required
                  ref={inputRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="border h-15 md:mb-7 border-[#0F97B8] rounded-l-md rounded-r text-lg py-4 px-3 w-full outline-none focus:ring-[#0F97B8] focus:ring-1"
                  placeholder="Type your Email Address"
                />
                <span onClick={sendEmail}>
                  <PaperIcon className="h-14 md:hidden transition-all transform duration-200 ease-in-out w-14 active:scale-105  bg-[#0F97B8] text-white p-3 rounded-r-lg " />
                </span>
              </div>
            </label>

            <input
              type="submit"
              className="bg-[#0F97B8] h-15  hidden active:scale-95 transition-all transform duration-150 ease-in-out  md:inline uppercase text-lg  text-white py-4 px-3 
            rounded-r-md hover:shadow cursor-pointer shadow-md"
              value="Sure Why Not!"
            />
          </form>
        ) : (
          <motion.h1
            initial="initial"
            animate="in"
            exit="out"
            variants={pageZoom}
            className="font-serif ml-6 p-4 text-center text-xl  border text-[#0F97B8] shadow "
          >
            I'll be in Contact with You Soon!
          </motion.h1>
        )}
      </div>

      <div className="hidden md:inline-flex ">
        <SvgHero
          width={360}
          height={360}
          className="hover:stroke-2 hover:stroke-[#0F97B8] transition-transform duration-200 ease-in-out"
        />
      </div>
    </section>
  );
};

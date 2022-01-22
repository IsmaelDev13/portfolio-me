/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import SvgHero from "../heroComponents/Hero";

export const Hero = () => {
  const [email, setEmail] = useState<string>("");
  const inputRef = useRef<any>(null);
  console.log(inputRef.current.value);

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
          setEmail("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <section className="flex items-center justify-evenly md:max-w-6xl md:mx-auto mt-28">
      <div className="flex flex-col">
        <span className="font-black stroke-4 px-6 mb-4 text-2xl  md:text-4xl uppercase leading-4 text-[#0F97B8] tracking-widest transform scale-y-90 relative select-none">
          Expand. Evolve. <i></i>
        </span>
        <h1 className="select-none font-bold transition-all transfrom duration-200 ease-in-out drop-shadow-lg text-5xl  px-5 md:text-6xl font-['Montserrat'] z-1 relative w-fit mb-20 text-[#262f3d] bg-clip-text ">
          Give your business a <br /> boost, with websites
          <br /> that <span>make sense!</span>
          <img
            className="hidden md:inline absolute h-40 w-full -z-1 object-contain fill-yellow-500 bottom-0 left-20 md:right-0"
            src="/underline2.svg"
            alt=""
          />
        </h1>
      </div>

      <div className="hidden md:inline-flex ">
        <SvgHero
          width={300}
          height={300}
          className="hover:stroke-2 hover:stroke-[#0F97B8] transition-transform duration-200 ease-in-out"
        />
      </div>
      <form onSubmit={sendEmail}>
        <label>
          <span className="hidden md:inline text-gray-700">
            Know More about my process
          </span>
          <input
            ref={inputRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="shadow border border-[#0F97B8] rounded text-lg py-4 px-3 form-textarea mt-1 block w-full outline-none"
            placeholder="Type your Email Address"
          />
        </label>
        <input
          type="submit"
          className="bg-[#0F97B8] text-white p-2 hover:shadow cursor-pointer"
          value="Sure Why Not"
        />
      </form>
    </section>
  );
};

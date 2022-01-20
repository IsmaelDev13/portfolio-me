import React from "react";

export const Hero = () => {
  return (
    <section className="flex items-center justify-evenly max-w-6xl mx-auto mt-28">
      <div className="flex flex-col">
        <span className="font-black stroke-4 mb-4 text-2xl  md:text-4xl uppercase leading-4 text-[#0F97B8] tracking-widest transform scale-y-90 relative select-none">
          Expand. Evolve. <i></i>
        </span>
        <h1 className="select-none font-bold transition-all transfrom duration-200 ease-in-out drop-shadow-lg  text-6xl font-['Montserrat'] z-1 relative w-fit mb-20 text-[#0F97B8] bg-clip-text ">
          Give your business a <br /> boost, with websites
          <br /> that <span>make sense!</span>
          <img
            className="absolute h-40 w-full -z-1 object-contain fill-yellow-500 bottom-0 left-20 md:right-0"
            src="/underline2.svg"
            alt=""
          />
          <h1 className="select-none absolute text-white -top-1 -right-1 font-bold transition-all transfrom duration-200 ease-in-out drop-shadow-lg text-6xl font-['Montserrat'] z-1  w-fit mb-20  bg-clip-text box-content decoration-2  ">
            Give your business a <br /> boost, with websites
            <br /> that <span>make sense!</span>
          </h1>
        </h1>
      </div>

      <div className="hidden md:inline-flex ">
        <img
          className="animate-bounce w-96 h-96 fill-current"
          src="/hero.svg"
          alt=""
        />
      </div>
    </section>
  );
};

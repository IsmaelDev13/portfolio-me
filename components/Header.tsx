import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between  p-5 md:max-w-7xl mx-auto font-['Work Sans'] text-[18px]">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-20 md:w-40 object-contain "
            src="https://www.apemockups.com/wp-content/uploads/edd/2017/09/medium-logo-black-transparent.png"
            alt=""
          />
        </Link>
      </div>
      <div className="hidden md:inline-flex items-center space-x-10 ">
        <Link href="#about">
          <h3 className="hover:text-[#0F97B8] cursor-pointer transition-all transform duration-200 ease-linear divide-x-2 hover:border-separate hover:border-cyan-400 border-b-2 p-2 hover:drop-shadow ">
            About
          </h3>
        </Link>
        <Link href="#work">
          <h3 className="hover:text-[#0F97B8] cursor-pointer transition-all transform duration-200 ease-linear divide-x-2 hover:border-separate border-b-2 hover:border-cyan-400 hover:drop-shadow   p-2">
            Work
          </h3>
        </Link>
        <Link href="#contact">
          <h3 className="px-4 py-1 rounded-full  bg-[#0F97B8] text-white cursor-pointer shadow-cyan-400 shadow-sm hover:shadow-md transition-all transform duration-200 ease-in-out">
            Contact
          </h3>
        </Link>
      </div>
    </header>
    // <header className="flex justify-between p-5 max-w-7xl mx-auto">
    //   <div className="flex items-center space-x-5">
    //     <Link href="/">
    //       <img
    //         className="w-44 object-contain cursor-pointer"
    //         src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
    //         alt=""
    //       />
    //     </Link>
    //     <div className="hidden md:inline-flex items-center space-x-5">
    //       <h3>About</h3>
    //       <h3>Contact</h3>
    //       <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
    //         Follow
    //       </h3>
    //     </div>
    //   </div>
    //   <div className="flex items-center space-x-5 text-green-600">
    //     <h3>Sign In</h3>
    //     <h3 className="border px-4 py-1 rounded-full border-green-600">
    //       Get Started
    //     </h3>
    //   </div>
    // </header>
  );
};

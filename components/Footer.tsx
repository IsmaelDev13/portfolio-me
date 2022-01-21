import React from "react";
import Github from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/FacebookOutlined";
import LinkedIn from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="text-[#0F97B8] flex flex-col items-center">
        <div className="flex flex-col items-start">
          <h1 className="font-bold stroke-4  text-2xl  md:text-3xl uppercase leading-4 text-[#0F97B8] tracking-wide transform  relative select-none">
            Ismael Diaz
          </h1>
          <h2 className="text-lg">Front-End Developer</h2>
        </div>
        <div className="flex items-center space-x-5 mt-5">
          <a
            className="pb-2 rounded-full border bg-white border-blue-50"
            target="_blank"
            href="https://github.com/IsmaelDev13"
            rel="noreferrer"
          >
            <Github className="h-6 w-6 " />
          </a>
          <a
            className="pb-2 rounded-full border bg-white border-blue-50"
            target="_blank"
            href="https://www.facebook.com/people/Ismael-Diaz/100070763821353/"
            rel="noreferrer"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            className="pb-2 rounded-full border bg-white border-blue-50"
            target="_blank"
            href="https://www.linkedin.com/in/ismaeldev13/"
            rel="noreferrer"
          >
            <LinkedIn className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="flex flex-col  pt-5 items-center text-lg md:items-end text-[#0F97B8] space-y-1 font-['Work Sans'] tracking-wide ">
        <p>Malaga, Spain</p>
        <p>ismaeldev13@gmail.com</p>
        <p>Copyright &copy;2022 </p>
      </div>
    </div>
  );
}

export default Footer;

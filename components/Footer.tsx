import React from "react";
import Github from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/FacebookOutlined";
import LinkedIn from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between py-20 md:flex-row">
      <div className="flex flex-col items-center text-[#0F97B8]">
        <div className="flex flex-col items-start">
          <h1 className="stroke-4 relative  transform  select-none text-2xl font-bold uppercase leading-4 tracking-wide  text-[#0F97B8] md:text-3xl">
            Ismael Diaz
          </h1>
          <h2 className="text-lg">Front-End Developer</h2>
        </div>
        <div className="mt-5 flex items-center space-x-5">
          <a
            className="rounded-full border border-blue-50 bg-white pb-2"
            target="_blank"
            href="https://github.com/IsmaelDev13"
            rel="noreferrer"
          >
            <Github className="h-6 w-6 " />
          </a>
          <a
            className="rounded-full border border-blue-50 bg-white pb-2"
            target="_blank"
            href="https://www.facebook.com/people/Ismael-Diaz/100070763821353/"
            rel="noreferrer"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            className="rounded-full border border-blue-50 bg-white pb-2"
            target="_blank"
            href="https://www.linkedin.com/in/ismaeldev13/"
            rel="noreferrer"
          >
            <LinkedIn className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="font-['Work Sans']  flex flex-col items-center space-y-1 pt-5 text-lg tracking-wide text-[#0F97B8] md:items-end ">
        <p>Malaga, Spain</p>
        <p>ismaeldev13@gmail.com</p>
        <p>Copyright &copy;2022 </p>
      </div>
    </div>
  );
}

export default Footer;

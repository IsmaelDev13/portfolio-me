import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useRouter } from "next/router";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const about = () => {
    router.push("#about");
  };
  const work = () => {
    router.push("#work");
  };
  const contact = () => {
    router.push("#contact");
  };
  const actions = [
    { icon: <PersonIcon />, name: "About", func: about },
    { icon: <WorkIcon />, name: "Work", func: work },
    { icon: <ContactIcon />, name: "Contact", func: contact },
  ];
  return (
    <header className="font-['Work Sans'] mx-auto  flex items-center justify-between p-5 text-[18px] md:max-w-7xl">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="h-32 w-full object-contain md:h-40 "
            src="/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="hidden items-center space-x-10 md:inline-flex ">
        <Link href="#about">
          <h3 className="transform cursor-pointer divide-x-2 border-b-2 p-2 transition-all duration-200 ease-linear hover:border-separate hover:border-cyan-400 hover:text-[#0F97B8] hover:drop-shadow ">
            About
          </h3>
        </Link>
        <Link href="#work">
          <h3 className="transform cursor-pointer divide-x-2 border-b-2 p-2 transition-all duration-200 ease-linear hover:border-separate hover:border-cyan-400 hover:text-[#0F97B8]   hover:drop-shadow">
            Work
          </h3>
        </Link>
        <Link href="#contact">
          <h3 className="transform cursor-pointer rounded-full  bg-[#0F97B8] px-4 py-1 text-white shadow-sm shadow-cyan-400 transition-all duration-200 ease-in-out hover:shadow-md">
            Contact
          </h3>
        </Link>
      </div>
      <SpeedDial
        ariaLabel="SpeedDial"
        className="fixed top-10 right-4 md:hidden "
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        icon={
          <img
            src="/android-chrome-512x512.png "
            className="h-[56px] w-full rounded-full"
          />
        }
      >
        {actions.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={true}
          />
        ))}
      </SpeedDial>
    </header>
  );
};

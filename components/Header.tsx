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
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
    //   return () =>
    //     window.innerWidth <= 600 ? setWindowSize(true) : setWindowSize(false);
  }, []);
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
    <header className="flex items-center justify-between  p-5 md:max-w-7xl mx-auto font-['Work Sans'] text-[18px]">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="h-32 md:h-40 w-full object-contain "
            src="/logo.png"
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
      <SpeedDial
        ariaLabel="SpeedDial"
        className="sm:hidden fixed top-10 right-4 "
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        icon={
          <img
            src="/android-chrome-512x512.png "
            className="rounded-full w-full h-[56px]"
          />
        }
      >
        {actions.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={windowSize}
          />
        ))}
      </SpeedDial>
    </header>
  );
};

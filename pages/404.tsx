import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";

function Error() {
  return (
    <div className="h-screen">
      <div className="mx-auto max-w-7xl text-center">
        <img src="/astronaut.gif" alt="" />
        <Link href="/">
          <button className="transform rounded-full border-b-2 bg-[#0F97B8] px-4 py-2 text-center uppercase text-white shadow transition duration-200 ease-out hover:scale-105 hover:shadow-lg">
            Go back Home
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;

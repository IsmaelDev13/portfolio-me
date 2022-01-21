import React from "react";

function MorePersonalProjects() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="border-4 opacity-80 hover:opacity-100 rounded drop-shadow-md cursor-pointer border-white transition-all transform duration-200 ease-in-out hover:scale-105 ">
          <img
            className="h-50  w-full object-cover"
            src="/airbnb1.jpg"
            alt=""
          />
        </div>
        <div className="border-4 opacity-80 hover:opacity-100 rounded drop-shadow-md cursor-pointer border-white transition-all transform duration-200 ease-in-out hover:scale-105 ">
          <img
            className="h-50  w-full object-cover"
            src="/airbnb1.jpg"
            alt=""
          />
        </div>
        <div className="border-4 opacity-80 hover:opacity-100 rounded drop-shadow-md cursor-pointer border-white transition-all transform duration-200 ease-in-out hover:scale-105 ">
          <img
            className="h-50  w-full object-cover"
            src="/airbnb1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MorePersonalProjects;

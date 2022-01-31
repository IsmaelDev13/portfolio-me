import React from "react";
import { projectsImages } from "../projectsImages";

function MorePersonalProjects() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsImages.map(
          ({
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
            img12,
          }) => (
            <div
              key={img1}
              className="border-4 opacity-80 hover:opacity-100 rounded drop-shadow-md cursor-pointer border-white transition-all transform duration-200 ease-in-out hover:scale-110 bg-white "
            >
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img1}
                alt={img1}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img2}
                alt={img2}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img3}
                alt={img3}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img4}
                alt={img4}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img5}
                alt={img5}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img6}
                alt={img6}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img7}
                alt={img7}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img8}
                alt={img8}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img9}
                alt={img9}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img10}
                alt={img10}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img11}
                alt={img11}
              />{" "}
              <img
                loading="lazy"
                className="h-50 w-full object-contain"
                src={img12}
                alt={img12}
              />{" "}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MorePersonalProjects;

import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen  bg-[#020a13]  text-gray-300 "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-5xl font-bold my-4  tracking-wide  ">Skills</p>
          <p> These are the technologies I've worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3  gap-8 text-center py-8 px-2 sm:px-6">
          <div className="shadow shadow-white py-4 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <small className="my-4">HTML</small>
          </div>
          <div className="shadow  shadow-white  py-4 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <small className="my-1">CSS</small>
          </div>
          <div className="shadow shadow-white  py-4 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <small className="my-1">JAVASCRIPT</small>
          </div>
          <div className="shadow shadow-white  py-4 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <small className="my-1">REACT</small>
          </div>
          <div className="shadow shadow-white  py-4 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <small className="my-1">NODE JS</small>
          </div>
          <div className="shadow shadow-white  py-4 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <small className="my-1">FIREBASE</small>
          </div>
          <div className="shadow shadow-white  py-4 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <small className="my-1">TAILWIND</small>
          </div>
          <div className="shadow shadow-white  py-4 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <small className="my-1">GITHUB</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

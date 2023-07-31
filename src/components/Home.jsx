import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-[100%] h-screen  bg-[#020a13]  ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#c6c6c6] ">
        <p className="text-[#e1e1e1] text-xl font-bold">Hi,</p>
        <h1 className="'text-4xl sm:text-7xl font-bold text-[#e1e1e1]">
          I'm kv Vasu yadav
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#e1e1e1]">
          Web Developer
        </h2>
        <p className="text-[#e1e1e1] font-medium py-4 max-w-[700px] tracking-widest leading-7">
          I have a serious passion for UI effects, responsive designs, creating
          intuitive and dynamic user experiences.
        </p>
        <p className=" text-[#e1e1e1]   font-medium py-4 max-w-[700px] tracking-widest leading-8">
          Working with my hands to make magic happen on the internet.
          <br /> have a look at my
          <Link
            to="work"
            smooth={true}
            duration={500}
            className=" bg-slate-800 hover:bg-[#6366f1] font-medium
            rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 focus:outline-none cursor-pointer "
          >
            projects
          </Link>
          ,
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className=" bg-slate-800 hover:bg-[#6366f1] font-medium
            rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 focus:outline-none cursor-pointer "
          >
            Contact Me
          </Link>
          ,
          <Link
            to=""
            smooth={true}
            duration={500}
            className=" bg-slate-800 hover:bg-[#6366f1] font-medium
            rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 focus:outline-none cursor-pointer "
          >
            Resumé
          </Link>
          or send me an email at{" "}
          <a
            href="mailto:waasukv@gmail.com.com"
            className=" bg-slate-800 hover:bg-[#6366f1] font-medium
            rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 focus:outline-none "
          >
            waasukv@gmail.com
          </a>
        </p>
        <div>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="font-medium
           text-sm px-5 py-0.5 mr-2 my-2 cursor-pointer "
          >
            See more About Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="animate-bounce mx-12 my-4 w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

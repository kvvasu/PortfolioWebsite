import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#020a13]   ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  gap-4">
          <div className="sm:text-start mb-4 pl-3">
            <p className="text-5xl font-bold text-[#e1e1e1]">About me.</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 text-[#e1e1e1]">
          <div>
            <p className="tracking-widest mt-16 leading-8 text-xl  ">
              I'm a curiosity-driven Front-End Developer with design chops.
              <br />I am passionate about bringing both the technical and visual
              aspects of digital products to life.
              <br /> User experience, writing clean and accessible code matters
              to me, and I sweat for the detail.
            </p>
            <p className="my-3 tracking-widest leading-8 text-xl ">
              I have an MA in English literature from osmania University,and a
              BSC degree in Mathematics, I'm happiest when I'm creating,
              learning, exploring, reading and thinking about how to make things
              better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

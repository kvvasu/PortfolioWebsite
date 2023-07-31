import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#020a13]">
      <footer className="p-4  md:flex md:items-center md:justify-between md:p-6 ">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2023{" "}
          <a href="" className="hover:underline">
            kvvasu™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500  sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

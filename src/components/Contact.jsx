import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#020a13] flex justify-center items-center "
    >
      <form
        method="POST"
        action="https://getform.io/f/4362cfc5-8345-43e0-be79-0f166e315d03"
        className="flex flex-col  w-full md:w-1/2"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold my-2 mx-2 text-[#e1e1e1]">
            Contact.
          </p>
          <p className="text-[#e1e1e1] py-2 px-3">
            Submit the below form or shoot me an email at Waasukv@gmail.com
          </p>
        </div>
        <input
          className="p-3 mb-6 bg-transparent border-2 rounded-md text-[#e1e1e1] focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="p-3 mb-6 bg-transparent border-2 rounded-md text-[#e1e1e1]  focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-3 bg-transparent border-2 rounded-md text-[#e1e1e1] focus:outline-none"
          name="message"
          placeholder="Message"
          rows="8"
        ></textarea>
        <button className="text-black bg-slate-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:bg-[#6366f1] duration-300">
          Contact me
        </button>
      </form>
    </div>
  );
};

export default Contact;

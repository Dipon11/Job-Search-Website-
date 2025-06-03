import React from "react";
import { IoIosMail } from "react-icons/io";
import { MdOutlineVerified } from "react-icons/md";
import img from "../assets/clouds.png";

const Newsletter = () => {
  return (
    <section className="mb-30 bg-gradient-to-r from-[rgb(71,100,207)]  to-[rgb(66,106,236)] text-white py-14 px-4 sm:px-8 max-w-screen lg:max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden relative">

      <img
        src={img}
        alt="Clouds"
        className="absolute bottom-0 right-0 w-24 sm:w-40 md:w-52 opacity-20 pointer-events-none hidden sm:block"
      />

      <div className="w-full max-w-screen sm:max-w-xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-6">
          New Things Will Always <br className="hidden sm:block" /> Update Regularly
        </h2>

        {/* Email Form */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 bg-white p-2 rounded-2xl shadow-md">
          <div className="flex items-center bg-white text-gray-700 rounded-lg w-full sm:w-2/3 px-3">
            <IoIosMail className="text-blue-600 text-xl mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 text-sm outline-none"
            />
          </div>

          <button className="flex items-center gap-2 font-medium bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition text-sm">
            <MdOutlineVerified className="text-lg" />
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

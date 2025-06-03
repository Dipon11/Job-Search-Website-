import React from 'react';
import Navbar from './Navbar';
import bg from '../assets/bg.jpg'
import { IoBriefcaseOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div>
     <section className="px-8 py-16 bg-blue-50 flex flex-col-reverse lg:flex-row justify-between items-center gap-10 ">
        <div className="max-w-xl space-y-6 mx-auto">
          <h1 className="text-5xl lg:text-6xl md:text-6xl font-bold">
            The <span className="text-[rgb(60,101,245)]">Easiest Way</span> to Get Your New Job
          </h1>
          <p className="text-gray-600 text-xl">
            Each month, more than 3 million job seekers turn to this website in their search for work, making over 140,000 applications every single day.
          </p>

          <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg p-4 rounded-lg gap-3">
            {/* Industry Dropdown with Icon */}
            <div className="relative w-full lg:w-auto">
              <div className="absolute z-2 left-3 top-3 flex items-center pointer-events-none">
                <IoBriefcaseOutline className="text-gray-500" />
              </div>
              <select className="select select-bordered pl-10 w-full lg:w-auto">
                <option disabled selected>Industry</option>
                <option>Tech</option>
                <option>Marketing</option>
              </select>
            </div>
            <select className="select select-bordered w-full lg:w-auto">
              <option disabled selected>Location</option>
              <option>Dhaka</option>
              <option>Remote</option>
            </select>
            <input type="text" placeholder="Your keyword..." className="input input-bordered w-full lg:w-64" />
            <button className="btn bg-[rgb(60,101,245)] text-white">Search</button>
          </div>

          <p className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">Popular Searches:</span>{" "}
            <a className="link">Designer</a>, <a className="link">Web</a>, <a className="link">iOS</a>, <a className="link">Developer</a>, <a className="link">PHP</a>
          </p>
        </div>

        <div className="hidden lg:flex flex-col items-center gap-4 mx-auto">
          <div className='relative right-20 '>
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" alt="Team working" className="rounded-xl shadow-lg w-72 border-4 border-[rgb(60,101,245)]" />
          </div>
          <img src={bg} alt="Handshake" className="rounded-xl shadow-lg w-72 border-4 border-[rgb(60,101,245)]" />
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useRef } from 'react';
import { NavLink } from 'react-router';
import { use } from 'react';
import { FaBriefcase, FaChartBar, FaChevronLeft, FaChevronRight, FaLaptopCode, FaUsers } from 'react-icons/fa';
import img1 from "../assets/img1.png"
import img2 from '../assets/img2.png'
import Job from './Job';

const categoryPromise = fetch('/data.json').then((res) => res.json());

const IndustryCategory = () => {
  const categories = use(categoryPromise);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const categoryIcons = {
    "Finance": <FaBriefcase />,
    "Software Development": <FaLaptopCode />,
    "Clean Energy": <FaChartBar />,
    "Healthcare": <FaUsers />,
    "Education": <FaChartBar />,
    "Technology": <FaLaptopCode />,
  };

  return (
    <div className="px-6 md:px-16 py-10 bg-white text-center">
      <h1 className="text-3xl md:text-3xl font-bold text-[rgb(5,38,78)]">
        Browse by category
      </h1>
      <p className="text-[rgb(160,171,184)] mt-3 mb-8 font-medium text-xl">
        Find the job that’s perfect for you. about 800+ new jobs everyday
      </p>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-blue-100 text-[rgb(60,101,245)] p-2 rounded-full shadow z-10"
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable categories */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4"
        >
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to="#"
              className="flex-shrink-0  min-w-[220px] bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className='flex items-center gap-4'>
                <div className="text-3xl text-[rgb(60,101,245)] mb-3">
                  {categoryIcons[category.industry] || <FaBriefcase />}
                </div>
                <div className='flex flex-col items-start'>
                  <h2 className="font-semibold text-lg text-slate-700">
                    {category.industry}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {category.jobs.length} Jobs Available
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-blue-100 text-[rgb(60,101,245)] p-2 rounded-full shadow z-10"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Hiring Banner */}
      <div className="mt-8  p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mx-auto max-w-5xl">
        {/* Left Image */}
        <img
          className="hidden lg:block w-[100px] md:w-[150px] h-auto object-cover rounded-lg"
          src={img1}
          alt="Hiring Illustration"
        />

        {/* Text Content */}
        <div className="text-start md:text-left lg:flex gap-5">
          <h3 className="text-2xl font-bold text-[rgb(160,171,184)]">WE ARE <br></br><span className='text-[rgb(5,38,78)] text-6xl'> HIRING</span></h3>
          <p className="text-[rgb(160,171,184)] text-xl mt-10">
            Let’s <span className='text-[rgb(5,38,78)]'> Work</span> Together <br />   &<span className='text-[rgb(5,38,78)]'>Explore</span>Opportunities
          </p>
        </div>

        {/* Apply Now Button */}
        <div className='md:flex-row-reverse'>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
            Apply now
          </button>

          {/* Right Image */}
          <img
            className="hidden md:block w-[100px] md:w-[150px] h-auto object-cover rounded-lg"
            src={img2}
            alt="Hiring Illustration"
          />
        </div>
      </div>

      <div className='mt-15'>
        <h1 className="text-3xl md:text-3xl font-bold text-[rgb(5,38,78)]">
          Jobs of the day
        </h1>
        <p className="text-[rgb(160,171,184)] mt-3 mb-8 font-medium text-xl">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <Job></Job>


    </div>
  );
};

export default IndustryCategory;

import React from 'react';
import peopleImage from "../assets/people.jpg";
const Stats = () => {
  return (
    <div className="bg-white px-6 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto mb-10">
      {/* Top Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={peopleImage}
              alt="Team"
              className="rounded-2xl w-full shadow-md"
            />
            {/* Overlapping cards */}
            <div className="absolute -top-6 -left-6 bg-white shadow-lg p-2 rounded-xl text-xs text-gray-500 hidden sm:block">
              <p className="font-medium">📈 Market Static</p>
              <p>Course overview</p>
            </div>
            <div className="absolute bottom-0 right-0 bg-white shadow-lg p-3 rounded-xl text-xs text-gray-500 hidden sm:block">
              <p className="font-medium">🔒 Security Group</p>
              <button className="text-blue-600 font-semibold text-sm mt-1">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-gray-400 font-bold text-3xl  uppercase tracking-wide mb-2">
            Millions Of Jobs.
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Find The One That’s{" "}
            <span className="text-blue-600">Right</span> For You
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-lg mx-auto lg:mx-0">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
            The right job is out there.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition">
              Search Jobs
            </button>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">25K+</h2>
          <p className="font-medium text-gray-900 mt-1">Completed Cases</p>
          <p className="text-sm text-gray-500">
            We always provide people a complete solution...
          </p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">17+</h2>
          <p className="font-medium text-gray-900 mt-1">Our Office</p>
          <p className="text-sm text-gray-500">
            We always provide people a complete solution...
          </p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">86+</h2>
          <p className="font-medium text-gray-900 mt-1">Skilled People</p>
          <p className="text-sm text-gray-500">
            We always provide people a complete solution...
          </p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">28+</h2>
          <p className="font-medium text-gray-900 mt-1">Happy Clients</p>
          <p className="text-sm text-gray-500">
            We always provide people a complete solution...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
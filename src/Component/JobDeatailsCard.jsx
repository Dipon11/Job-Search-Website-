import React, { useState } from 'react';
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCheckCircle,
} from 'react-icons/fa';

const JobDeatailsCard = ({ job }) => {
  const [applied, setApplied] = useState(false);

  // Guard clause — wait until job and job.requirements are available
  if (!job || !job.requirements) {
    return (
      <div className="max-w-5xl mx-auto my-10 text-center text-gray-500">
        Loading job details...
      </div>
    );
  }

  const handleApply = () => {
    alert('Application submitted successfully!');
    setApplied(true);
  };

  return (
    <div className="max-w-5xl mx-auto my-10 bg-white shadow-lg rounded-2xl overflow-hidden p-6 sm:p-10">
      <img
        src={job.bannerImage}
        alt={job.title}
        className="rounded-xl w-full h-64 sm:h-80 object-cover mb-8"
      />

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
        <div className="flex flex-wrap items-center text-gray-600 gap-x-6 gap-y-2 text-sm sm:text-base">
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-indigo-500" /> {job.location}
          </span>
          <span className="flex items-center gap-2">
            <FaBriefcase className="text-indigo-500" /> {job.jobType}
          </span>
          <span className="flex items-center gap-2">
            <FaMoneyBillWave className="text-indigo-500" /> {job.salary}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Requirements</h2>
        <ul className="list-none space-y-2 pl-2">
          {job.requirements.map((req, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <FaCheckCircle className="text-green-500 mt-1" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleApply}
          disabled={applied}
          className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${applied
            ? 'bg-gray-400 cursor-not-allowed text-white'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
        >
          {applied ? 'Applied' : 'Apply Now'}
        </button>
      </div>
    </div>
  );
};

export default JobDeatailsCard;

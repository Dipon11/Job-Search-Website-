import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const Job = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
        setSelectedCompany(data[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!selectedCompany) return <div>Loading...</div>;

  const jobsToShow = showAll
    ? selectedCompany.jobs
    : selectedCompany.jobs.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Company Navigation */}
      <div className="flex gap-10 justify-center mb-6 ">
        {companies.map((company) => (
          <button
            key={company.id}
            className={`px-4 py-2 rounded-lg border-outline text-center w-54 shadow-md flex-shrink-0 ${selectedCompany.id === company.id
              ? "bg-gray-100 text-white"
              : "bg-white text-gray-700"
              }`}
            onClick={() => setSelectedCompany(company)}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-15 w-50 object-cover mx-auto rounded-md mb-2"
            />
            <p className="text-xs font-medium truncate">{company.name}</p>
          </button>
        ))}
      </div>

      {/* Jobs */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-20">
        {jobsToShow.map((job) => (
          <div
            key={job.id}
            className="border-[rgb(60,101,245)] rounded-xl p-5 shadow transition bg-white hover:shadow-lg hover:scale-[1.02] transform duration-200 text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img
                  src={selectedCompany.logo}
                  alt={selectedCompany.name}
                  className="h-10 w-10 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {selectedCompany.name}
                  </h4>
                  <p className="text-xs text-gray-500">{job.location}</p>
                </div>
              </div>
              <span className="text-green-500 text-xl">⚡</span>
            </div>
            <h3 className="font-bold text-base text-[rgb(5,38,78)] mb-1">
              {job.title}
            </h3>
            <div className="text-sm text-gray-600 flex gap-3 items-center mb-2">
              <span className="flex items-center gap-1">
                <span role="img" aria-label="clock">📅</span>
                {job.jobType}
              </span>
              <span className="text-xs text-gray-400">{job.posted}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Link to={`/job/${job.id}`} className="underline text-[rgb(5,38,78)] hover:text-[rgb(60,101,245)]">View Details</Link>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[rgb(60,101,245)]">
                ${job.salary}/<span className="text-sm font-normal"> <span className="text-[rgb(5,38,78)]">Year</span></span>
              </span>
              <NavLink
                to={`/job/${job.id}`}
                className="bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded hover:bg-blue-200"
              >
                Apply Now
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {selectedCompany.jobs.length > 6 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 hover:underline"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Job;

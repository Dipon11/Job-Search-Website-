
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import JobDeatailsCard from './JobDeatailsCard';
import { useLoaderData, useParams } from 'react-router';



const JobDetails = () => {
  const data = useLoaderData()
  const { id } = useParams();
  const [job, setJobs] = useState({});
  console.log(data, job, id)
  useEffect(() => {

    // Flatten all jobs from companies
    const allJobs = data.flatMap(company => company.jobs);

    // Find the job with the matching ID
    const jobDetails = allJobs.find(job => job.id === id);
    setJobs(jobDetails);
  }, [data, id])
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <JobDeatailsCard job={job}></JobDeatailsCard>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default JobDetails;
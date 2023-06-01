import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      fetch(`featuredJobs.json`)
         .then((response) => response.json())
         .then((jsonData) => {
            setJobs(jsonData);
         });
   }, []);
   const [showAll, setShowAll] = useState(false);
   const handelShowAll = () => {
      setShowAll(true);
   };

   return (
      <section className="flex flex-col justify-center mb-24 px-4 md:px-0">
         <div className="md:w-1/2 mx-auto text-center">
            <h3 className="text-5xl font-bold mb-5">Featured Jobs</h3>
            <p className="mb-5 text-gray-500">
               Explore thousands of job opportunities with all the information you need. Its your future
            </p>
         </div>
         <div className="md:grid grid-cols-2 gap-6 my-5">
            {(showAll ? jobs : jobs.slice(0, 4)).map((job) => (
               <Job key={job.id} job={job}></Job>
            ))}
         </div>
         <button
            className={`px-7 py-4 text-xl font-bold rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white hover:text-gray-200 my-4 mx-auto w-44 ${
               showAll && "hidden"
            }`}
            onClick={handelShowAll}
         >
            See All Jobs
         </button>
      </section>
   );
};

export default Jobs;

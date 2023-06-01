import React, { useCallback, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Job from "../Job/Job";
import Dropdown from "../Dropdown/Dropdown";

const AppliedJobs = () => {
   const jobs = useLoaderData();

   const [filteredJobs, setFilteredJobs] = useState(jobs);

   const handleSelect = (event) => {
      const selectedWorkType = event.target.value;
      if (selectedWorkType) {
         const filteredJobs = jobs.filter((job) => job.jobType.includes(selectedWorkType));
         setFilteredJobs(filteredJobs);
      } else {
         setFilteredJobs(jobs);
      }
   };

   // console.log(filteredJobs);

   return (
      <div>
         <div className="bg-gradient-to-r from-[#7e8ffe11] to-[#9873ff19] text-center h-60 py-20 ">
            <h2 className="text-3xl font-bold mb-6">Applied Jobs</h2>
         </div>
         <div className="container mx-auto ">
            <div className="mt-28  mx-4 md:mx-0">
               <Dropdown handleSelect={handleSelect}></Dropdown>
            </div>
            <div className="mt-5 mb-28  mx-4 md:mx-0">
               {filteredJobs
                  .sort((a, b) => a.id - b.id)
                  .map((job) => (
                     <Job key={job.id} job={job} flex="flex"></Job>
                  ))}
            </div>
         </div>
      </div>
   );
};

export default AppliedJobs;

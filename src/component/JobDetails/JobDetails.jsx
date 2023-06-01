import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addToDb, getAppliedJob } from "../../utilities/fakedb";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
   let { state } = useLocation();
   const {
      id,
      companyName,
      description,
      responsibilities,
      educationalQualification,
      experience,
      email,
      phone,
      jobTitle,
      salary,
      location,
   } = state.job;
   // console.log(responsibilities);

   const [applied, setApplied] = useState(false);

   useEffect(() => {
      const appliedJob = getAppliedJob();
      const exist = appliedJob.find((job) => job.id === id);
      if (appliedJob && exist) {
         setApplied(true);
         // console.log(id);
      }
   }, [id]);

   const handelAddToDB = (id) => {
      const appliedJob = getAppliedJob();
      setApplied(true);

      const findId = appliedJob.find((job) => job.id === id);
      if (findId) {
         toast.warn("You Have Already Applied");
      } else {
         addToDb(id);
      }
   };

   return (
      <div>
         <div className="bg-gradient-to-r from-[#7e8ffe11] to-[#9873ff19] text-center h-60 py-20 ">
            <h2 className="text-3xl font-bold mb-6">Job Details</h2>
            <h3 className="text-2xl font-bold">{companyName}</h3>
         </div>
         <div className="container mx-auto my-28 md:grid grid-cols-3 gap-6">
            <div className="col-span-2">
               <p className="text-gray-500 mb-5">
                  <span className="text-black font-bold">Job Description: </span>
                  {description}
               </p>
               <p>
                  <span className="text-black font-bold">Job Responsibility: </span>
               </p>
               <ul className="list-decimal list-inside text-gray-500 mb-5">
                  {responsibilities.map((responsibility, index) => (
                     <li key={index}>{responsibility}</li>
                  ))}
               </ul>
               <p className="text-gray-500 mb-5">
                  <span className="text-black font-bold">Educational Qualification: </span> <br /> <br />
                  {educationalQualification}
               </p>
               <p className="text-gray-500 mb-5">
                  <span className="text-black font-bold">Experience: </span> <br /> <br />
                  {experience}
               </p>
            </div>
            <div>
               <div className="bg-gradient-to-r from-[#7e8ffe31] to-[#9873ff1b] p-8 rounded-lg">
                  <h2 className="text-xl font-extrabold mb-6">Job Details</h2>
                  <hr className="border-gray-300 border-2 mb-5" />
                  <p className="text-gray-500 text-xl  mb-5">
                     <span className="text-black font-bold">Salary: </span>
                     {salary}
                  </p>
                  <p className="text-gray-500 text-xl  mb-5">
                     <span className="text-black font-bold">Job Title: </span>
                     {jobTitle}
                  </p>
                  <h2 className="text-xl font-extrabold mb-6">Contact Information</h2>
                  <hr className="border-gray-300 border-2 mb-5" />
                  <p className="text-gray-500 text-xl  mb-5">
                     <span className="text-black font-bold">Phone: </span>
                     {phone}
                  </p>
                  <p className="text-gray-500 text-xl  mb-5">
                     <span className="text-black font-bold">Email: </span>
                     {email}
                  </p>
                  <p className="text-gray-500 text-xl  mb-5">
                     <span className="text-black font-bold">Address: </span>
                     {location}
                  </p>
               </div>
               <button
                  className="px-7 py-4 text-xl font-bold rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white hover:text-gray-200 w-full mt-7 "
                  onClick={() => handelAddToDB(id)}
               >
                  {applied ? "Applied" : "Apply Now"}
               </button>
               <ToastContainer />
            </div>
         </div>
      </div>
   );
};

export default JobDetails;

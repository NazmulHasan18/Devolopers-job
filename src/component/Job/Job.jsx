import { faCircleDollarToSlot, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job, flex }) => {
   // console.log(job);
   const { companyName, logo, jobTitle, jobType, location, salary, id } = job;
   return (
      <div
         className={`border border-[#E8E8E8] rounded-lg p-10 mb-6 ${
            flex && "md:flex"
         } justify-center items-center gap-8`}
      >
         <div className={` ${flex && "bg-[#F4F4F4] h-60 w-60 flex items-center justify-center rounded-lg "}`}>
            <img src={logo} alt="" className="mb-8 " />
         </div>
         <div className="grow">
            <h4 className="text-2xl font-bold mb-2">{jobTitle}</h4>
            <p className="mb-4 text-gray-500 text-xl font-semibold">{companyName}</p>
            <div className="flex gap-8">
               {jobType.map((type, index) => (
                  <p
                     key={index}
                     className="rounded border border-blue-300 text-blue-400 font-semibold py-2 px-4 mb-4"
                  >
                     {type}
                  </p>
               ))}
            </div>
            <div className="md:flex items-center gap-9">
               <p className="mb-4 text-gray-500 text-xl font-semibold">
                  <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Location: {location}
               </p>
               <p className="mb-4 text-gray-500 text-xl font-semibold">
                  <FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon> Salary: {salary}
               </p>
            </div>
         </div>
         <Link to={`/JobDetails/${id}`} state={{ job: job }}>
            <button className="px-7 py-2 text-xl font-semibold rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white hover:text-gray-200">
               View Details
            </button>
         </Link>
      </div>
   );
};

export default Job;

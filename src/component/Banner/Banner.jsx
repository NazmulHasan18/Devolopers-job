import React from "react";
import BannerImg from "../../All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
   return (
      <section className=" bg-gradient-to-r from-[#7e8ffe11] to-[#9873ff19]">
         <div className="container mx-auto flex items-center justify-between mb-16 flex-col-reverse md:flex-row pt-2 md:pt-6 px-4 md:px-0">
            <div>
               <h1 className="text-5xl md:text-7xl font-bold my-5">
                  One Step <br /> Closer To Your <br />
                  <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
                     Dream Job
                  </span>
               </h1>
               <p className="mb-5 text-gray-500">
                  Explore thousands of job opportunities with all the information you need. Its your future.
                  Come find it. Manage all your job application from start to finish.
               </p>
               <button className="px-7 py-4 text-xl font-bold rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white hover:text-gray-200">
                  Get Started
               </button>
            </div>
            <img src={BannerImg} alt="" />
         </div>
      </section>
   );
};

export default Banner;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";

const Header = () => {
   return (
      <header className="bg-gradient-to-r from-[#7e8ffe11] to-[#9873ff19] py-4  md:py-12 px-4 md:px-12">
         <nav className="flex flex-col md:flex-row items-center justify-between container mx-auto">
            <Link to="/">
               <h2 className="text-4xl font-bold">
                  <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
                     Developer
                  </span>
                  's Job
               </h2>
            </Link>
            <ul className="flex gap-8 font-semibold my-4">
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     isActive ? "text-blue-500 hover:text-blue-700" : "hover:text-blue-700"
                  }
               >
                  Home
               </NavLink>
               <NavLink
                  to="/appliedJob"
                  className={({ isActive }) =>
                     isActive ? "text-blue-500 hover:text-blue-700" : "hover:text-blue-700"
                  }
               >
                  Applied Job
               </NavLink>
               <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                     isActive ? "text-blue-500 hover:text-blue-700" : "hover:text-blue-700"
                  }
               >
                  Statistics
               </NavLink>
               <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                     isActive ? "text-blue-500 hover:text-blue-700" : "hover:text-blue-700"
                  }
               >
                  Blog
               </NavLink>
            </ul>
            <button className="px-7 py-4 text-xl font-bold rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white hover:text-gray-200">
               Start Applying
            </button>
         </nav>
      </header>
   );
};

export default Header;

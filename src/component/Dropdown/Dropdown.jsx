import React from "react";

const Dropdown = ({ handleSelect }) => {
   return (
      <div className="flex justify-end">
         <select
            id="work-type"
            onChange={handleSelect}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold text-xl"
         >
            <option value="">Filter By</option>
            <option value="Remote">Remote</option>
            <option value="Full-time">Full-time</option>
            <option value="On-site">On-site</option>
         </select>
      </div>
   );
};

export default Dropdown;

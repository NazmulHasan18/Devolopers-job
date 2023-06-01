import React from "react";

const Categories = ({ categories }) => {
   // console.log(categories);
   return (
      <section className="my-28 px-4 md:px-0">
         <div className="md:w-1/2 mx-auto text-center">
            <h2 className="text-5xl font-bold mb-5">Job Categories List</h2>
            <p className="mb-5 text-gray-500">
               Explore thousands of job opportunities with all the information you need. Its your future
            </p>
         </div>
         <div className="flex flex-col md:flex-row md:justify-between gap-8 justify-center my-8 items-center">
            {categories &&
               categories.map((category) => {
                  const { id, img, name, vacancy } = category;
                  return (
                     <div
                        className="w-80 h-60 bg bg-gradient-to-r from-[#7e8ffe11] to-[#9873ff19] p-10 rounded-lg mb-8 md:mb-auto"
                        key={id}
                     >
                        <img src={img} alt="" className="py-8" />
                        <h4 className="text-xl font-bold mb-2">{name}</h4>
                        <p className="mb-5 text-gray-500">{vacancy} Jobs Available</p>
                     </div>
                  );
               })}
         </div>
      </section>
   );
};

export default Categories;

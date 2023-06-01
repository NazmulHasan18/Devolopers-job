import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import { useLoaderData } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import { data } from "autoprefixer";
import { ToastContainer } from "react-toastify";

const Main = () => {
   const categories = useLoaderData();

   return (
      <>
         <Banner></Banner>
         <main className="container mx-auto">
            <Categories categories={categories}></Categories>
            <Jobs></Jobs>
         </main>
      </>
   );
};

export default Main;

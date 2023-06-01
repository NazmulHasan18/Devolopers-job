import React from "react";
import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   ReferenceLine,
   RadialBarChart,
   RadialBar,
   Legend,
} from "recharts";

const Statistics = () => {
   const data = [
      {
         name: "Assignment-1",
         marks: 60,

         fill: "#83a6ed",
      },
      {
         name: "Assignment-2",
         marks: 60,

         fill: "#8884d8",
      },
      {
         name: "Assignment-3",
         marks: 60,

         fill: "#8dd1e1",
      },
      {
         name: "Assignment-4",
         marks: 55,

         fill: "#82ca9d",
      },
      {
         name: "Assignment-5",
         marks: 60,

         fill: "#a4de6c",
      },
      {
         name: "Assignment-6",
         marks: 60,

         fill: "#d0ed57",
      },
      {
         name: "Assignment-7",
         marks: 60,

         fill: "#ffc658",
      },
      {
         name: "Assignment-8",
         marks: 60,

         fill: "#8884d8",
      },
   ];

   return (
      <div>
         <div className="bg-gradient-to-r from-[#7e8ffe11] to-[#9873ff19] text-center h-60 py-20 ">
            <h2 className="text-3xl font-bold mb-6">Assignment Marks Chart</h2>
         </div>
         <div className="my-28 flex justify-center items-center">
            <AreaChart
               width={950}
               height={350}
               data={data}
               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
               <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                     <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                     <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
               </defs>
               <XAxis dataKey="name" />
               <YAxis />
               <CartesianGrid strokeDasharray="3 3" />
               <Tooltip />
               <Area type="monotone" dataKey="marks" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
         </div>
      </div>
   );
};

export default Statistics;

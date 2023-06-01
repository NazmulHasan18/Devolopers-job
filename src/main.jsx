import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import ErrorPage from "./component/Error/Error";
import Main from "./component/Main/Main";
import JobDetails from "./component/JobDetails/JobDetails";
import AppliedJobs from "./component/AppliedJobs/AppliedJobs";
import loadAppliedJob from "../LoadSavedCart";
import Statistics from "./component/Statistics/Statistics";
import Blog from "./component/Blog/Blog";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Main />,
            loader: () => fetch("jobCategories.json"),
         },
         {
            path: "/JobDetails/:id",
            element: <JobDetails></JobDetails>,
         },
         {
            path: "/appliedJob",
            element: <AppliedJobs></AppliedJobs>,
            loader: loadAppliedJob,
         },
         {
            path: "/statistics",
            element: <Statistics></Statistics>,
         },
         {
            path: "/blog",
            element: <Blog></Blog>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);

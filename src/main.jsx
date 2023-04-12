import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layouts from "./Components/Layouts/layouts";
import Home from "./Components/Home/Home";
import Job_Details from "./Components/Job_Details/Job_Details";
import Applied_Jobs from "./Components/Applied_Jobs/Applied_Jobs";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
import jobLoader from "./utilities/getData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <Applied_Jobs></Applied_Jobs>,
        loader: jobLoader
      },
      {
        path: "/details/:id",
        element: <Job_Details></Job_Details>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: ()=>fetch('assignmentStatistics.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

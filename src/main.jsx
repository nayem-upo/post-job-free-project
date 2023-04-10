import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layouts from "./Components/Layouts/layouts";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      // {
      //   path: "/",
      //   element: ,
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

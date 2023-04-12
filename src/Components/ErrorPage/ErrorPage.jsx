import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" mb-20">
      <div  style={{
          backgroundImage: `url('../../../public/assets/All Images/Vector.png')`,
        }}
        className="shadow-2xl bg-left-bottom bg-no-repeat py-40 text-center bg-[#F9F9FF]">
        <h1 className="text-[#7E90FE] text-9xl pb-2">404</h1>
        <h1 className="text-4xl">OOPS! PAGE NOT BE FOUND</h1>
        <p className="text-xl my-5 mb-8">Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable!</p>
        <Link to="/" className="text-[#7E90FE] shadow-lg text-lg font-semibold border-2 p-2 border-[#7E90FE] rounded-md">Go back to the homepage</Link>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";

const Home1stSec = () => {
  return (
    <div className="mb-8 md:my-0 md:flex md:px-24 mx-3 text-center md:text-left items-center justify-center gap-16 bg-[#F9F9FF]">
      <div className="">
        <h1 className="md:text-7xl text-4xl font-bold md:leading-tight">One Step <br /> Closer To Your <br /> <span className="text-[#8C81FF]">Dream Job</span></h1>
        <p className="text-[#8E8E8E] py-10 text-lg w-[400px]">Explore thousands of job opportunities with all the  information you need. Its your future. Come find it. Manage all  your job application from start to finish.</p>
        <button className='mb-10 bg-gradient-to-l from-[#8786FE] via-purple-500 to-purple-400 py-4 px-6 text-white font-semibold text-2xl rounded-lg hover:bg-[#9774FF] hover:text-[#87A2FE]'>Get Started</button>
      </div>
      <div>
        <img className="md:mt-10" src="/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
      </div>
    </div>
  );
};

export default Home1stSec;

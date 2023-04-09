import React from "react";

const Home1stSec = () => {
  return (
    <div className="flex items-center justify-center gap-16">
      <div>
        <h1 className="text-7xl font-bold leading-tight">One Step <br /> Closer To Your <br /> <span className="text-[#8C81FF]">Dream Job</span></h1>
        <p className="text-[#8E8E8E] py-10 text-lg">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
        <button className='bg- bg-gradient-to-l from-[#8786FE] via-purple-500 to-purple-400 py-4 px-6 text-white font-semibold text-2xl rounded-lg hover:bg-[#9774FF] hover:text-[#87A2FE]'>Get Started</button>
      </div>
      <div>
        <img className="mt-10" src="../../../public/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
      </div>
    </div>
  );
};

export default Home1stSec;

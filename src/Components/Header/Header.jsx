import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-evenly items-center pt-4 md:pt-12 bg-[#F9F9FF]'>
            <NavLink to="/"><h1 className='font-bold text-4xl text-center'>PostJobFree</h1></NavLink>
            <div className='flex my-5 md:my-0 justify-center gap-6 md:gap-10 md:justify-between text-xl font-semibold text-[#757575]'>
                <NavLink to={"/"} className={({ isActive}) =>isActive? "text-[#8786FE]": "hover:text-[#8786FE]"}>Home</NavLink>
                <NavLink to={"/statistics"} className={({ isActive}) =>isActive? "text-[#8786FE]": "hover:text-[#8786FE]"}>Statistics</NavLink>
                <NavLink to={"/applied"} className={({ isActive}) =>isActive? "text-[#8786FE]": "hover:text-[#8786FE]"}>Applied Jobs</NavLink>
                <NavLink to={"/blog"} className={({ isActive}) =>isActive? "text-[#8786FE]": "hover:text-[#8786FE]"}>Blog</NavLink>
            </div>
            <button className='invisible md:visible bg-gradient-to-l from-[#8786FE] via-purple-500 to-purple-400 py-4 px-6 text-white font-semibold text-2xl rounded-lg hover:bg-[#9774FF] hover:text-[#87A2FE]'>Star Applying</button>
        </div>
    );
};

export default Header;
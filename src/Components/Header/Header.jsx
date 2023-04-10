import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-evenly items-center pt-12 bg-[#F9F9FF]'>
            <NavLink to="/"><h1 className='font-bold text-4xl'>PostJobFree</h1></NavLink>
            <div className='flex gap-10 justify-between text-xl font-semibold text-[#757575]'>
                <NavLink to={"/"} className={({ isActive}) =>isActive? "text-[#8786FE]": "hover:text-[#8786FE]"}>Home</NavLink>
                <NavLink to={"/statistics"} className={({ isActive}) =>isActive? "text-[#8786FE]": "hover:text-[#8786FE]"}>Statistics</NavLink>
                <NavLink to={"/applied"} className={({ isActive}) =>isActive? "text-[#8786FE]": "hover:text-[#8786FE]"}>Applied Jobs</NavLink>
                <NavLink to={"/blog"} className={({ isActive}) =>isActive? "text-[#8786FE]": "hover:text-[#8786FE]"}>Blog</NavLink>
            </div>
            <button className='bg- bg-gradient-to-l from-[#8786FE] via-purple-500 to-purple-400 py-4 px-6 text-white font-semibold text-2xl rounded-lg hover:bg-[#9774FF] hover:text-[#87A2FE]'>Star Applying</button>
        </div>
    );
};

export default Header;
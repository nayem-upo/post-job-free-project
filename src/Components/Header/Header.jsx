import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="md:flex justify-evenly items-center pt-4 md:pt-12 bg-[#F9F9FF]">
      <div className="flex items-center gap-4 justify-evenly">
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FontAwesomeIcon className="h-10 text-[#9775FF]" icon={faBars} />
          ) : (
            <FontAwesomeIcon className="h-11 text-[#9775FF]" icon={faXmark} />
          )}
        </div>

        <NavLink to="/">
          <h1 className="font-bold text-4xl text-center">PostJobFree</h1>
        </NavLink>
      </div>
      <div
        className={`${
          open ? "hidden md:block" : "bg-[#8f85ff4f]"
        } md:bg-[#F9F8FF] p-3 md:p-0 ms-8 flex my-5 md:flex-row flex-col md:my-0 gap-6 md:gap-10 md:justify-between text-xl font-semibold text-[#757575]`}
      >
        <div className="flex flex-col md:flex-row gap-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-[#8786FE]"
                : "hover:text-[#8786FE] hover:bg-[#F4F2FF]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/statistics"}
            className={({ isActive }) =>
              isActive ? "text-[#8786FE]" : "hover:text-[#8786FE]"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to={"/applied"}
            className={({ isActive }) =>
              isActive ? "text-[#8786FE]" : "hover:text-[#8786FE]"
            }
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? "text-[#8786FE]" : "hover:text-[#8786FE]"
            }
          >
            Blog
          </NavLink>
        </div>
      </div>
      <button className="invisible md:visible bg-gradient-to-l from-[#8786FE] via-purple-500 to-purple-400 py-4 px-6 text-white font-semibold text-2xl rounded-lg hover:bg-[#9774FF] hover:text-[#87A2FE]">
        Star Applying
      </button>
    </div>
  );
};

export default Header;

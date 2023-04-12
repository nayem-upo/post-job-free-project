import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedCard from "../AppliedCard/AppliedCard";
import Dropdowns from "../Dropdowns/Dropdowns";

const Applied_Jobs = () => {
  const detailsData = useLoaderData();
  const [jobType, setJobTyple]= useState([])
  
  useEffect(()=>{
      setJobTyple([...detailsData])

  },[])

  const remote = ()=>{
    const remoteData = detailsData.filter(remote=> remote.job_location == "Remote")
    setJobTyple(remoteData)
    
  }
  const onsite = ()=>{
    const onsiteData = detailsData.filter(onsite=> onsite.job_location == "Onsite")
    setJobTyple(onsiteData)
  }
  const all = ()=>{
    setJobTyple(detailsData)
  }

  const [open, setOpen] = useState(false)
  return (
    <div className="">
      <img className="absolute top-0 right-0 w-[20%]" src="/assets/All Images/Vector-1.png" alt="" />
      <div
        style={{
          backgroundImage: `url('/assets/All Images/Vector.png')`,
        }}
        className="bg-left-bottom bg-no-repeat py-32 text-center mx-auto bg-[#F9F9FF]"
      >
        <h1 className="text-5xl font-bold">Applied Jobs</h1>
      </div>

      <h1 className={`${jobType.length >= 1 ? "hidden": ""} text-center my-24 font-semibold text-[#9775FF] text-5xl`}>You haven't applied yet!</h1>

      <div className="w-[80%] mx-auto mt-36">
      <div className={`${jobType.length >= 1 ? "": "hidden"} text-right`}>
        <button onClick={()=>setOpen(!open)} className="mb-10 text-[#474747] text-2xl bg-[#F4F2FF] font-medium rounded-md px-5 py-4 inline-flex items-center" type="button">Filter By <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
        {
            open && (
                <Dropdowns setOpen={setOpen} remote={remote} all={all} onsite={onsite}></Dropdowns>
            )
        }
      </div>
        

        
        <div className="flex flex-col gap-6 mb-32">
            {
                jobType.map(detail=> <AppliedCard detail={detail} key={detail.id}></AppliedCard>)
            }
        
        </div>
      </div>
    </div>
  );
};
export default Applied_Jobs;

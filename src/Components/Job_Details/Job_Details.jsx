import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import jobData from "../../../public/featured data.json"

const Job_Details = () => {
    const {id} = useParams()
    const [itemDetails, setItemDetails] = useState({})
    useEffect(()=>{
        setItemDetails({})
        setItemDetails(jobData.find((i)=> i.id ==id))
    },[itemDetails])
  return (
    <div className="">
      <div style={{backgroundImage: `url('../../../public/assets/All Images/Vector.png')`}} className="bg-left-bottom bg-no-repeat py-32 text-center mx-auto bg-[#F9F9FF]">
        <h1 className="text-5xl font-bold">Job Details</h1>
      </div>
      <div className="flex mx-auto gap-10 w-[70%] py-20">
        <div className="w-[80%] leading-7 flex flex-col gap-5">
            <p className=""><span className="font-bold"> Job Description: </span>{itemDetails.description}</p>
            <p><span className="font-bold">Job Responsibility:</span> {itemDetails.responsibility}</p>
            <p className="font-bold">Educational Requirements:</p>
            <p>{itemDetails.requirements}</p>
            <p className="font-bold">Experiences:</p>
            <p>{itemDetails.experiences}</p>
        </div>
        <div className="flex flex-col gap-6 w-96">
            <div className="bg-[#F4F2FF] p-10 rounded-lg">
                <h1 className="font-bold text-xl mb-4">Job Details</h1>
                <hr className=""/>
                <p className="leading-10 mt-2"><span className="font-bold">Salary :</span> {itemDetails.salary}</p>
                <p><span className="font-bold">Job Title :</span> {itemDetails.job_title}</p>
                <h1 className="font-bold text-xl my-4">Contact Information</h1>
                <hr />
                <p><span className="font-bold leading-10">Phone : </span> {itemDetails.phone}</p>
                <p><span className="font-bold">Email : </span> {itemDetails.email}</p>
                <p className="mt-4"><span className="font-bold">Address : </span> {itemDetails.address}</p>
            </div>
            <button className="bg-gradient-to-l from-[#8786FE] via-purple-500 to-purple-400 py-4 px-6 text-white font-semibold text-2xl rounded-lg hover:bg-[#9774FF] hover:text-[#87A2FE]">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Job_Details;

import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AppliedCard = ({detail}) => {
    const navigate = useNavigate()
    const {id, logo, job_title, company_name, job_location, job_type, salary, location} = detail
    return (
        <div className='flex items-center rounded-lg border justify-between p-6  shadow-md'>
            <div className='flex gap-5 items-center'>
                <img className='w-56 h-full rounded-lg bg-[#F4F4F4] px-10 py-20' src={logo} alt="" />
                <div className='font-semibold text-xl my-5 text-[#757575] items-center'>
                    <h1 className='text-[#4E4E4E] text-2xl'>{job_title}</h1>
                    <p className='mt-3'>{company_name}</p>
                    <div className='flex gap-4 my-4 font-semibold text-[#9775FF]'>
                        <p className='border px-2 py-2 rounded-md'>{job_location}</p>
                        <p className='border px-3 py-2 rounded-md'>{job_type}</p>
                    </div>
                    <p className='font-semibold text-xl my-5 text-[#757575] items-center flex gap-6'>
                        <span className='flex gap-2 items-center'> 
                        <img className='w-7' src="/assets/Icons/Frame-4.png" alt="" /> {location}</span> 
                        <span className='flex gap-2 items-center'>
                        <img className='w-7' src="public/assets/Icons/Frame.png" alt="" /> {salary}</span></p>
                </div>
            </div>
            <button onClick={()=>navigate(`/details/${id}`)} className="me-5 w-50 bg-gradient-to-l from-[#8786FE] via-purple-500 to-purple-400 py-3 px-4 text-white font-semibold text-2xl rounded hover:bg-[#9774FF] hover:text-[#87A2FE]">View Details</button>
        </div>
    );
};

export default AppliedCard;
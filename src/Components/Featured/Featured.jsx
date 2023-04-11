import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Featured = () => {
    const [number, setNumber] = useState(4)
    const navigate = useNavigate()
    const [features, setFeatures] = useState([])
    useEffect(()=>{
        fetch('featured data.json')
        .then(response => response.json())
        .then(data=> setFeatures(data))
    },[])
    const lessItems = features.slice(0, number);
    const handleSeeAll = () =>{
        setNumber(6)
    }
    return (
        <div className='mt-32 text-center md:w-[1150px] mx-auto mb-20'>
            <h1 className='text-5xl font-bold'>Featured Jobs</h1>
            <p className='text-[#8E8E8E] py-8 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:grid md:grid-cols-2 gap-4 mb-10 justify-evenly'>
                {
                    lessItems.map(item => 
                    <div key={item.id} className='border flex flex-col justify-between rounded-lg p-9 text-left '>
                        <img className='w-36 pb-8' src={item.logo} alt="" />
                        <h1 className='font-bold text-2xl text-[#474747]'>{item.job_title}</h1>
                        <p className='font-semibold my-4 text-xl text-[#757575]'>{item.company_name}</p>
                        <div className='flex gap-4 my-4 font-semibold text-[#9775FF]'>
                            <p className='border px-2 py-2 rounded-md'>{item.job_location}</p>
                            <p className='border px-3 py-2 rounded-md'>{item.job_type}</p>
                        </div>
                        <p className='font-semibold text-xl my-5 text-[#757575] items-center flex gap-6'><span className='flex gap-2 items-center'> <img className='w-7' src="../../../public/assets/Icons/Frame-4.png" alt="" /> {item.location}</span> <span className='flex gap-2 items-center'><img className='w-7' src="../../../public/assets/Icons/Frame.png" alt="" /> {item.salary}</span></p>
                        <button onClick={()=>navigate(`/details/${item.id}`)} className="w-[35%] bg-gradient-to-l from-[#8786FE] via-purple-500 to-purple-400 py-2 px-4 text-white font-semibold text-2xl rounded hover:bg-[#9774FF] hover:text-[#87A2FE]">View Details</button>
                    </div> 
                    )
                }
            </div>
            <button onClick={handleSeeAll} className={`${number > 4? 'hidden': ''} bg- bg-gradient-to-l from-[#8786FE] via-purple-500 to-purple-400 py-4 px-6 text-white font-semibold text-2xl rounded-lg hover:bg-[#9774FF] hover:text-[#87A2FE]`}>See All Jobs</button>
        </div>
    );
};

export default Featured;
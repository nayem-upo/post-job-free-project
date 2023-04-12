import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categorys, setCategorys] = useState([])
    useEffect(()=>{
        fetch('category data.json')
        .then(response => response.json())
        .then(data => setCategorys(data))
    },[])
    return (
        <div className='text-center md:mt-36 mx-10'>
            <h1 className='text-5xl font-bold'>Job Category List</h1>
            <p className='text-[#8E8E8E] py-8 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex justify-center gap-10'>
                {
                    categorys.map(category=> 
                    <div key={category.title} className='bg-[#efecff5f] p-10 w-80 rounded-md shadow-lg'>
                        <img className='bg-[#e5e1ff89] rounded-lg p-3' src={category.logo} alt="" />
                        <h1 className='text-left mt-6 mb-2 font-semibold text-2xl'>{category.title}</h1>
                        <p className='text-left text-[#A3A3A3]'>{category.job_amount}</p>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Category;
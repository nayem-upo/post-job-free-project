import React from 'react';
import "./Dropdowns.css"

const Dropdowns = ({onsite, remote, setOpen, all}) => {
    return (
        <div className='flex flex-col dropdown text-xl text-slate-800'>
            <ul onClick={()=>setOpen(!open)} className='flex flex-col gap-4'>
                <li onClick={all} className='cursor-pointer p-1 px-3 rounded-md hover:bg-slate-100'>All</li>
                <li onClick={onsite} className='cursor-pointer p-1 px-3 rounded-md hover:bg-slate-100'>Onsite</li>
                <li onClick={remote} className='cursor-pointer p-1 px-3 rounded-md hover:bg-slate-100'>Remote</li>
            </ul>
        </div>
    );
};

export default Dropdowns;
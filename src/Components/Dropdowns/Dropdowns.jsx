import React from 'react';
import "./Dropdowns.css"

const Dropdowns = ({onsite, remote, setOpen}) => {
    return (
        <div className='flex flex-col dropdown text-xl text-slate-800'>
            <ul onClick={()=>setOpen(!open)} className='flex flex-col gap-4'>
                <li onClick={onsite} className='cursor-pointer'>Onsite</li>
                <li onClick={remote} className='cursor-pointer'>Remote</li>
            </ul>
        </div>
    );
};

export default Dropdowns;
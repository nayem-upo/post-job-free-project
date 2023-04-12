import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div>
      <img className="absolute top-0 right-0 w-[20%]" src="/assets/All Images/Vector-1.png" alt="" />
      <div
        style={{
          backgroundImage: `url('/assets/All Images/Vector.png')`,
        }}
        className="bg-left-bottom bg-no-repeat py-32 text-center mx-auto bg-[#F9F9FF]"
      >
        <h1 className="text-5xl font-bold">Assignment Analytics Chart</h1>
      </div>
        <div className="flex justify-center gap-20 my-10 text-xl font-semibold">
          <p className='flex items-center gap-1'><span className="text-[#82ca9d]"><FontAwesomeIcon icon={faSquare} /></span> Out Of Score</p>
          <p className='flex items-center gap-1'><span className='text-[#8884d8]'><FontAwesomeIcon icon={faSquare} /></span> Obtain Score</p>
        </div>
      <div className="flex justify-center mb-20">
        <AreaChart
          width= {1200}
          height={480}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis type="number" domain={['dataMin', 'dataMax']} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Obtain"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="Out_Of"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;

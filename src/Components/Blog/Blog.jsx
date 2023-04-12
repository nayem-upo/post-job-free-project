import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('../../../public/assets/All Images/Vector.png')`,
        }}
        className="drop-shadow-xl bg-left-bottom bg-no-repeat py-32 text-center mx-auto bg-[#F9F9FF]"
      >
        <h1 className="text-5xl font-bold">Answering common questions in react</h1>
      </div>
      

      <div className="grid grid-cols-2 gap-8 my-20 mx-32">
        <div className="border-4 rounded-2xl p-6 h-44 border-[#9775FF] shadow-xl">
            <h1 className="text-2xl">When should use context api?</h1>
            <p className="text-xl"><span className="text-[#9775FF] font-bold">Context API</span> should be used when needs to pass data or state to multiple components without props.</p>
        </div>
        <div className="border-4 rounded-2xl p-6 border-[#9775FF] shadow-xl">
            <h1 className="text-2xl">What is custom hook in react?</h1>
            <p className="text-xl"><span className="text-[#9775FF] font-bold">Custom hook</span> is a reusable function that contains some stateful or side-effect logic and can be shared among multiple components.</p>
        </div>
        <div className="border-4 rounded-2xl p-6 border-[#9775FF] shadow-2xl shadow-violet-300">
            <h1 className="text-2xl">What is useref and why we use it</h1>
            <p className="text-xl"><span className="text-[#9775FF] font-bold ">useRef</span> is a hook that returns a mutable ref object that can be used to store a value across renders.</p>
            <p className="text-xl"> You use the useRef hook to store a mutable value without causing re-render.</p>
        </div>
        <div className="border-4 rounded-2xl p-6 border-[#9775FF] shadow-2xl shadow-violet-300">
            <h1 className="text-2xl">What is usememo and why we use it?</h1>
            <p className="text-xl"><span className="text-[#9775FF] font-bold">useMemo</span> is a hook that can be used to optimize performance by memoizing a function that computes a value.</p>
            <p className="text-xl">You use the useMemo hook to avoid unnecessary computations and re-renders</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

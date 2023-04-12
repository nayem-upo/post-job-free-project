import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#191919] text-white py-[130px]">
      <div className="flex justify-evenly mx-5 pb-10">
        <div>
          <h1 className="text-3xl font-bold">PostJobFree</h1>
          <p className="w-72 my-7">
            Don't let a difficult job search hold you back from reaching your
            full potential. Join the thousands of job seekers who have found
            their dream job with PostJobFree today.
          </p>
          <img className="cursor-pointer" src="/assets/Icons/Group 9969.png" alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl">Company</h1>
          <p>About Us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Careers</p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl">Product</h1>
          <p className="">Prototype</p>
          <p>Plans & Pricing</p>
          <p>Customers</p>
          <p>Integrations</p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl">Support</h1>
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl">Contact</h1>
          <p>524 Broadway , NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
      <hr className="w-[80%] mx-auto mb-16 border-[#7E90FE] opacity-20"/>
      <div className="flex justify-between mx-[10%]">
        <p>@2023 <span className="font-bold">PostJobFree</span>. All Rights Reserved</p>
        <p>Powered by <span className="font-bold">PostJobFree</span></p>
      </div>
    </div>
  );
};

export default Footer;

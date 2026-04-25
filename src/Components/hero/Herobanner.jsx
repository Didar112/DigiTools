import React from 'react';
import bannerImg from "../../assets/products/banner.png"
import grpIcon from "../../assets/products/Group.png"
import { CiPlay1 } from "react-icons/ci";


const Herobanner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
        <div className="badge badge-soft badge-primary p-4 rounded-full">
            <img src={grpIcon} alt="" />New: AI-Powered Tools Available</div>
      <h1 className="text-5xl mt-3 font-extrabold text-[72px]">Supercharge Your Digital Workflow</h1>
      <p className="py-6 font-normal text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today.
<br />
Explore Products
      </p>
      <button className="mr-2 btn btn-primary rounded-full">Explore Products</button>
      <button className="btn btn-outline btn-primary rounded-full"><CiPlay1 /> Watch Demo</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Herobanner;
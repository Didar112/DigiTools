import React from 'react';
import bannerImg from "../../assets/products/banner.png"
import grpIcon from "../../assets/products/Group.png"

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
      <h1 className="text-5xl font-extrabold text-[72px]">Supercharge Your Digital Workflow</h1>
      <p className="py-6 font-normal text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.
<br />
Explore Products
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Herobanner;
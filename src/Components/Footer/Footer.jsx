import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-white px-10 pt-16 pb-6">
      <div className="container mx-auto">

  
        <div className="footer grid-cols-2 md:grid-cols-5 mb-12">


          <div className="col-span-2 md:col-span-1 max-w-xs">
            <h2 className="text-2xl font-extrabold text-white mb-3">DigiTools</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          
          <nav>
            <h6 className="footer-title text-white opacity-100">Product</h6>
            <a className="link link-hover text-gray-400 text-sm">Features</a>
            <a className="link link-hover text-gray-400 text-sm">Pricing</a>
            <a className="link link-hover text-gray-400 text-sm">Templates</a>
            <a className="link link-hover text-gray-400 text-sm">Integrations</a>
          </nav>

          <nav>
            <h6 className="footer-title text-white opacity-100">Company</h6>
            <a className="link link-hover text-gray-400 text-sm">About</a>
            <a className="link link-hover text-gray-400 text-sm">Blog</a>
            <a className="link link-hover text-gray-400 text-sm">Careers</a>
            <a className="link link-hover text-gray-400 text-sm">Press</a>
          </nav>

          <nav>
            <h6 className="footer-title text-white opacity-100">Resources</h6>
            <a className="link link-hover text-gray-400 text-sm">Documentation</a>
            <a className="link link-hover text-gray-400 text-sm">Help Center</a>
            <a className="link link-hover text-gray-400 text-sm">Community</a>
            <a className="link link-hover text-gray-400 text-sm">Contact</a>
          </nav>

      
          <div>
            <h6 className="footer-title text-white opacity-100">Social Links</h6>
            <div className="flex gap-3 mt-1">
              <a className="btn btn-circle btn-sm bg-[#ffff] border-none text-black ">
                <FaInstagram size={16} />
              </a>
              <a className="btn btn-circle btn-sm bg-[#ffff] border-none text-black ">
                <FaFacebook size={16} />
              </a>
              <a className="btn btn-circle btn-sm bg-[#ffff] border-none text-black ">
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>

        </div>

        <hr className="border-gray-700 mb-6" />

        
        <div className="footer footer-center md:footer flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="link link-hover hover:text-white">Privacy Policy</a>
            <a className="link link-hover hover:text-white">Terms of Service</a>
            <a className="link link-hover hover:text-white">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
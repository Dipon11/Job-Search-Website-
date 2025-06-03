import React from "react";
import logo from '../assets/jobhub-logo.svg'
import { FaAppStoreIos } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-sm text-gray-700">
        <div>
          <img className="w-30 mb-5" src={logo} alt="" />
          <p>
            JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#"><span>🔵</span></a>
            <a href="#"><span>🐦</span></a>
            <a href="#"><span>💼</span></a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Our Team</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Community</h3>
          <ul className="space-y-1">
            <li>Feature</li>
            <li>Pricing</li>
            <li>Credit</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick links</h3>
          <ul className="space-y-1">
            <li>iOS</li>
            <li>Android</li>
            <li>Microsoft</li>
            <li>Desktop</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Download App</h3>
          <p className="mb-2">Download our Apps and get extra 15% Discount on your first Order...!</p>
          <div className="flex gap-2">
<FaAppStoreIos />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg\" alt="Google Play\" className="w-24\" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 text-center text-xs text-gray-500 py-4">
        <p>Copyright © 2022. JobBox all right reserved</p>
        <div className="flex justify-center gap-6 mt-2">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

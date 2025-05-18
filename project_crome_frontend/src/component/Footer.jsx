import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaYoutube, FaFacebookF, FaSquareInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-stone-800 text-white p-6 md:p-12 flex flex-col md:flex-row gap-10 md:gap-6">
      {/* Left Section */}
      <div className="md:w-1/4 flex flex-col gap-6">
        <h4 className="font-extrabold text-lg">CONNECT WITH US</h4>
        <div className="bg-white w-full md:w-60 h-12 rounded-lg text-teal-700 flex items-center px-4">
          <input
            type="text"
            placeholder="Enter Email ID"
            onClick={(e) => (e.target.style.outline = "none")}
            className="flex-1 bg-transparent focus:outline-none"
          />
          <BsArrowRight className="w-6 h-6" />
        </div>
        <div className="flex gap-4">
          <FaYoutube className="size-6 hover:text-emerald-600" />
          <FaFacebookF className="size-6 hover:text-emerald-600" />
          <FaSquareInstagram className="size-6 hover:text-emerald-600" />
          <FaLinkedinIn className="size-6 hover:text-emerald-600" />
          <FaTwitter className="size-6 hover:text-emerald-600" />
        </div>
        <p className="text-sm">
          © Copyright 2025 Croma. All rights reserved
        </p>
      </div>

      {/* Middle Columns */}
      <div className="flex flex-wrap gap-10 md:gap-16 border-t md:border-t-0 md:border-l-2 border-white pl-0 md:pl-6 pt-6 md:pt-0">
        {/* Column 1 */}
        <ul className="space-y-2 text-sm font-bold leading-6 w-44">
          {[
            "Useful Links About Croma",
            "Help And Support",
            "FAQs",
            "Buying Guide",
            "Return Policy",
            "B2B Orders",
            "Store Locator",
            "E-Waste",
            "Franchise Opportunity",
          ].map((item) => (
            <li key={item} className="hover:text-emerald-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Column 2 */}
        <ul className="space-y-2 text-sm font-bold leading-6 w-44">
          {[
            "Site Map",
            "Careers At Croma",
            "Terms of Use",
            "Disclaimer",
            "Privacy Policy",
            "Unboxed",
            "Gift Card",
            "Croma E-Star",
          ].map((item) => (
            <li key={item} className="hover:text-emerald-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Column 3 */}
        <ul className="space-y-2 text-sm font-bold leading-6 w-44">
          {[
            "Products",
            "Televisions & Accessories",
            "Computers & Tablets",
            "Home Appliances",
            "Phones & Wearables",
            "Kitchen Appliances",
            "Audio & Video",
            "EHealth & Fitness",
          ].map((item) => (
            <li key={item} className="hover:text-emerald-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Column 4 */}
        <ul className="space-y-2 text-sm font-bold leading-6 w-44">
          {[
            "Grooming & Personal Care",
            "Cameras & Accessories",
            "Smart Devices",
            "Gaming",
            "Accessories",
            "Top Brands",
          ].map((item) => (
            <li key={item} className="hover:text-emerald-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import Croma_logo from "../assets/croma_logo.jpeg";
import { FiMenu, FiSearch } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { LuCrown } from "react-icons/lu";
import { GiLaurelsTrophy } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { PiGpsFixLight } from "react-icons/pi";
import { LuContactRound } from "react-icons/lu";
import { TiContacts } from "react-icons/ti";
import { BsBoxSeam } from "react-icons/bs";
import { PiMedalLight } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";
import { PiDevices } from "react-icons/pi";
import { TbMessageX } from "react-icons/tb";
import { ImSwitch } from "react-icons/im";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [location, setLocation] = useState(false);
  const [profile, setProfile] = useState(false);

  const subCategoryData = {
    "Top & Brand": ["All Top Brand"],
    "Television & Accessories": [
      "LED TVs",
      "Smart TVs",
      "TV Mounts",
      "TV Remotes",
    ],
    "Home Appliance": [
      "Air Conditioners",
      "Refrigerators",
      "Washing Machines",
      "Microwaves",
    ],
    "Phones & Wearables": [
      "Smartphones",
      "Smartwatches",
      "Fitness Bands",
      "Chargers",
    ],
    "Computer & Tablets": ["Laptops", "Desktops", "Tablets", "Monitors"],
    "Kitchen Appliances": ["Microwaves", "Juicers", "Mixers", "Grinders"],
    "Audio & Video": ["Bluetooth Speakers", "Soundbars", "Headphones"],
    "Health & Fitness": ["Massagers", "BP Monitors", "Weighing Scales"],
    "Grooming & Personal Care": ["Trimmers", "Hair Dryers", "Electric Shavers"],
    "Camera & Accessories": ["DSLR", "Mirrorless", "Lenses", "Tripods"],
    "Smart Devices": ["Smart Lights", "Smart Plugs", "CCTV Cameras"],
    Gaming: ["Gaming Consoles", "Controllers", "Gaming Monitors"],
    Accessories: ["Cables", "Adapters", "Batteries", "Covers"],
    ZipCare: ["Extended Warranty", "Repair Plans", "Annual Maintenance"],
  };

  return (
    <>
      {/* Backdrop Blur */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-opacity-100 backdrop-blur-sm z-[900]"
          onClick={() => {
            setMenuOpen(false);
            setHoveredCategory(null);
          }}
        ></div>
      )}

      {/* Main Navbar */}
      <div className="bg-black flex flex-wrap items-center justify-evenly px-4 py-2 md:px-10 gap-3  z-[1000] fixed w-full">
        {/* Logo and Menu */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="w-[150px] h-[70px] overflow-hidden rounded-md bg-black border border-black">
            <img
              src={Croma_logo}
              alt="Croma Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="text-white flex gap-2 items-center cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? (
              <FiMenu className="text-white text-xl" />
            ) : (
              <RxCross1 className="text-white text-xl" />
            )}
            <p className="font-bold hidden sm:block text-sm">Menu</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white w-full md:w-[400px] h-10 flex items-center px-4 rounded-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full text-teal-700 text-base outline-none"
          />
          <FiSearch className="text-xl text-teal-800" />
        </div>

        {/* Location and Icons */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-between text-white">
          <div
            className="flex items-center gap-1 text-2xl cursor-pointer"
            onClick={() => setLocation(true)}
          >
            <FaLocationDot className="text-2xl" />
            <p className="text-sm">Location</p>
            <HiPencil />
          </div>
          <IoIosContact
            className="text-3xl bg-black text-white rounded-full"
            onMouseEnter={() => setProfile(true)}
            onClick={() => navigate("/my-account")}
          />
          <PiShoppingCartSimpleFill className="text-white text-2xl" />
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <>
          {/* Left Dropdown */}
          <div
            className="absolute top-[85px] left-45 w-[380px] h-[85vh] z-[1001] shadow-lg bg-gray-950 rounded-md overflow-y-auto"
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="bg-stone-700 pl-4 pr-4">
              <div className="flex text-white items-center gap-6 border-b h-13 hover:bg-green-600">
                <LuCrown className="text-2xl" />
                <h3>Exclusive At Croma</h3>
              </div>
              <div
                className="flex text-white items-center gap-6 border-b h-13 hover:bg-green-600"
                onMouseEnter={() => setHoveredCategory("Top & Brand")}
              >
                <GiLaurelsTrophy className="text-2xl" />
                <h3>Top Brands</h3>
                <MdKeyboardArrowRight className="text-3xl ml-auto" />
              </div>
              <div className="flex text-white items-center gap-6 border-b h-13 hover:bg-green-600">
                <AiFillShop className="text-2xl" />
                <h3>Croma Store Locator</h3>
              </div>
              <div className="flex text-white items-center gap-6 h-13 hover:bg-green-600">
                <MdOutlineCardGiftcard className="text-2xl" />
                <h3>Gift Card</h3>
              </div>
            </div>

            {/* Category List */}
            <div className="pl-4 pr-4">
              <div className="text-white font-bold h-10 flex items-center">
                <h3>Shop by Category</h3>
              </div>

              {Object.keys(subCategoryData).map((category, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCategory(category)}
                  className="flex justify-between items-center text-white h-12 px-2 hover:bg-green-600 cursor-pointer"
                >
                  <h3>{category}</h3>
                  <MdKeyboardArrowRight className="text-3xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Subcategory Dropdown */}
          {hoveredCategory && (
            <div className="absolute top-[85px] left-[560px] w-[380px] h-[85vh] z-[1001] shadow-lg bg-gray-950 rounded-md overflow-y-auto">
              <div className="p-4 text-white">
                <h3 className="font-bold mb-3">{hoveredCategory}</h3>
                {subCategoryData[hoveredCategory].map((subItem, idx) => (
                  <div
                    key={idx}
                    className="py-2 px-2 hover:bg-green-600 rounded cursor-pointer"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {location && (
        <>
          {/* Left Dropdown */}
          <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm z-[900] flex items-center justify-center">
            <div className="relative w-[500px] h-[55vh] bg-stone-900 rounded-md shadow-lg z-[1001] text-center text-white p-15">
              <RxCross1
                className="text-white text-xl absolute top-4 right-4 cursor-pointer"
                onClick={() => setLocation(false)}
              />
              <h1 className="font-bold text-xl font-stretch-120% mb-2">
                SELECT YOUR LOCATION
              </h1>
              <h3>
                To Check Products & Delivery Options available at your location
              </h3>
              <div className="w-[100%] border-1 border-white h-12 mt-4">
                <input type="text" className="text-white w-full h-full pl-4" />
              </div>
              <div className="w-[100%] border-1 border-white h-12 mt-4 flex items-center pl-4 mb-2">
                <PiGpsFixLight className="text-2xl" />
                <input
                  type="text"
                  className="text-white w-full h-full pl-4"
                  placeholder="Get Current Location"
                />
              </div>
              <h2 className="mb-2">OR</h2>
              <div className="w-[100%] border-1 border-white h-10 mt-4 flex items-center justify-center rounded-lg">
                Sign in to select address
              </div>
              <button className="w-[100%] border-1 border-white h-10 mt-4 rounded-lg bg-green-300 text-black">
                Continue
              </button>
            </div>
          </div>
        </>
      )}

      {profile && (
        <div
          className="absolute top-[85px] right-15 w-[350px] h-[70vh] z-[1001] shadow-lg bg-stone-900 rounded-md overflow-y-auto p-5"
          onMouseLeave={() => setProfile(false)}
        >
          <div
            className="flex text-white gap-6 items-center mb-5 hover:cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <LuContactRound className="text-white text-3xl" />
            <div>
              <h1 className="font-extrabold text-lg">My Profile</h1>
              <p className="text-sm mt-1 mb-1">Edit you basic details</p>
            </div>
          </div>

          <div className="flex text-white gap-6 items-center mb-5 hover:cursor-pointer">
            <TiContacts className="text-white text-4xl" />
            <div>
              <h1 className="font-extrabold text-lg">My Address</h1>
              <p className="text-sm mt-1 mb-1">Manage your saved address</p>
            </div>
          </div>

          <div className="flex text-white gap-6 items-center mb-5 hover:cursor-pointer">
            <BsBoxSeam className="text-white text-3xl" />
            <div>
              <h1 className="font-extrabold text-lg">My Orders</h1>
              <p className="text-sm mt-1 mb-1">
                view,track,cancel orders and buy again
              </p>
            </div>
          </div>

          <div className="flex text-white gap-6 items-center mb-5 hover:cursor-pointer">
            <PiMedalLight className="text-white text-4xl" />
            <div>
              <h1 className="font-extrabold text-lg">My Privilege Offers</h1>
              <p className="text-sm mt-1 mb-1">Exclusive offers for you</p>
            </div>
          </div>

          <div className="flex text-white gap-6 items-center mb-5 hover:cursor-pointer">
            <SlHeart className="text-white text-3xl" />
            <div>
              <h1 className="font-extrabold text-lg">My Wishlist</h1>
              <p className="text-sm mt-1 mb-1">
                Have a look at your favourite products
              </p>
            </div>
          </div>

          <div className="flex text-white gap-6 items-center mb-5 hover:cursor-pointer">
            <PiDevices className="text-white text-3xl" />
            <div>
              <h1 className="font-extrabold text-lg">My Device & Plans</h1>
              <p className="text-sm mt-1 mb-1">Manage your device and plans</p>
            </div>
          </div>

          <div className="flex text-white gap-6 items-center mb-5 hover:cursor-pointer">
            <TbMessageX className="text-white text-3xl" />
            <div>
              <h1 className="font-extrabold text-lg">My Services Requests</h1>
              <p className="text-sm mt-1 mb-1">
                Manage complaints,feedback,services requests
              </p>
            </div>
          </div>

          <div className="flex text-white gap-6 items-center mb-5 hover:cursor-pointer">
            <ImSwitch className="text-white text-3xl" />
            <div>
              <h1 className="font-extrabold text-lg">Login</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

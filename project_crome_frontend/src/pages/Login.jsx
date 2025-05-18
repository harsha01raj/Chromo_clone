import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center bg-stone-800 bg-opacity-90 backdrop-blur-xl fixed inset-0 z-50">
      <div className="w-[35rem] h-[25rem] bg-black rounded-lg p-6 relative ">
        {/* Close Icon */}
        <div className="absolute top-4 right-4 cursor-pointer">
          <RxCross1
            className="text-white text-2xl hover:text-red-500"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Your login content can go here */}
        <div className="flex text-white justify-center items-center gap-8 border-1 border-stone-500 pb-13 w-100 m-auto h-12 mt-10">
          <p className="text-white text-xl  text-center mt-12">Login</p>
          <div className="text-white text-sm text-center mt-12">OR</div>
          <p className="text-white text-xl  text-center mt-12">
            Create Account
          </p>
        </div>

        <p className="text-white text-center mt-5 mb-5">
          Please enter your Email ID or Phone number
        </p>
        <div className="border-1 border-white h-13 w-100 m-auto">
          <input
            type="text"
            placeholder="Enter your Email ID or phone number"
            className="w-full h-full text-stone-100 text-xl outline-none focus:outline-none border-none"
          />
        </div>

        <div className="flex justify-center mt-5">
          <input type="checkbox" className="w-10 h-6" />
          <p className="text-white">Keep me in signed in</p>
        </div>
        <p className="text-white text-[12px] flex justify-center mt-5">
          By continuing you agree to our &nbsp;
          <span className="text-emerald-500 underline">
            {" "}
            Terms of Use{" "}
          </span>{" "}
          &nbsp;& &nbsp;
          <span className="text-emerald-500 underline"> Privacy Policy</span>
        </p>

        <button className="bg-emerald-500 w-[75%] flex justify-center m-auto h-10 items-center mt-5 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Login;

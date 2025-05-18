import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-[120vh] bg-black text-white p-50 ">
      <div className="h-[80vh] w-[800px]  m-auto">
        <h1 className="text-3xl pl-10 mb-5">My Profile Page</h1>
        <div className="flex justify-around">
          <div>
            <label htmlFor="">Title</label>
            <br />
            <select
              name=""
              id=""
              className="border-2 border-white w-80 h-12 rounded-lg pl-5 text-stone-400 mt-2"
            >
              <option value="">Choose Your Gender</option>
              <option value="">Mr</option>
              <option value="">Mrs</option>
              <option value="">Miss</option>
              <option value="">Ms</option>
              <option value="">Dr</option>
              <option value="">Prof</option>
            </select>
          </div>
          <div>
            <label htmlFor="">First Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter First Name"
              className="border-2 border-white w-80 h-12 rounded-lg pl-5 mt-2"
            />
          </div>
        </div>

        <div className="flex justify-around">
          <div className="mt-10">
            <label htmlFor="">Middle Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter First Name"
              className="border-2 border-white w-80 h-12 rounded-lg pl-5 mt-2"
            />
          </div>

          <div className="mt-10">
            <label htmlFor="">Last Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter First Name"
              className="border-2 border-white w-80 h-12 rounded-lg pl-5 mt-2"
            />
          </div>
        </div>

        <div className="flex justify-evenly mt-10">
          <div className="flex gap-2">
            <input type="radio" />
            <h1 className="text-lg">Female</h1>
          </div>
          <div className="flex gap-2">
            <input type="radio" />
            <h1 className="text-lg">Male</h1>
          </div>
          <div className="flex gap-2">
            <input type="radio" />
            <h1 className="text-lg">Transgender</h1>
          </div>
          <div className="flex gap-2">
            <input type="radio" />
            <h1 className="test-lg">I’d rather not say</h1>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="mt-5">
            <label htmlFor="">Mobile Number*</label>
            <br />
            <input
              type="text"
              placeholder="Enter First Name"
              className="border-2 border-white w-80 h-12 rounded-lg pl-5 mt-2"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="">Email Id*</label>
            <br />
            <input
              type="text"
              placeholder="Enter First Name"
              className="border-2 border-white w-80 h-12 rounded-lg pl-5 mt-2"
            />
          </div>
        </div>

        <div className="flex justify-around">
          <div className="mt-10">
            <label htmlFor="">Date of Birth</label>
            <br />
            <input
              type="text"
              placeholder="Enter First Name"
              className="border-2 border-white w-80 h-12 rounded-lg pl-5 mt-2"
            />
          </div>

          <div className="mt-10">
            <label htmlFor="">Date of Anniversary</label>
            <br />
            <input
              type="text"
              placeholder="Enter First Name"
              className="border-2 border-white w-80 h-12 rounded-lg pl-5 mt-2"
            />
          </div>
        </div>


        <div className="w-100 m-auto flex justify-evenly mt-10 mb-10">
            <button className="border-2 border-white p-3 rounded-md">DISCARD CHANGES</button>
            <button className="border-2 border-white p-3 bg-emerald-500 text-black font-bold rounded-md">SAVE CHANGES</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

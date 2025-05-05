import React from "react";
import formImage from '../assets/form.png'
import Carousal from "./Carousal";

const Signup = () => {
  return (
    <div className="flex justify-center items-center w-full h-fit px-5 py-5">
      <div className="xl:max-w-7xl drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          
          <Carousal/>
          
        </div>
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
            Create Account
          </h1>
          <div className="w-full mt-5 sm:mt-8">
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="input input-bordered input-primary w-full max-w-xs text-white placeholder:text-white/70"
                />
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="input input-bordered input-primary w-full max-w-xs text-white placeholder:text-white/70"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered input-primary w-full text-white placeholder:text-white/70"
              />
              <input
                type="Password"
                placeholder="Enter Your Password"
                className="input input-bordered input-primary w-full text-white placeholder:text-white/70"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter Your Phone No"
                  className="input input-bordered input-primary w-full text-white placeholder:text-white/70"
                />
                <input
                  type="number"
                  placeholder="Enter Your Age"
                  className="input input-bordered input-primary w-full text-white placeholder:text-white/70"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <select defaultValue="" className="select select-primary">
                  <option value="" disabled>
                    Please select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter skills"
                  className="input input-bordered input-primary w-full text-white placeholder:text-white/70"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="flex items-center w-50 block mb-2 text-sm text-white">
                  Upload your photo
                </label>
                <input type="file" className="file-input w-full file-input-primary" />
              </div>
              
              <div className="flex items-center gap-1.5  justify-start pl-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox-xs checkbox-primary"
                    />
                  </label>
                </div>
                <h3 className="flex items-center whitespace-nowrap text-xs text-white">
                  I agree to the
                  <span className="text-[#71d1fe]">&nbsp;Terms</span>
                  &nbsp;and
                  <span className="text-[#71d1fe]">&nbsp;Privacy Policy</span>.
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button className="btn btn-active btn-primary btn-block">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

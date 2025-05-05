import React, { useState } from "react";
import Carousal from "./Carousal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";
import { BASE_URL } from "../constants/base-constant";
import { useNavigate } from "react-router-dom";

function Login() {

  const [emailId, setEmailId] = useState('anuragsatna1998@gmail.com');
  const [password, setPassword] = useState('Anurag@1998');
  const [error, setError] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = async()=>{
    try {
      const res = await axios.post(`${BASE_URL}/login`, {
        email: emailId, password
      }, {
        withCredentials: true
      })
      dispatch(addUser(res.data?.data));
      return navigate('/');
    } catch (error) {
      setError(error?.response?.data)
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-fit px-5 py-5">
      <div className="xl:max-w-7xl drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          <Carousal />
        </div>
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
            Login to DevTinder
          </h1>
          <div className="w-full mt-5 sm:mt-8">
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <label className="input input-bordered input-primary w-full text-white placeholder:text-white/70">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="input"
                  required
                  placeholder="Email"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minlength="3"
                  maxlength="30"
                  title="Only letters, numbers or dash"
                  value={emailId}
                  onChange={(e)=>setEmailId(e.target.value)}
                />
              </label>

              <label className="input input-bordered input-primary w-full text-white placeholder:text-white/70">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  minlength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </label>
              <p className="text-red-500">{error}</p>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button className="btn btn-active btn-primary btn-block" onClick={handleLogin}>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import User from "./User";
import { BASE_URL } from "../constants/base-constant";
import axios from "axios";

const Requests = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const req = await axios.get(`${BASE_URL}/user/requests`, {
        withCredentials: true,
      });
      const data = req.data?.data;
      console.log(data);
      setRequests(data);
      console.log("Requests--->", data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserAction = async (action, id, index) => {
    try {
      await axios.post(
        `${BASE_URL}/request/review/${action}/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      let newRequests = [...requests]
      newRequests.splice(index, 1)
      setRequests(newRequests)
    } catch (error) {}
    console.log(id);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (requests.length) {
    return (
      <>
        <div className="flex justify-center my-10">
          <h1 className="text-bold text-2xl">Connection Requests</h1>
        </div>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Requests Recieved
          </li>
          {requests && requests?.map((con, i) => (
            <li key={i} className="list-row mt-1 bg-base-300">
              <User
                index={i}
                request={con}
                onButtonClick={handleUserAction}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
  else {
    return  <>
    <div className="flex justify-center my-10">
      <h1 className="text-bold text-2xl">Connection Requests</h1>
    </div>
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        No New Connection Request
      </li>
    </ul>
  </>
  }
};

export default Requests;

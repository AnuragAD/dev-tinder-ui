import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/base-constant";
import User from "./User";

const Connections = () => {
  const [connections, setConnections] = useState([]);

  const fetchConnections = async () => {
    try {
      const connection = await axios.get(BASE_URL + "/conections", {
        withCredentials: true,
      });
      console.log(connection.data);
      setConnections(connection.data?.data);
    } catch (error) {}
  };

  const handleUserAction = (action, id, index) => {
    console.log(action);
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (connections.length) {
    return (
      <>
        <div className="flex justify-center my-10">
          <h1 className="text-bold text-2xl">My Connections</h1>
        </div>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Your Connections
          </li>
          {connections?.map((con, i) => (
            <li key={i} className="list-row mt-1">
              <User index={i} request={con} onButtonClick={handleUserAction} />
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-center my-10">
          <h1 className="text-bold text-2xl">My Connections</h1>
        </div>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            No Connection Found
          </li>
        </ul>
      </>
    );
  }
};

export default Connections;

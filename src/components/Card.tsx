import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../constants/base-constant";

const Card = ({ feed, index }) => {
  const { _id, firstName, lastName, photoUrl, skills, age, gender } = feed;

  const handleOnClick = async (status) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${_id}`,{},
        {
          withCredentials: true,
        }
      );

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="card w-100 h-[500px] bg-base-300 shadow-xl absolute select-none">
      <figure>
        <img
          src={photoUrl}
          alt="Profile photo"
          loading="lazy"
          className="w-[600px] h-[400px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-center">
          {firstName + " " + lastName}
        </h2>
        <div className="flex w-full">
          <div className="w-1/2 text-left">Age: {age}</div>
          <div className="w-1/2 text-left"> Gender: {gender}</div>
        </div>
        <p>Skills: {skills.join(", ")}</p>
        <div className="flex gap-35">
          <button
            className="btn btn-secondary flex justify-end item-end"
            onClick={() => handleOnClick("ignored")}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary justify-start"
            onClick={() => handleOnClick("intrested")}
          >
            Intrested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

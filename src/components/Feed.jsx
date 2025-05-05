import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/base-constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/slices/feedSlice";
import Card from "./Card";

const Feeds = () => {
  const feeds = useSelector((store) => store.feed);
  console.log(feeds);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feeds) return;
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="relative w-full h-[380px] flex justify-center items-center mt-20">
      {feeds &&
        feeds.map((feed, index) => (
          <Card feed={feed} index={index}/>
        ))}
    </div>
  );
};

export default Feeds;

import React, { useState } from "react";

const TrendingBox = ({ image, index }) => {

  return (
    <div className="relative flex-shrink-0 hover:scale-105 transition-all duration-300 cursor-pointer">
      <img className="w-28 h-60 rounded-2xl object-cover" src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" />
      <div
        className="absolute top-5 left-0 -translate-x-6 text-8xl font-bold text-black"
        style={{ WebkitTextStroke: "2px white" }}
      >
        {index + 1}
      </div>
    </div>
  );
};

export default TrendingBox;

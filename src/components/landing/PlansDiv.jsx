import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PlansDiv = ({ name, quality, text1, text2, text3, amount, color }) => {
    const gradientClass =
    color === "purple"
      ? "from-stone-950 via-pink-950 to-fuchsia-900 hover:from-stone-950 hover:via-pink-900 hover:to-fuchsia-800"
      : "from-stone-950 via-blue-950 to-blue-900 hover:from-stone-950 hover:via-blue-900 hover:to-blue-800";
  return (
    <div
    className={`bg-gradient-to-tl ${gradientClass}
    rounded-2xl border-2 cursor-pointer border-white border-opacity-30 
    pt-8 pb-4 px-4 flex-1 hover:scale-105 transition-all duration-500`}
  >
      <h1 className="text-2xl font-bold text-white mb-2">{name}</h1>
      <h3 className="text-xl text-gray-400 font-semibold mb-2">{quality}</h3>
      <p className="text-gray-400 text-sm mb-1">
        <FontAwesomeIcon className="text-gray-200 mr-1" icon={faCheck} />{" "}
        {text1}
      </p>
      <p className="text-gray-400 text-sm mb-1">
        <FontAwesomeIcon className="text-gray-200 mr-1" icon={faCheck} />{" "}
        {text2}
      </p>
      {text3 && (
        <p className="text-gray-400 text-sm mb-1">
          <FontAwesomeIcon className="text-gray-200 mr-1" icon={faCheck} />{" "}
          {text3}
        </p>
      )}
      <h2 className="text-xl font-semibold text-gray-400 mt-10">
        ₹ {amount} /mo
      </h2>
    </div>
  );
};

export default PlansDiv;

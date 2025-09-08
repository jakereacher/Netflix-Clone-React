import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RedButton = ({ name }) => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate("/login")} className="bg-red-600 px-7 py-3 rounded-full text-2xl font-bold">
        {name} <FontAwesomeIcon className="px-4" icon={faChevronRight} />
      </button>
    </>
  );
};

export default RedButton;

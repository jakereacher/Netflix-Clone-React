import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";

const QuestionsDiv = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ansDiv = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        onClick={ansDiv}
        className="flex justify-between items-center bg-zinc-800 hover:bg-zinc-700 cursor-pointer p-6 rounded-2xl border border-zinc-600 my-2"
      >
        <h1 className="text-xl font-semibold">{question} </h1>
        <FontAwesomeIcon className="text-2xl" icon={isOpen ? faX : faPlus} />
      </div>

      {isOpen && (
        <div className="bg-zinc-800 animate-fade-in-down cursor-pointer p-6 rounded-2xl border border-zinc-600">
          <h1 className="text-xl font-semibold">{answer}</h1>
        </div>
      )}
    </div>
  );
};

export default QuestionsDiv;

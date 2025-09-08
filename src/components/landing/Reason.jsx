import React from "react";
import ReasonDiv from "./ReasonDiv";

const Reason = () => {
  const reasonsData = [
    {
      hedding: "Enjoy on your TV",
      text: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      index: 1,
    },
    {
      hedding: "Download your shows to watch offline",
      text: "Save your favourites easily and always have something to watch.",
      index: 2,
    },
    {
      hedding: "Watch everywhere",
      text: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      index: 3,
    },
    {
      hedding: "Create profiles for kids",
      text: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      index: 4,
    },
  ];
  return (
    <div className="mt-5 lg:mt-14 z-10 relative">
      <h1 className="text-3xl font-bold text-white mb-4">
        More reasons to join
      </h1>
      <div className="flex gap-4">
        {reasonsData.map((item, i) => (
          <ReasonDiv
            key={i}
            hedding={item.hedding}
            text={item.text}
            index={item.index}
          />
        ))}
      </div>
    </div>
  );
};

export default Reason;

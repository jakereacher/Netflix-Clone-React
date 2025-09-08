import React from "react";
import PlansDiv from "./PlansDiv";

const Plans = () => {
  const plansData = [
    {
      name: "Mobile",
      quality: "480p",
      text1: "Fair video quality",
      text2: "For your phone or tablet",
      amount: 149,
    },
    {
      name: "Basic",
      quality: "720p",
      text1: "Good video quality",
      text2: "For your phone, tablet, laptop and TV",
      amount: 199,
    },
    {
      name: "Standerd",
      quality: "1080p",
      text1: "Great video quality",
      text2: "For your phone, tablet, laptop and TV",
      amount: 499,
      color: "purple",
    },
    {
      name: "Premium",
      quality: "4K + HDR",
      text1: "Best video quality",
      text2: "Immersive sound (spatial audio)",
      text3: "For your phone, tablet, laptop and TV",
      amount: 649,
      color: "purple",
    },
  ];

  return (
    <div className="mt-5 lg:mt-14 z-10 relative">
      <h1 className="text-3xl font-bold text-white mb-4">
        A plan to suit your needs
      </h1>

      <div className="flex gap-4 flex-wrap">
        {plansData.map((plan, i) => (
          <PlansDiv
            key={i}
            name={plan.name}
            quality={plan.quality}
            text1={plan.text1}
            text2={plan.text2}
            text3={plan.text3}
            amount={plan.amount}
            color={plan.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;

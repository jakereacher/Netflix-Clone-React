import React from "react";
import RedButton from "../Buttons/RedButton";


const Hero = () => {
  return (
    <div className="relative netflix-bg mx-[36px] lg:mx-[46px] px-20 pb-20 rounded-2xl overflow-hidden pt-44 border-2 border-white border-opacity-20">
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-500/50 to-transparent z-0" />
      <div className="relative z-10 mx-24 md:mx-28 lg:mx-80">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center leading-normal">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-sm md:text-xl text-center mt-2 mb-6">
          Starts at ₹149. Cancel at any time.{" "}
        </p>
        <div>
          <p className="text-center sm:hidden lg:block lg:text-md ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-center gap-1 pt-0 md:pt-4">
            <input
              className="bg-gray-400/50 text-gray-300 border border-gray-400 sm:hidden lg:block p-4 rounded-full flex-1"
              type="text"
              placeholder="Email address"
            />
            <RedButton name={"Get Started"} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;

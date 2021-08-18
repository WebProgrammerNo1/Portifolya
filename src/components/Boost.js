import React from "react";
import backgroundMobile from "../images/bg-boost-mobile.svg";
import backgroundDesktop from "../images/bg-boost-desktop.svg";

const Boost = () => {
  const checkScreenWidth = () => {
    if (typeof window !== `undefined`) {
      return window.innerWidth > 1024;
    }
  };

  return (
    <div
      className="flex flex-col w-full  bg-darkViolet bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${
          checkScreenWidth() ? backgroundDesktop : backgroundMobile
        })`,
      }}
    >
      <span className="pt-20 text-3xl text-white text-center font-bold">
        Boost your links today
      </span>
      <button className="mb-20 mt-6 m-auto  whitespace-nowrap inline-flex items-center justify-center lg:px-10 px-4 py-3 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-cyan hover:bg-lightCyan">
        Get started
      </button>
    </div>
  );
};

export default Boost;

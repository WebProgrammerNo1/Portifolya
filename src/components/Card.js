import React from "react";


const Card = ({ header, text, icon, index }) => {
  return (
    <div
      style={{ zIndex: "2" }}
      className={`top-${
        index * 10
      } flex flex-col max-w-sm pb-6 bg-white mx-4 rounded-md px-12 lg:relative`}
    >
      <div className="lg:absolute lg:left-8 rounded-full bg-darkViolet m-auto p-5 relative -top-10">
        <img src={icon} alt="icon" />
      </div>
      <h4 className="lg:text-left lg:pt-16 lg:top-0 relative -top-6 text-xl text-center font-bold">
        {header}
      </h4>
      <p className="lg:text-left lg:pt-4 text-gray-500 text-center">{text}</p>
    </div>
  );
};

export default Card;

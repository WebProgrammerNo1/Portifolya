import React from "react";
import Shorten from "./Shorten";
import Card from "./Card";
import detailedRecordsIcon from "../images/icon-detailed-records.svg";
import brandRecognitionIcon from "../images/icon-brand-recognition.svg";
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";

const cards = [
  {
    header: "Brand Recognition",
    text: "Brand Recognition Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: brandRecognitionIcon,
  },
  {
    header: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps you make more informed decisions.",
    icon: detailedRecordsIcon,
  },
  {
    header: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: iconFullyCustomizable,
  },
];

const Statistics = () => {
  return (
    <div className="bg-gray-100 pb-28 lg:pb-60" style={{ zIndex: "0" }}>
      <Shorten />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-2xl text-center">Advanced Statistics </h3>
        <p className="max-w-sm  pb-32 pt-6 text-md text-center text-gray-500">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="lg:flex lg:flex-row relative">
          {cards.map((card, index) => (
            <div key={card.header}>
              <Card {...card} index={index} />

              {index < cards.length - 1 ? (
                <div className="lg:hidden bg-cyan w-2 h-24 m-auto"></div>
              ) : (
                <div
                  style={{ zIndex: "1" }}
                  className="hidden lg:block bg-cyan w-8/12 h-2 m-auto absolute top-32 left-10"
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;

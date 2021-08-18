import React from "react";
import { Link } from "react-router-dom";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";

const Footer = () => {
  const items = [
    {
      name: "Features",
      links: [
        { linkName: "Link Shortening", link: "#" },
        { linkName: "Branded Links", link: "#" },
        { linkName: "Analytics", link: "#" },
      ],
    },
    {
      name: "Resources",
      links: [
        { linkName: "Blog", link: "#" },
        { linkName: "Developers", link: "#" },
        { linkName: "Support", link: "#" },
      ],
    },
    {
      name: "Company",
      links: [
        { linkName: "About", link: "#" },
        { linkName: "Our Team", link: "#" },
        { linkName: "Careers", link: "#" },
        { linkName: "Contact", link: "#" },
      ],
    },
  ];

  const icons = [
    {
      name: "Facebook",
      icon: iconFacebook,
    },
    {
      name: "Twitter",
      icon: iconTwitter,
    },
    {
      name: "Pinterest",
      icon: iconPinterest,
    },
    {
      name: "Instagram",
      icon: iconInstagram,
    },
  ];

  return (
    <div className="lg:px-28 lg:py-10 lg:flex-row flex flex-col w-full bg-gray-900 justify-between">
      <Link to="#" className=" py-12 font-bold text-4xl text-white text-center">
        Shortly
      </Link>
      <div className="lg:w-1/2 lg:flex lg:flex-row lg:items-start ">
        {items.map((item) => (
          <div
            className="lg:items-start lg:flex-nowrap lg:flex-col w-full flex flex-wrap items-center justify-center"
            key={item.name}
          >
            <h3 className="py-7 font-bold text-xl text-white">{item.name}</h3>
            {item.links.map((link) => (
              <a
                href={link.link}
                className="lg:justify-start w-full flex flex-wrap items-center justify-center"
                key={link.linkName}
              >
                <span className="pb-3 text-white">{link.linkName}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="xl:right-40 lg:relative lg:right-10 lg:flex-row lg:items-start flex space-x-7 items-center justify-center py-12">
        {icons.map((icon) => (
          <img
            key={icon.name}
            src={icon.icon}
            className="w-7 items-center justify-center"
            alt={icon.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;

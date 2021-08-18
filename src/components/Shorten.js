import React, { useState, useEffect } from "react";
import backgroundMobile from "../images/bg-shorten-mobile.svg";
import backgroundDesktop from "../images/bg-shorten-desktop.svg";
import ShortenLink from "./ShortenLink";
import LoadingSpinner from "./LoadingSpinner";

const checkScreenWidth = () => {
  if (typeof window !== `undefined`) {
    return window.innerWidth > 1024;
  }
};

const Shorten = () => {
  const [longLink, setLongLink] = useState("");
  const [linkList, setLinkList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    sessionStorage.getItem("linkList") &&
      setLinkList(JSON.parse(sessionStorage.getItem("linkList")));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("linkList", JSON.stringify(linkList));
  }, [linkList]);

  async function shortenLink(link) {
    setError(false);
    setErrorMessage("");
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      let data = await response.json();
      if (data.ok) {
        setLoading(false);
        return setLinkList((oldList) => [...oldList, data.result]);
      }
      if (!data.ok) {
        setLoading(false);
        setError(true);
        setErrorMessage(data.error.match(/^(.+?)[.,]/)[0]);
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 5000);
        return;
      }
    } catch (e) {
      setError(true);
      setErrorMessage(
        "An error occured while shortening your URL, please try again."
      );
      setLoading(false);
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
      }, 5000);
      return;
    }
  }

  return (
    <>
      <form
        className="relative -top-20 md:px-10 md:py-10 md:space-x-4 md:space-y-0 md:items-center flex flex-col md:flex-row w-10/12 m-auto p-5 rounded-lg bg-darkViolet bg-cover bg-no-repeat space-y-4"
        style={{
          backgroundImage: `url(${
            checkScreenWidth() ? backgroundDesktop : backgroundMobile
          })`,
          backgroundPosition: `60px -40px`,
        }}
      >
        <input
          type="text"
          className={` md:w-10/12 whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium placeholder-gray-400 ${
            error ? "ring-4 ring-red-500 placeholder-red-300 text-red-500" : ""
          }`}
          placeholder="Shorten a link here..."
          onChange={(e) => setLongLink(e.target.value)}
        ></input>
        {error && (
          <div className="md:absolute md:top-24 md:left-2 transition-all italic text-red-500 text-sm px-4 m-auto shadow-sm">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            shortenLink(longLink);
          }}
          className="md:w-2/12 whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-cyan hover:bg-lightCyan"
        >
          Shorten it!
        </button>
      </form>
      {linkList.map((link, index) => (
        <ShortenLink
          key={index}
          longLink={link.original_link}
          shortLink={link.short_link}
          fullShortLink={link.full_short_link}
        />
      ))}
      {loading ? (
        <section className="relative md:divide-y-0 divide-y -top-20 mt-4 md:px-10 md:py-3 md:space-x-4 md:space-y-0 md:items-center flex flex-col md:flex-row w-10/12 m-auto p-5 rounded-lg bg-white bg-cover bg-no-repeat space-y-4">
          <span className="text-gray-400">
            {`Shortening your URL. Please wait, it might take a (long) while...`}
          </span>
          <LoadingSpinner />
        </section>
      ) : null}
    </>
  );
};

export default Shorten;

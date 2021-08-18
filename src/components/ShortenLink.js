import React from "react";

const ShortenLink = ({ longLink, shortLink, fullShortLink }) => {
  return (
    <section className="relative md:divide-y-0 divide-y -top-20 mt-4 md:px-10 md:py-3 md:space-x-4 md:space-y-0 md:items-center flex flex-col md:flex-row w-10/12 m-auto p-5 rounded-lg bg-white bg-cover bg-no-repeat space-y-4">
      <div className="md:w-7/12">{longLink}</div>
      <a
        href={`${fullShortLink}`}
        className="md:text-right md:w-3/12 text-cyan pt-4 md:pt-0"
      >
        {shortLink}
      </a>
      <button
        onClick={(e) => {
          e.target.innerHTML = "Copied!";
          navigator.clipboard.writeText(fullShortLink);
          e.target.className = "btn-clicked";
          setTimeout(() => {
            e.target.innerHTML = "Copy";
            e.target.className = "btn-copy";
          }, 2000);
        }}
        className="pointer-events-auto md:w-2/12 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-cyan hover:bg-lightCyan"
      >
        Copy
      </button>
    </section>
  );
};

export default ShortenLink;

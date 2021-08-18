import LogoIllustration from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className=" bg-white w-full flex flex-wrap md:flex-nowrap pt-16 pb-32 overflow-hidden">
      <div className="lg:relative lg:left-10 z-20 px-6 flex flex-col order-1 md:order-0 pt-8 md:w-1/2 md:pl-12 md:py-12 lg:pl-24 xl:pt-32 xl:px-40">
        <h2 className="font-bold text-5xl text-center md:text-left lg:text-7xl ">
          More than just shorter links
        </h2>
        <p className="text-gray-500 text-center md:text-left text-xl mt-4 lg:pr-20">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          href="#"
          className="m-auto md:ml-0 mt-4 font-bold whitespace-nowrap inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-3xl shadow-sm text-lg text-white bg-cyan hover:bg-lightCyan"
        >
          Get Started
        </button>
      </div>

      <img
        src={LogoIllustration}
        className="order-0 w-full md:w-1/2 md:order-1 object-cover object-left xl:relative right-24"
        alt="Logo"
      />
    </div>
  );
};

export default Hero;

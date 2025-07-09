import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 px-4 py-12 md:py-12"
      // style={{
      //   background: "url('/images/hero-bg-pattern.png')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "contain",
      // }}
    >
      {/* Background Blur Glow */}
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/90 dark:bg-[#04a7ff]/50 w-full h-72 -z-10 blur-[100px]" />

      {/* Left Section - Text Content */}
      <div className="flex-1 min-w-[280px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize leading-snug">
          Building Your Dreams <br /> Creating Reality.
        </h1>

        <div className="pl-3 mt-5 border-l-4 border-primary">
          <p className="text-sm md:text-base leading-relaxed">
            We deliver innovative infrastructure solutions across residential,
            industrial, commercial, and government sectors with a focus on
            sustainability and excellence.
          </p>
        </div>

        <Link to="/contact">
          <button className="mt-6 btn btn-primary text-sm md:text-base px-5 py-2 md:px-6 md:py-2.5">
            Get Started
          </button>
        </Link>

        {/* Stats Section */}
        <div className="mt-6 flex flex-wrap sm:flex-nowrap gap-5 text-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              100 <span className="text-sm text-primary">+</span>
            </h1>
            <p className="text-[12px] sm:text-sm">Requested Projects</p>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              500 <span className="text-sm text-primary">+</span>
            </h1>
            <p className="text-[12px] sm:text-sm">Projects Completed</p>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              100 <span className="text-sm text-primary">+</span>
            </h1>
            <p className="text-[12px] sm:text-sm">Served Clients</p>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 min-w-[280px]">
        <img
          src="/images/hero-4.png"
          alt=" residancyimage"
          className="w-full max-w-[500px] mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default Hero;

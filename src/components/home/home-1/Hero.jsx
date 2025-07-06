import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="relative  flex-wrap min-h-screen gap-2  flex-center-center"
      style={{
        background: "url('/images/hero-bg-pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/40 dark:bg-[#04a7ff]/50 w-full h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 basis-[20rem]">
        <h1 className="text-4xl font-bold capitalize md:text-5xl">
          Building Your Dreams <br /> Creating reality.
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          <p>
            We deliver innovative infrastructure solutions across residential,
            industrial, commercial, and government sectors with a focus on
            sustainability and excellence.
          </p>
        </div>
        <Link to="/contact">
          <button className="mt-6 btn btn-primary">Get Started</button>
        </Link>
        <div className="mt-6 text-center flex-align-center gap-x-6">
          <div>
            <h1 className="text-2xl font-bold">
              100 <span className="text-sm text-primary">+</span>
            </h1>
            <p>Requested Projects</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              500 <span className="text-sm text-primary">+</span>
            </h1>
            <p>Projects Completed</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              100 <span className="text-sm text-primary">+</span>
            </h1>
            <p>Served Clients</p>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-[20rem]">
        <img src="/images/hero-4.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../../data/dummyData";

const WhatWeDo = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h1 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Excellence in Every Layer of Development</h1>
        <p className="text-lg">
          We specialize in delivering comprehensive infrastructure solutions across multiple <br />
          sectors, tailored to meet the unique needs of each project.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
        {services.map(({ id, name, icon, text, slug }) => (
          <div
            key={id}
            className="p-3 text-center rounded-lg group hover:card-shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark"
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white">
              <div className="text-4xl">{icon}</div>
            </div>
            <h1 className="mt-2 heading !text-xl">{name}</h1>
            <p className="mt-2 text-sm">{text}</p>
            <div className="mt-4 group-hover:flex-center-center">
              <Link to={slug} className="btn btn-primary">View More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;

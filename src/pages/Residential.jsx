// Residential Infrastructure Development Website - React + Tailwind CSS

import React from "react";
// import {
//     Feeds,

//     GetInTouch,

//   } from "../components/home/home-1";

// Sample Home Page Component
export default function Residential() {
  return (
    <div className="font-sans bg-white-300">
      {/* Hero Section */}
      <section
        className="relative bg-contain  bg-center bg-no-repeat w-full h-[400px] md:h-[400px] lg:h-[300px] flex items-center justify-center text-white"
        // style={{ backgroundImage: 'url("/images/property (39).jpg")' }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 leading-tight">
            Building <span className="text-white">Dreams, Creating</span>{" "}
            Communities
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-slate-200">
            Sustainable and Modern Residential Infrastructure Development
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-orange-400 text-center mb-10">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Market Research and Feasibility Study",
              desc: "Analyze demand, target demographics, and pricing trends.Conduct feasibility analysis (cost vs. potential return). Assess local infrastructure, employment hubs, and connectivity.",
            },

            {
              title: " Land Acquisition and Legal Due Diligence",
              desc: "Identify and acquire suitable land with clear title.Verify land use/zoning regulations and ownership documents.Check for encumbrances, environmental restrictions, or litigations.",
            },

            {
              title: "Master Planning and Concept Design",
              desc: "Develop a master plan outlining layout, roads, amenities, and green space.Prepare architectural and structural designs.Align with local development norms and user lifestyle preferences.",
            },
            {
              title: "Regulatory Approvals and Compliance",
              desc: "Secure approvals from town planning, environment, fire, and municipal authorities.Obtain building permits, water/electricity connections, and other NOCs.Comply with Real Estate Regulatory Authority (RERA) norms if applicable.",
            },
            {
              title: "Building Construction",
              desc: "Execute structural work (foundation to roofing).Proceed with brickwork, plastering, plumbing, electrical, and interiors.Monitor quality control, safety, and construction timelines.",
            },
            {
              title: "Project Management",
              desc: "Set up maintenance teams and property management.Form Residents’ Welfare Association (RWA).Maintain common amenities and handle ongoing support.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-xl rounded-2xl p-6">
              <h3 className="text-xl text-blue font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-blue">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((project) => (
            <div
              key={project}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              {/* <img src={`/project${project}.jpg`} alt={`Project ${project}`} className="w-full h-60 object-cover" /> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src="/images/property (39).jpg"
                  alt="Plot Development"
                  className="w-full h-70 object-cover"
                />
                {/* <img
                  src="/images/property (39).jpg"
                  alt="Infrastructure Work"
                  className="w-full 70 object-cover"
                /> */}
                {/*
                <img
                  src="/images/jkgb.avif"
                  alt="Electric Poles"
                  className="w-full h-70 object-cover"
                />
                <img
                  src="/images/jkgb.avif"
                  alt="Electric Poles"
                  className="w-full h-70 object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  G.E.A.L Enclave – Bengaluru
                </h3>
                <p className="text-gray-600">
                  60-acre township with roads, sewage, power and amenities built
                  from scratch.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-2xl mx-auto grid gap-4">
          <input   
            type="text"
            placeholder="Name"
            className="p-3 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded border border-gray-300"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-3 rounded border border-gray-300"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 rounded border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section> */}
      {/* <GetInTouch /> */}

      {/* <Feeds /> */}
    </div>
  );
}

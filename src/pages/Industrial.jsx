import React from "react";
import { Link } from "react-router-dom";

const Industrial = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Industrial Infrastructure</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Empowering industries with state-of-the-art facilities, strategic locations, and scalable growth infrastructure.
        </p>
      </div>

      {/* Overview */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Engineering Industrial Excellence</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At Garudavega, we provide robust industrial infrastructure tailored for heavy industries, warehouses, logistics, and
          manufacturing units. Our developments offer strategic connectivity, compliance-ready facilities, and future-proof scalability.
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Key Industrial Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "Wide Roads", icon: "🛣️", desc: "Easy movement for heavy vehicles and logistics." },
              { title: "Power Supply", icon: "⚡", desc: "High-voltage and uninterrupted electricity lines." },
              { title: "Logistics Access", icon: "🚛", desc: "Connectivity to highways, ports, and railways." },
              { title: "Water & Sewage", icon: "🚰", desc: "Industrial-grade water supply and drainage systems." },
              { title: "Zoning & Compliance", icon: "📄", desc: "Pre-approved layouts and pollution control compliant." },
              { title: "24x7 Surveillance", icon: "🎥", desc: "Security systems, fire safety and boundary fencing." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual & Description */}
      <section className="py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <img
          src= "/images/phase1.jpg"
          alt="Industrial Facility"
          className="rounded-lg shadow-lg w-full md:w-1/2"
        />
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Built for Industry 4.0</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Designed for automation, robotics, and smart manufacturing</li>
            <li>Heavy-duty flooring and large span structures</li>
            <li>Customizable layouts for warehouses and plants</li>
            <li>Located in upcoming industrial corridors and SEZ zones</li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Project Snapshots</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              "./images/phase1.jpg",
              "./images/phase1A.jpeg",
              // "./images/DJI_0216.jpg",
            ].map((src, index) => (
              <img
                key={index}
                src={`${src}?auto=format&fit=crop&w=600&q=80`}
                alt={`Industrial Project ${index + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Partner With Garudavega?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">✔ Industry-Ready Plots</h4>
            <p>Pre-approved industrial plots ready for quick construction and licensing.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">✔ Infrastructure Backed</h4>
            <p>Support infrastructure like roads, lights, telecom, and water already built-in.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">✔ Long-Term Investment</h4>
            <p>Ideal for future growth, lease opportunities, and industrial expansion plans.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gray-800 text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-3">Build Your Industry on a Strong Foundation</h2>
        <p className="mb-5">Contact us for detailed industrial layouts, pricing, and custom build-to-suit options.</p>
        <Link to="/contact">
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Schedule a Visit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Industrial;

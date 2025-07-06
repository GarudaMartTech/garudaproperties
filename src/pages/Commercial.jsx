import React from "react";
import { Link } from "react-router-dom";
const Commercial = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Commercial Infrastructure
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Creating smart, sustainable, and scalable commercial spaces to power
          modern business landscapes.
        </p>
      </div>

      {/* Overview */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Building the Future of Commerce
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          At Garudavega, we go beyond constructing buildings. We develop
          intelligent commercial ecosystems that attract businesses, customers,
          and investors alike. From shopping complexes to business hubs, we
          deliver infrastructure that empowers growth.
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Our Key Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Smart Layouts",
                icon: "🧩",
                desc: "Optimized and modular design for efficient utility.",
              },
              {
                title: "Sustainable Materials",
                icon: "♻️",
                desc: "Eco-friendly building practices and green certifications.",
              },
              {
                title: "Ample Parking",
                icon: "🚘",
                desc: "Multi-level and visitor-friendly parking zones.",
              },
              {
                title: "Retail Ready",
                icon: "🛒",
                desc: "Ideal for stores, showrooms, and franchises.",
              },
              {
                title: "Business Zones",
                icon: "🏙️",
                desc: "Corporate suites and tech-enabled office spaces.",
              },
              {
                title: "24/7 Security",
                icon: "🛡️",
                desc: "CCTV surveillance, guards, and fire-safety systems.",
              },
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
          src="images/property (18).jpg"
          alt="Commercial Space"
          className="rounded-lg shadow-lg w-full md:w-1/2"
        />
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Why Our Projects Stand Out
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Premium construction with industry-leading durability</li>
            <li>Modern architecture that reflects your brand</li>
            <li>Plug-and-play spaces for startups to MNCs</li>
            <li>Prime locations near highways and city centers</li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Project Gallery</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              "images/property (40).jpg",
              "images/property (27).jpg",
              "images/property (29).jpg",
            ].map((src, index) => (
              <img
                key={index}
                src={`${src}?auto=format&fit=crop&w=600&q=80`}
                alt={`Project ${index + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose Garudavega Commercial Projects?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">✔ Tailored to Businesses</h4>
            <p>
              Our developments are curated to meet the exacting needs of various
              industries and sectors.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">✔ End-to-End Support</h4>
            <p>
              We guide you from planning to possession with complete
              architectural and legal support.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">✔ Proven Track Record</h4>
            <p>
              Decades of experience in delivering premium infrastructure for
              businesses across regions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-3">
          Let’s Build Your Commercial Vision Together
        </h2>
        <p className="mb-5">
          Talk to our team and explore custom solutions for your business
          infrastructure needs.
        </p>
        <Link to="/schedule-visit">
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Schedule a Visit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Commercial;

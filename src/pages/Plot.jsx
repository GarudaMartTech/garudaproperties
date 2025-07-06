import React from "react";
import { Link } from "react-router-dom";

const Plot = () => {
  return (
    <div className="bg-white min-h-screen  text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600  text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Land & Plot Development</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Shaping raw landscapes into planned, approved, and ready-to-build properties for your dreams and investments.
        </p>
      </div>

      {/* Overview */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Vision for Future-Ready Plots</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At Garudavega, we develop land into fully equipped, legal, and ready-for-construction plots. Whether residential,
          commercial, or mixed-use — our plotted layouts are backed by strong infrastructure, documentation, and location advantage.
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Key Features of Our Plots</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "DTCP/RERA Approved", icon: "📜", desc: "Legally compliant with full documentation and clear titles." },
              { title: "Road Infrastructure", icon: "🛣️", desc: "30 to 60 ft wide internal roads with blacktop finish." },
              { title: "Electric & Water", icon: "💡", desc: "Power lines and water connections provisioned to each plot." },
              { title: "Drainage & Layout", icon: "🚧", desc: "Well-structured plots with stormwater and sewage channels." },
              { title: "Gated Communities", icon: "🚪", desc: "Secure perimeters and entry-exit with future amenities scope." },
              { title: "Proximity Advantage", icon: "📍", desc: "Near NH, towns, and upcoming investment zones." },
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

      {/* Image + Info */}
      <section className="py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <img
          src="images/one.jpg"
          alt="Plot Layout"
          className="rounded-lg shadow-lg w-full md:w-1/2"
        />
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Everything You Need, Already Planned</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>East/North-facing plots available with Vaastu compliance</li>
            <li>Flexible plot sizes for villas, duplexes, and townhouses</li>
            <li>Surrounded by nature, yet connected to city life</li>
            <li>Scope for parks, schools, and shops in layout plans</li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Project Gallery</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              "images/first.jpg",
              "images//third.jpg",
              "images//two.jpg",
            ].map((src, index) => (
              <img
                key={index}
                src={`${src}?auto=format&fit=crop&w=600&q=80`}
                alt={`Plot View ${index + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Garudavega Plots?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">✔ Transparent Legalities</h4>
            <p>All documents, approvals, and land titles are 100% verified and accessible.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">✔ Investment Growth</h4>
            <p>Plots in growth corridors with future appreciation potential.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">✔ Ready-to-Build</h4>
            <p>Plots delivered with infrastructure to start construction immediately.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-green-700 text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-3">Book Your Plot Today</h2>
        <p className="mb-5">Contact our team to explore location maps, pricing, and site visit options.</p>
        <Link to="/contact">
  <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
    Schedule a Visit
  </button>
</Link>
      </div>
    </div>
  );
};

export default Plot;

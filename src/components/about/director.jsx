import React from "react";
import { motion } from "framer-motion";

const directors = [
  // {
  //   name: "Mr. Venkata Ramana Revuru",
  //   // title: "Managing Director, Chairman",
  //    title: " Director",
  //   image: "/images/CMD.jpg",
  //   description:
  //     "Mr. Venkata Ramana Revuru is a seasoned business leader with over two decades of expertise in sales, business development, strategic marketing, financial products, and portfolio management. Known for his innovative and results-driven leadership, he has significantly contributed to organizational success and industry growth.",
  //   roles: [
  //     "Garuda Mart India Private Limited",
  //     "Garudayaan Logistics Private Limited",
  //     "Mangalam Industrial Finance Limited",
  //     "I Secure Credit & Capital Services Limited",
  //     "Garudavega Business Solutions Private Limited",
  //     "Garudavega Earth and Artha Lysis Private Limited",
  //   ],
  // },
  {
    name: "Mr. A D Subramanyam Swamy",
    title: "Chairman  &  Managing Director",
    image: "/images/image (2).jpg",
    description:
      "Mr. A D Subramanyam Swamy is known for his strategic insight and execution excellence. With a strong foundation in infrastructure and land development, he plays a pivotal role in steering sustainable real estate ventures under the Garudavega brand.",
    roles: ["Garudavega Earth and Artha Lyseis Private Limited"],
  },
  {
    name: "Mr. Venkata Ramana Revuru",
    // title: "Managing Director, Chairman",
     title: " CEO",
    image: "/images/mdsir.jpg",
    description:
      "Mr. Venkata Ramana Revuru is a seasoned business leader with over two decades of expertise in sales, business development, strategic marketing, financial products, and portfolio management. Known for his innovative and results-driven leadership, he has significantly contributed to organizational success and industry growth.",
    roles: [
      "Garuda Mart India Private Limited",
      "Garudayaan Logistics Private Limited",
      "Mangalam Industrial Finance Limited",
      "I Secure Credit & Capital Services Limited",
      "Garudavega Business Solutions Private Limited",
      "Garudavega Earth and Artha Lyseis Private Limited",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.2 },
  }),
};

const Director = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen ">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Meet Our Visionary Leaders
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          The driving force behind innovation, growth, and excellence across our businesses.
        </p>
      </div>

      {/* Director Cards */}
      <div className="space-y-10 w-full h-full">
        {directors.map((director, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 bg-white rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-3xl transition-all duration-500`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            {/* Director Image */}
            <div className="w-full md:w-[300px] flex justify-center">
              <img
                src={director.image}
                alt={director.name}
                className="rounded-xl w-[250px] md:w-[380px] shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Director Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                {director.name}
              </h2>
              <h4 className="text-lg font-semibold text-indigo-600 mb-4">
                {director.title}
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                {director.description}
              </p>
              <h5 className="font-semibold text-gray-800 mb-2">
                His Directorships:
              </h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {director.roles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Director;

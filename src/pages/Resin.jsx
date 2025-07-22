import React from "react";
// import { motion } from "framer-motion";
 const images = [
  { src: "/images/1a.jpg", title: "Prospera Crescent - Project Overview", description: "Discover the elegance and architectural excellence of Prospera Crescent, a premium 3 BHK apartment project in the heart of Indiranagar, Bengaluru." },
  { src: "/images/2a.jpg", title: "Location Map", description: "Strategically located with seamless connectivity to major landmarks including Old Madras Road, HAL Airport Road, and Indiranagar Metro Station." },
  { src: "/images/3.jpg", title: "Building Elevation", description: "Contemporary façade with a harmonious blend of natural elements, lush greenery, and urban design for an enhanced lifestyle." },
  { src: "/images/4.jpg", title: "Specifications", description: "Top-notch construction with RCC framed structure, branded sanitary ware, CPVC plumbing, 3-track UPVC windows, and premium floor tiling." },
  { src: "/images/5.jpg", title: "3D Flat Views", description: "Modern 3D interiors showcasing spacious living rooms, modular kitchens, elegant bedrooms, and sunlit balconies." },
  { src: "/images/6.jpg", title: "3D Flat Layout - Type A", description: "1650 SFT, 3 BHK North-facing layout designed with maximum space utilization and natural ventilation." },
  { src: "/images/7.jpg", title: "Typical Floor Plan", description: "Visual breakdown of each apartment unit per floor including carpet area, utility zones, and common passages." },
  { src: "/images/8.jpg", title: "Area Statement", description: "Project comprises 3 units per floor with options: 1650 SFT (North facing) and 1510 SFT (East facing)." },
  { src: "/images/9.jpg", title: "Project Highlights", description: "Vaastu compliant, quality construction, EV charging, branded lift, rainwater harvesting, and more premium amenities." },
  { src: "/images/10.jpg", title: "Lifestyle Experience", description: "An unmatched lifestyle with beautiful balconies, serene views, and luxury for the entire family." }
];

const Resin = () => {
   return (
    <div className="bg-white text-gray-900 font-sans">
      <header className="bg-purple-900 text-white py-8 px-4 text-center">
        <h1 className="text-xl font-bold mb-2">Prospera Crescent</h1>
        <h1 className="text-4xl font-bold mb-2">Prospera Crescent</h1>
<p className="text-lg max-w-2xl mx-auto">Elevate Your Living Experience in the Heart of Indiranagar, Bengaluru</p>
      </header>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {images.map((img, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <img src={img.src} alt={img.title} className="w-full object-cover" />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold text-purple-900 mb-2">{img.title}</h2>
                <p className="text-sm text-black-600 leading-relaxed">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Resin;

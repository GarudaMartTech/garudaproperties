// import { brands } from "../../../data/dummyData";
import { motion } from "framer-motion";
// import garudayaanLogo from "./images/graudayan.jpg";
// import gshoppiLogo from "../../images/gshoppi.jpg";
// import gplusLogo from "../../images/$RBZAQ7Z.png";

const Brands = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Promoters
        </motion.h1>
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Representing our brand with integrity, innovation, and a vision for the future. */}
          The pillars of Garuda Group trusted, driven, future-focused.
        </motion.p>
      </div>
      <div className="flex  items-center justify-center mt-4 sm:mt-10 ">
        <a
            href="https://www.garudamartindia.com/"
            target="_blank"
            rel="noreferrer"
            className="pl-5 pr-5   bg-red rounded "
          >
            <img className="w-[150px] " src="/images/003.jpg" alt="garudamart" />
          </a>
          <a
            href="https://www.garudamartindia.com/"
            target="_blank"
            rel="noreferrer"
            className="pl-5 pr-5  bg-red rounded"
          >
            <img className="w-[150px] " src="/images/001.jpg" alt="garudavega" />
          </a>
          
          {/* <a
            href="https://garudayaan.com/"
            target="_blank"
            rel="noreferrer"
            className="pl-5 pr-5  bg-white rounded"
          >
            <img className="w-[200px] " src="/images/Garudayaan1.jpeg" alt="garudayaan" />
          </a> */}
        </div>

      {/* <div className="mt-12 flex flex-wrap justify-center gap-8 px-6">
        {brands.map((image, i) => (
          <motion.div
            key={i}
            className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center  dark:bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <img
              src={image}
              alt={`Brand ${i}`}
              className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default Brands;


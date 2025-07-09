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
      <div className="flex items-center justify-center mb-10 flex-wrap gap-4 mt-4 ">
        <a
          href="https://www.garudamartindia.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-red rounded"
        >
          <img
            className="w-[100px] sm:w-[130px] md:w-[150px]"
            src="/images/003.jpg"
            alt="garudamart"
          />
        </a>

        <a
          href="https://www.garudamartindia.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-red rounded"
        >
          <img
            className="w-[100px] sm:w-[130px] md:w-[150px]"
            src="/images/001.jpg"
            alt="garudavega"
          />
        </a>
      </div>
    </div>
  );
};

export default Brands;

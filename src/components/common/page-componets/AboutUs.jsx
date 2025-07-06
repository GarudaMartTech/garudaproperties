import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutUs = () => {
  return (
    <div className="pt-16 pb-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Banner */}
      <div className="relative w-full h-[280px] md:h-[380px] rounded-lg overflow-hidden mb-12">
        <img
          src="/images/gggg.png"
          alt="About Banner"
          className="w-full h-full  object-center"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.h1
            className="text-white text-3xl md:text-5xl font-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Infrastructure. Inspiring Growth.
          </motion.h1>
        </div> */}
      </div>

      <div className="flex flex-wrap gap-12 max-w-7xl mx-auto px-4">
        {/* Image Section */}
        <motion.div
          className="relative flex-1 basis-[18rem] border dark:border-gray-700 rounded-xl shadow-md overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <img
            src="/images/property (30).jpg"
            alt="Infrastructure Project"
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src="/images/property (26).jpg"
            alt="Construction Project"
            className="absolute object-cover w-40 sm:w-60 h-60 sm:h-72 border-4 border-white dark:border-gray-900 rounded-lg -bottom-16 -right-4 sm:-right-16 shadow-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="relative flex-1 basis-[22rem] space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
        >
          <div>
            <h2 className="text-sm uppercase tracking-wide text-primary font-semibold">about us</h2>
            {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-snug">
              Building Infrastructure, Empowering Progress
            </h1> */}
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <span className="font-bold text-2xl">Garudavega Earth and Artha Laysis Pvt. Ltd.</span> is a dynamic infrastructure and development company specializing in the transformation of land into thriving ecosystems. From strategic land acquisition to residential townships, from high-impact commercial spaces to robust industrial hubs — we develop spaces that matter.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            With a team of visionary planners, civil engineers, architects, and legal experts, we are redefining infrastructure by blending aesthetics, compliance, sustainability, and value. Every square foot we build is rooted in a purpose — to serve people, power growth, and protect the future.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            Whether it's transforming raw land into plotted developments, creating high-performance logistics parks, or designing eco-conscious residential enclaves, our mission is clear: <strong>create landmark developments that stand the test of time</strong>.
          </p>

          {/* Highlights Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: <BiHomeAlt />,
                title: "Modern Residential Living",
                desc: "Crafting future-ready, community-first homes with sustainability in mind.",
              },
              {
                icon: <BiGlobe />,
                title: "Smart Industrial Zones",
                desc: "Boosting industrial growth with fully integrated smart zones and logistics corridors.",
              },
              {
                icon: <BiCreditCard />,
                title: "Transparent Land Solutions",
                desc: "From acquisition to legal clearance and layout approval — fully compliant land services.",
              },
              {
                icon: <BiGlobe />,
                title: "Commercial & Mixed-Use Projects",
                desc: "We design and build high-value business zones, retail plazas, and mixed-use communities.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-x-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i + 2}
              >
                <div className="text-primary bg-primary/20 p-3 rounded-full text-2xl dark:bg-primary/30">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          {/* <motion.div
            className="mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={6}
          >
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-primary/90 transition-all"
            >
              Let's Build Together
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
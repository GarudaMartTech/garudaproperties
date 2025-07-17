import { FiCheck, FiLayers, FiUsers } from "react-icons/fi";

const Speciality = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[20rem]">
          {/* <h1 className="sub-heading">about us</h1> */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            We specialize in modern, high-quality innovations.
          </h1>

          <p className="mt-3">
            GEAL is a fast-growing infrastructure company committed to building
            a modern, sustainable future. With expertise in residential,
            commercial, industrial, government establishments, and smart city
            projects, we bring innovation and efficiency to every development.
          </p>
          <p>
            Our team of expert engineers, architects, and project managers work
            collaboratively to ensure that every project is completed on time,
            within budget, and to the highest standards of quality and safety.
          </p>
          <div className="grid grid-cols-2 mt-4">
            <div className="flex-align-center  gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Quality Assurance</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Sustainable Practices</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Innovative Solutions</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Expert Team</p>
            </div>
            {/* <button className="mt-4 btn btn-primary">read more</button> */}
          </div>
        </div>
        <div className="flex-1 basis-[20rem]">
          <div className="relative">
            <img
              src="/images/property (5).jpg"
              alt=""
              className="rounded-lg w-full sm:h-[400px] object-cover"
            />
            <div className="absolute -bottom-10 sm:bottom-5 -left-2 md:-left-20 w-full px-4 sm:px-0">
              {/* Box 1 */}
              <div className="p-3 bg-white rounded-lg shadow-md w-full sm:w-72 flex items-center justify-between gap-3 ml-4 sm:ml-8 dark:bg-dark-light">
                <h1 className="text-sm sm:text-base leading-snug">
                  We have been serving our customers for over many years
                </h1>
                <div className="icon-box text-primary !bg-primary/20 text-lg sm:text-xl">
                  <FiUsers />
                </div>
              </div>

              {/* Box 2 */}
              <div className="p-3 mt-4 bg-white rounded-lg shadow-md w-full sm:w-72 flex items-center justify-between gap-3 ml-6 sm:ml-10 dark:bg-dark-light">
                <h1 className="text-sm sm:text-base leading-snug">
                  Working with the symbol and reputation of trustworthy trait
                </h1>
                <div className="icon-box text-primary !bg-primary/20 text-lg sm:text-xl">
                  <FiLayers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;

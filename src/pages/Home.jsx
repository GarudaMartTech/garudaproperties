import {
  Brands,
  // Counter,
  Featured,
  Projects,
  // Services,
  Testimonial,
  WhatWeDo,
} from "../components/common/page-componets";
import {
  Feeds,
  // Filters,
  Hero,
  // GetInTouch,
  // Invest,
  Speciality,
} from "../components/home/home-1";

const Home = () => {
  return (
    <div className="pt-16 px-[3%] ">
      <Hero />
      {/* <Counter /> */}
      <Speciality />
      <WhatWeDo />
      {/* <Services /> */}
      {/* <Filters /> */}

      <Featured />
      {/* <Invest /> */}
      <Projects />
      {/* <GetInTouch /> */}

      <Feeds />

      <Testimonial />
      <Brands />
    </div>
  );
};

export default Home;

import {
  AboutUs,
  // Brands,
  // Feeds,
  // Team,
  // Testimonial,
} from "../components/common/page-componets";
import { OverView, Stats } from "../components/about";

const About = () => {
  return (
    <div className="">
      <AboutUs />
      <Stats />
      <OverView />
      {/* <Team /> */}
      {/* <Testimonial /> */}
      {/* <Brands /> */}
      {/* <Feeds /> */}
    </div>
  );
};

export default About;

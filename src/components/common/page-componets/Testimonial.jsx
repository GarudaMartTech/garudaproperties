import { testimonials } from "../../../data/dummyData";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="pt-1 pb-1">
      <div className="text-center">
        {/* <h1 className="mx-auto sub-heading">testimonial</h1> */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bolding">what they're saying about our work feedback</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard {...testimonial} key={testimonial.id} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

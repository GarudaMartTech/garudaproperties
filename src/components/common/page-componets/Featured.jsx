import { useRef } from "react";
import { property } from "../../../data/dummyData";
import SingleProductCard from "./SingleProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Featured = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="pt-1 pb-1">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Proposed Construction and Development Projects
        </h1>
      </div>

      {/* Mobile Slide Arrows */}
      <div className="relative mt-8 lg:hidden">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow z-10"
        >
          <FaChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-8 scroll-smooth"
        >
          {property.slice(0, 3).map((featured) => (
            <div key={featured.id} className="min-w-[85%]">
              <SingleProductCard {...featured} />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow z-10"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-3 gap-4 mt-8">
        {property.slice(0, 3).map((featured) => (
          <SingleProductCard key={featured.id} {...featured} />
        ))}
      </div>
    </div>
  );
};

export default Featured;

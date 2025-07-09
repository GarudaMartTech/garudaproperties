import { property } from "../../../data/dummyData";
import SingleProductCard from "./SingleProductCard";

const Featured = () => {
  return (
    <div className="pt-1 pb-1">
      <div className="text-center">
        {/* <h1 className="mx-auto sub-heading">featured</h1> */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Proposed Construction and Development Projects</h1>
      </div>
      <div className="grid grid-cols-2  gap-4 mt-8">
        {property.slice(0, 3).map((featured) => (
          <SingleProductCard key={featured.id} {...featured} />
        ))}
      </div>
    </div>
  );
};

export default Featured;

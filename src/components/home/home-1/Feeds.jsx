import { feeds } from "../../../data/dummyData";
import SingleFeedCard from "../../common/page-componets/SingleFeedCard";

const Feeds = () => {
  return (
    <div className="pt-1 pb-1">
      <div className="text-center">
        {/* <h1 className="mx-auto sub-heading">blog post</h1> */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">latest newsfeeds</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4">
        {feeds.slice(0, 4).map((feed) => (
          <SingleFeedCard key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;

import { services } from "../../../data/dummyData";

const Services = () => {
  return (
    <div className="">
      <div className="text-center">
        {/* <h1 className="mx-auto sub-heading">services</h1> */}
        <h1 className="heading">Infrastructure for a Progressive Future</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 sm:grid-cols-3 md:grid-cols-5">
        {services.map(({ id, name, icon }) => (
          <div
            className="p-3 text-center rounded-lg hover:card-shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark"
            key={id}
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white">
              <div className="text-4xl hover:text-blue"> {icon}</div>
            </div>
            <h1 className="mt-2 heading !text-sm ">{name}</h1>
            {/* <p className="mt-2">{text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

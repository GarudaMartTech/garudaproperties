const Stats = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="heading">
          we specialize in quality Inovations you've just found it - we can
          realize any projects
        </h1>
        {/* <p className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum animi
          aut enim unde illum magni asperiores quidem sint autem, dolor labore
          voluptas ipsum blanditiis voluptate adipisci ducimus voluptatibus.
          Magnam, suscipit.
        </p> */}
      </div>
      <div className="flex flex-wrap gap-24 mt-8">
        <div className="relative flex-1 basis-[18rem]">
          <img
            src="/images/102.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-4/5 p-3 -translate-x-1/2 border-4 border-white rounded-lg -bottom-10 left-1/2 dark:border-main-dark bg-secondary text-slate-200">
            <div className="gap-5 flex-center-between">
              <h1 className="font-semibold">
                Come & join with G.E.A.L infrastructure
              </h1>

              <div>
                <h1 className="text-2xl font-bold text-primary">10000+</h1>
                <p>People Joined</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 basis-[22rem]">
          <p>
            we specialize in delivering high-quality innovations designed to
            enhance everyday living. Whether you're seeking smart solutions,
            reliable technology, or breakthrough ideas — you've just found what
            you’ve been looking for. We don’t just follow trends — we create
            them. With a deep commitment to excellence and a passion for
            progress, we turn your visions into reality. No matter the size or
            scope of the project, if you can imagine it, we can make it happen
          </p>
          <p className="mt-3">
            We don’t just build products — we craft intelligent solutions with purpose, precision, and passion.
          </p>
          <div className="mt-3">
            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">investiment plan</h1>
                <h1 className="font-semibold capitalize">85%</h1>
              </div>
              <div className="w-full h-5 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-4/5 h-full rounded-full bg-secondary"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">
                  consulting experience
                </h1>
                <h1 className="font-semibold capitalize">70%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-[70%] h-full bg-secondary rounded-full"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">planning</h1>
                <h1 className="font-semibold capitalize">95%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-[90%] h-full bg-secondary rounded-full"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">grow business</h1>
                <h1 className="font-semibold capitalize">90%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-[85%] h-full bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

const NewReview = () => {
  return (
    <div className="flex flex-col items-center mb-32">
      <div className="font-extrabold text-2xl lg:text-4xl">
        Love from our customers
      </div>
      <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-3 gap-y-3 lg:gap-y-0 mt-12">
        <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 py-6 px-5  w-64 flex flex-col  justify-center rounded-lg">
          <div className="">
            <img
              src="/images/home/header.jpg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="text-xl my-4 font-bold">Soumyadeep Keshri</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eaque dolor inventore dicta, cum ex pariatur nobis quia laborum
          </div>
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 py-6 px-5  w-64 flex flex-col  justify-center rounded-lg">
          <div className="">
            <img
              src="/images/home/header.jpg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="text-xl my-4 font-bold">Soumyadeep Keshri</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eaque dolor inventore dicta, cum ex pariatur nobis quia laborum
          </div>
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 py-6 px-5  w-64 flex flex-col  justify-center rounded-lg">
          <div className="">
            <img
              src="/images/home/header.jpg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="text-xl my-4 font-bold">Soumyadeep Keshri</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eaque dolor inventore dicta, cum ex pariatur nobis quia laborum
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReview;

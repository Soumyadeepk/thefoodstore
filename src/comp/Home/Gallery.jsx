const Gallery = () => {
  return (
    <div className="my-32 py-12 lg:py-32 bg-black flex flex-col items-center">
      <div className="w-4/5 ">
        <div className="text-white font-extrabold text-2xl lg:text-4xl">
          Our Food Gallery
        </div>
        <div className="flex flex-col items-center mt-4 lg:mt-20">
          <div className="lg:w-5/6 grid grid-cols-2 lg:grid-cols-3 gap-x-2 lg:gap-x-0 gap-y-3 lg:gap-y-6">
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg  w-40 lg:w-80 lg:h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg  w-40 lg:w-80 lg:h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg  w-40 lg:w-80 lg:h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg  w-40 lg:w-80 lg:h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg  w-40 lg:w-80 lg:h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg  w-40 lg:w-80 lg:h-52"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

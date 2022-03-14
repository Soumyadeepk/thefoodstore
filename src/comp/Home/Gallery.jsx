const Gallery = () => {
  return (
    <div className="my-32 py-32 bg-black flex flex-col items-center">
      <div className="w-4/5 ">
        <div className="text-white font-extrabold text-4xl">
          Our Food Gallery
        </div>
        <div className="flex flex-col items-center mt-20">
          <div className="w-5/6 grid grid-cols-3 gap-y-6">
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg w-80 h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg w-80 h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg w-80 h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg w-80 h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg w-80 h-52"
              />
            </div>
            <div className="">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="rounded-lg w-80 h-52"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

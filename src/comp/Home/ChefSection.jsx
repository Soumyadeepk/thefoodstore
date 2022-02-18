const ChefSection = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fffff"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,208C640,235,800,245,960,218.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="flex flex-col items-center pt-12 bg-black">
        <div className="">
          <img src="/images/home/chef.jpg" alt="" className="w-96 h-auto" />
        </div>
        <div className="w-1/3 flex flex-col items-center mt-12 text-white">
          <div className="text-2xl font-semibold">Chef Bakers</div>
          <div className="text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            molestiae quaerat iste quam eius tenetur fuga maxime assumenda? Hic
            ex ipsam molestias repudiandae mollitia. Quasi veritatis numquam
            optio quas suscipit.
          </div>
        </div>
        <div className="w-1/2 mt-12 flex flex-col items-center text-white">
          <div className="text-2xl italic">John Doe</div>
          <div className="italic">
            Certified degree from University of Chicago
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fffff"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,208C640,235,800,245,960,218.7C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default ChefSection;

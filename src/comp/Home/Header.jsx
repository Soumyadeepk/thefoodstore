import Button from "../../comp/Button";

const Header = () => {
  return (
    <div>
      <div className=" lg:pt-10 flex flex-col lg:flex-row items-center text-white bg-black">
        <div className="lg:w-1/2 lg:pl-32">
          <div className="heading text-2xl lg:text-7xl font-bold overflow-hidden">
            <div className="">Get the Best </div> <div> Pizza in the City</div>
          </div>
          <div className="text-lg my-4">
            Great food leads to great relationships.
          </div>
          <Button text="Explore" />
        </div>
        <div className="w-full lg:w-auto">
          <img src="/images/home/header.png" alt="" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fffff"
          fill-opacity="1"
          d="M0,256L80,266.7C160,277,320,299,480,261.3C640,224,800,128,960,96C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Header;

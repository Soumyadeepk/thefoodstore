import Button from "../../comp/Button";

const Header = () => {
  return (
    <div className="h-[90vh] w-screen flex">
      <div className="w-1/2 flex flex-col items-center justify-center h-full">
        <div className="w-2/3">
          <div className="text-6xl font-extrabold">The Food Store</div>
          <div className="pl-2 mt-4 text-lg font-medium leading-relaxed ">
            We are a cloud kitchen based on vegetarian pizza. <br /> Preferably
            the only one in the city who can serve authentic tastes without the
            involvement of meat.
          </div>
          <div className="mt-4">
            <button className="py-3 px-20 border border-black rounded transition-all duration-300 hover:font-bold hover:bg-[#EBFFE3] hover:border-[#D4FBDD]">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-full">
          <img
            src="/images/home/header.jpg"
            alt=""
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

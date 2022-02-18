import { Menu, ShoppingBag } from "react-feather";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;

  return (
    <div
      className={`flex items-center justify-around py-2 ${
        location === "/" ? "bg-black" : "bg-transparent"
      } `}
    >
      {location === "/" ? (
        <div className="w-1/2 pl-20">
          <img src="/images/logo.png" alt="" className="" />
        </div>
      ) : (
        <div className="w-1/2 pl-20">
          <img src="/images/logoBlack.png" alt="" className="" />
        </div>
      )}

      <div
        className={`w-1/2 hidden lg:flex flex-col items-center ${
          location === "/" ? "text-white" : "text-black"
        } `}
      >
        <div className=" flex w-1/2 justify-around">
          <Link to="/">
            <div className="cursor-pointer hover:text-red-700 transition-all duration-300">
              Home
            </div>
          </Link>

          <Link to="/menu">
            <div className="cursor-pointer hover:text-red-700 transition-all duration-300">
              Menu
            </div>
          </Link>
          <Link to="/about">
            <div className="cursor-pointer hover:text-red-700 transition-all duration-300">
              About
            </div>
          </Link>
          <Link to="/contact">
            <div className="cursor-pointer hover:text-red-700 transition-all duration-300">
              Contact
            </div>
          </Link>
          <Link to="/cart">
            <div className="cursor-pointer hover:text-red-700 transition-all duration-300">
              <ShoppingBag size={20} />
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:hidden w-1/2 flex flex-col items-end">
        <Menu color="white" />
      </div>
    </div>
  );
};

export default Navbar;

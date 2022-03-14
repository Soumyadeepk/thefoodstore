import { useState } from "react";
import { Menu, X, ShoppingBag } from "react-feather";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // const location = useLocation().pathname;

  const cart = useSelector((state) => state.cart);
  const cartTotal = cart.length;
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={`flex items-center justify-between h-[8vh] lg:h-[9vh] `}>
      <div className="w-1/2 pl-4 h-full pt-4">
        <Link to="/">
          <img src="/images/logoBlack.png" alt="" className="" />
        </Link>
      </div>

      <div className="w-1/2 flex flex-col items-end lg:hidden pr-4">
        <Menu onClick={() => setShowNav(true)} />
      </div>

      <div
        className={`${
          showNav ? "translate-x-0" : "translate-x-full"
        } transform lg:transform-none w-1/2 fixed top-0 right-0 h-screen lg:h-full lg:relative text-sm bg-black z-50 lg:bg-white flex flex-col items-center lg:items-end justify-center  pr-8 `}
      >
        <div className=" relative flex flex-col lg:flex-row w-2/3 lg:justify-around items-center lg:items-start h-full lg:h-auto text-white lg:text-black">
          <div
            className="lg:hidden absolute top-4 left-3"
            onClick={() => setShowNav(false)}
          >
            <X />
          </div>
          <Link to="/menu">
            <div className="cursor-pointer hover:text-green-500 mt-32 lg:mt-0  mb-12 lg:mb-0 transition-all duration-300">
              Order now
            </div>
          </Link>
          <Link to="/about">
            <div className="cursor-pointer hover:text-green-500  my-12 lg:my-0 transition-all duration-300">
              About us
            </div>
          </Link>
          <Link to="/contact">
            <div className="cursor-pointer hover:text-green-500  my-12 lg:my-0 transition-all duration-300">
              Contact us
            </div>
          </Link>
          <Link to="/cart">
            <div className="cursor-pointer  transition-all duration-300 relative">
              <ShoppingBag size={20} />
              {cartTotal > 0 && (
                <span className="absolute -top-2 -right-4 bg-green-500 w-5 h-5 rounded-full flex flex-col items-center justify-center">
                  <span className="text-xs"> {cartTotal} </span>
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

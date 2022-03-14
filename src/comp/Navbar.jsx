import { Menu, ShoppingBag } from "react-feather";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // const location = useLocation().pathname;

  const cart = useSelector((state) => state.cart);
  const cartTotal = cart.length;
  console.log(cartTotal);

  return (
    <div className={`flex items-center justify-between h-[9vh] `}>
      <div className="w-1/2 pl-20 h-full pt-4">
        <Link to="/">
          <img src="/images/logoBlack.png" alt="" className="" />
        </Link>
      </div>

      <div
        className={`w-1/2 text-sm hidden lg:flex flex-col items-end justify-center h-full pr-8 `}
      >
        <div className=" flex w-2/3 justify-around">
          <Link to="/menu">
            <div className="cursor-pointer hover:text-green-500 transition-all duration-300">
              Order now
            </div>
          </Link>
          <Link to="/about">
            <div className="cursor-pointer hover:text-green-500 transition-all duration-300">
              About us
            </div>
          </Link>
          <Link to="/contact">
            <div className="cursor-pointer hover:text-green-500 transition-all duration-300">
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
      <div className="lg:hidden w-1/2 flex flex-col items-end">
        <Menu color="white" />
      </div>
    </div>
  );
};

export default Navbar;

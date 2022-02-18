import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ADD_TO_CART, DELETE_ITEM, REMOVE_ITEM } from "../../redux/action";
import gsap from "gsap/all";
import { useState } from "react";
import { useEffect, useRef } from "react";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);

  const el = useRef();
  const [showScreen, setShowScreen] = useState(false);
  const q = gsap.utils.selector(el);
  useEffect(() => {
    const time = gsap.timeline();
    time
      .from(".screen_mover", {
        duration: 2,
        xPercent: -100,
        ease: "power4.out",
      })
      .to(".screen_mover", {
        duration: 1.5,
        xPercent: 100,
        ease: "power4.out",
      });
    setTimeout(() => {
      setShowScreen(true);
    }, 2000);
  }, []);

  console.log(cart);
  return (
    <div ref={el}>
      <div className="screen_mover absolute z-50 top-0 left-0 w-screen h-screen text-4xl font-bold  flex flex-col items-center justify-center bg-white">
        <div className="flex items-center ">
          Cart
          <img
            src="/images/pizzaAnimate.gif"
            alt=""
            className="h-12 w-12 ml-4"
          />
        </div>
      </div>
      {showScreen ? (
        <div className="h-screen">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-2xl">Your cart is empty :( </div>
              <div className="mt-12">
                <img src="/images/empty.png" alt="" className="w-96" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center mt-20">
              <div className="text-xl">Your Cart</div>
              <div className="flex w-4/5 mt-20">
                <div
                  className="w-2/3 overflow-y-scroll"
                  style={{ height: "80vh" }}
                >
                  {cart.map((item, i) => {
                    return (
                      <div className="" key={i}>
                        <div className="flex mt-8">
                          <div className="flex w-1/2">
                            <div className="">
                              <img
                                src={item.image}
                                alt=""
                                className="w-48 rounded"
                              />
                            </div>
                            <div className="ml-12">
                              <div className="text-lg">{item.name}</div>
                              <div className="">{item.desc}</div>
                            </div>
                          </div>
                          <div className="w-1/2 flex flex-col items-center">
                            <div className="">Rs {item.price}</div>
                            <div className="">
                              <div className="flex mt-2">
                                <button
                                  className="border border-black px-2 rounded"
                                  onClick={() =>
                                    dispatch({
                                      type: DELETE_ITEM,
                                      payload: { id: item.id },
                                    })
                                  }
                                >
                                  -
                                </button>
                                <div className="inline mx-3">
                                  {item.quantity}
                                </div>
                                <button
                                  className="border border-black px-2 rounded"
                                  onClick={() =>
                                    dispatch({
                                      type: ADD_TO_CART,
                                      payload: { id: item.id },
                                    })
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="w-1/3 border-l border-black pl-12">
                  <div className="text-xl">Amount Details</div>
                  <div className="w-4/5 mt-6">
                    <div className="flex justify-between">
                      <div className="">Subtotal</div>
                      <div className="">Rs {total}</div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="">Shipping</div>
                      <div className="">Free</div>
                    </div>
                    <div className="w-4/5 h-px my-4 bg-gray-500"></div>
                    <div className="flex justify-between font-semibold">
                      <div className="text-lg">Total</div>
                      <div className="">Rs {total}</div>
                    </div>
                    <NavLink to={"/billing"}>
                      <div className="w-full mt-8">
                        <button className="w-full bg-black text-white py-2 rounded hover:bg-transparent border border-black hover:text-black transition-all duration-300">
                          Proceed to Payment
                        </button>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="absolute z-40 top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center bg-black"></div>
      )}
    </div>
  );
};

export default Cart;

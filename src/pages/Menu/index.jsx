import { useDispatch } from "react-redux";
import FoodCard from "../../comp/FoodCard";
import { ADD_TO_CART } from "../../redux/action";
import { foodData } from "../../utils/foodData";
import { gsap } from "gsap/all";
import { useEffect, useRef, useState } from "react";

const Menu = () => {
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
  const dispatch = useDispatch();
  const slicedFoodData = foodData.slice(2, 5);
  return (
    <div className="">
      <div className="screen_mover absolute z-50 top-0 left-0 w-screen h-screen text-4xl font-bold  flex flex-col items-center justify-center bg-white">
        <div className="flex items-center ">
          Menu
          <img
            src="/images/pizzaAnimate.gif"
            alt=""
            className="h-12 w-12 ml-4"
          />
        </div>
      </div>
      {showScreen ? (
        <div className="mt-40 mb-32">
          {/* Item 1 */}
          <div className="flex">
            <div className="w-1/2 flex flex-col items-center">
              <img
                src="/images/productImages/pizza1.jpg"
                alt=""
                className="w-72 h-96 object-cover rounded"
                data-aos="fade-right"
                data-aos-delay="200"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <div className="w-2/3">
                <div className="text-3xl mb-3">{foodData[0].name}</div>
                <div className="">{foodData[0].desc}</div>
                <div className="mt-4 text-lg">
                  Incididunt Lorem eiusmod id nulla esse.Incididunt Lorem
                  eiusmod id nulla esse.Incididunt Lorem eiusmod id nulla
                  esse.Incididunt Lorem eiusmod id nulla esse.Incididunt Lorem
                  eiusmod id nulla esse.
                </div>
                <div className="">Rs {foodData[0].price}</div>

                <div className="">
                  <button
                    className="py-3 px-12 border border-black rounded mt-4 hover:bg-black transition-all duration-300 hover:text-white "
                    onClick={() =>
                      dispatch({
                        type: ADD_TO_CART,
                        payload: { id: 1 },
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex mt-40">
            <div className="w-1/2 flex flex-col items-end">
              <div className="w-2/3">
                <div className="text-3xl mb-3">{foodData[1].name}</div>
                <div className="">{foodData[1].desc}</div>
                <div className="mt-4 text-lg">
                  Incididunt Lorem eiusmod id nulla esse.Incididunt Lorem
                  eiusmod id nulla esse.Incididunt Lorem eiusmod id nulla
                  esse.Incididunt Lorem eiusmod id nulla esse.Incididunt Lorem
                  eiusmod id nulla esse.
                </div>
                <div className="">Rs {foodData[1].price}</div>
                <div className="">
                  <button
                    className="py-3 px-12 border border-black rounded mt-4 hover:bg-black transition-all duration-300 hover:text-white "
                    onClick={() =>
                      dispatch({
                        type: ADD_TO_CART,
                        payload: { id: 2 },
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <img
                src="/images/productImages/pizza2.jpg"
                alt=""
                className="w-72 h-96 object-cover rounded"
                data-aos="fade-left"
                data-aos-delay="200"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mt-32">
            <div className="grid grid-cols-3 justify-items-center gap-y-8 w-2/3">
              {slicedFoodData.map((item, i) => {
                return <FoodCard data={item} />;
              })}
            </div>
          </div>
          <div className="mt-32 flex flex-col items-center">
            <div className="text-4xl font-semibold">That's all for now</div>
            <div className="text-lg mt-4">We are adding more items soon...</div>
          </div>
        </div>
      ) : (
        <div className="absolute z-40 top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center bg-black"></div>
      )}
    </div>
  );
};

export default Menu;

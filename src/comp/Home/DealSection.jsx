import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/action";
import { foodData } from "../../utils/foodData";

const Deals = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="w-4/5">
        <div className="font-extrabold text-4xl">Deals of the day</div>
        {/* first deal */}
        <div className="flex mt-12">
          <div className="w-1/2">
            <img
              src="/images/productImages/pizza1.jpg"
              alt=""
              className="w-4/5 object-cover rounded"
              // data-aos="fade-right"
              // data-aos-delay="200"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <div className="w-5/6">
              <div className="text-2xl font-semibold mb-3">
                {foodData[0].name}
              </div>
              <div className="mt-4">
                Incididunt Lorem eiusmod id nulla esse.Incididunt Lorem eiusmod
                id nulla esse.Incididunt Lorem eiusmod id nulla esse.Incididunt
                Lorem eiusmod id nulla esse.Incididunt Lorem eiusmod id nulla
                esse.
              </div>
              <div className="flex items-center">
                <div className="">
                  <button
                    className="py-3 px-12 border border-black rounded mt-4 transition-all duration-300 hover:font-bold hover:bg-[#EBFFE3] hover:border-[#D4FBDD] "
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
                <div className="ml-4">Rs {foodData[0].price}</div>
              </div>
            </div>
          </div>
        </div>
        {/* second deal */}
        <div className="flex mt-32">
          <div className="w-1/2 flex flex-col items-center">
            <div className="w-5/6">
              <div className="text-2xl font-semibold mb-3">
                {foodData[1].name}
              </div>
              <div className="mt-4">
                Incididunt Lorem eiusmod id nulla esse.Incididunt Lorem eiusmod
                id nulla esse.Incididunt Lorem eiusmod id nulla esse.Incididunt
                Lorem eiusmod id nulla esse.Incididunt Lorem eiusmod id nulla
                esse.
              </div>
              <div className="flex items-center">
                <div className="">
                  <button
                    className="py-3 px-12 border border-black rounded mt-4 transition-all duration-300 hover:font-bold hover:bg-[#EBFFE3] hover:border-[#D4FBDD] "
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
                <div className="ml-4">Rs {foodData[1].price}</div>
              </div>
            </div>
          </div>{" "}
          <div className="w-1/2 flex flex-col items-end">
            <img
              src="/images/productImages/pizza2.jpg"
              alt=""
              className="w-4/5 object-cover rounded"
              // data-aos="fade-right"
              // data-aos-delay="200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

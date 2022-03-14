import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/action";
import { foodData } from "../../utils/foodData";
import CartBtn from "../CartBtn";

const Deals = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="w-4/5">
        <div className="font-extrabold text-2xl lg:text-4xl">
          Deals of the day
        </div>
        {/* first deal */}
        <div className="flex flex-col lg:flex-row mt-6 lg:mt-12">
          <div className="lg:w-1/2">
            <img
              src="/images/productImages/pizza1.jpg"
              alt=""
              className="lg:w-4/5 object-cover rounded"
              // data-aos="fade-right"
              // data-aos-delay="200"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="lg:w-5/6">
              <div className="text-2xl font-semibold mb-3">
                {foodData[0].name}
              </div>
              <div className="mt-4">
                Incididunt Lorem eiusmod id nulla esse.Incididunt Lorem eiusmod
                id nulla esse.
                <span className="hidden lg:block">
                  Incididunt Lorem eiusmod id nulla esse.Incididunt Lorem
                  eiusmod id nulla esse.Incididunt Lorem eiusmod id nulla esse.
                </span>
              </div>
              <div className="lg:mt-4 flex flex-col-reverse lg:flex-row lg:items-center">
                <div
                  className=""
                  onClick={() => {
                    dispatch({
                      type: ADD_TO_CART,
                      payload: { id: 1 },
                    });
                  }}
                >
                  <CartBtn />
                </div>
                <div className="mt-3 lg:mt-0 lg:ml-4">
                  Rs {foodData[0].price}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second deal */}
        <div className="flex flex-col-reverse lg:flex-row mt-20 lg:mt-32">
          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="lg:w-5/6">
              <div className="text-2xl font-semibold mb-3">
                {foodData[1].name}
              </div>
              <div className="mt-4">
                Incididunt Lorem eiusmod id nulla esse.Incididunt Lorem eiusmod
                id nulla esse.Incididunt Lorem eiusmod id nulla esse.Incididunt
                Lorem eiusmod id nulla esse.Incididunt Lorem eiusmod id nulla
                esse.
              </div>
              <div className="flex flex-col-reverse lg:flex-row lg:items-center">
                <div
                  className="lg:mt-4"
                  onClick={() => {
                    dispatch({
                      type: ADD_TO_CART,
                      payload: { id: 2 },
                    });
                  }}
                >
                  <CartBtn />
                </div>
                <div className="mt-3 lg:mt-0 lg:ml-4">
                  Rs {foodData[1].price}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col lg:items-end">
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

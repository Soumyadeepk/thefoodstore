import { useState } from "react";
import { CheckCircle } from "react-feather";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/action";

const FoodCard = ({ data }) => {
  const dispatch = useDispatch();
  const [showSubmit, setShowSubmit] = useState(false);
  const handleShowSubmit = () => {
    setShowSubmit(true);
    setTimeout(() => {
      setShowSubmit(false);
    }, 1000);
  };

  return (
    <div className="w-64 h-96 rounded shadow-lg pb-4">
      <div className="w-full h-2/3">
        <img
          src={data.image}
          alt=""
          className="rounded w-full h-full object-cover"
        />
      </div>
      <div className="h-1/3">
        <div className="flex justify-between my-3">
          <div className="ml-2">{data.name}</div>
          <div className="mr-2">Rs {data.price}</div>
        </div>
        <div className="flex justify-between">
          <div className="ml-2 text-sm w-1/2">{data.desc}</div>
          <div className="mr-2">
            <button
              className={`rounded-full border border-black w-12 h-12 text-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                showSubmit
                  ? "border-transparent bg-[#EBFFE3]"
                  : "hover:font-bold hover:bg-[#EBFFE3] hover:border-[#D4FBDD]"
              }  `}
              onClick={() => {
                handleShowSubmit();
                dispatch({
                  type: ADD_TO_CART,
                  payload: { id: data.id },
                });
              }}
            >
              {showSubmit ? (
                <CheckCircle className="text-green-700" size={16} />
              ) : (
                "+"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

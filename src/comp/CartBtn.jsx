import { useState } from "react";
import { CheckCircle } from "react-feather";

const CartBtn = () => {
  const [showSubmit, setShowSubmit] = useState(false);
  const handleShowSubmit = () => {
    setShowSubmit(true);
    setTimeout(() => {
      setShowSubmit(false);
    }, 1000);
  };

  return (
    <button
      className={`py-3 px-20 border border-black ${
        showSubmit
          ? "border-transparent bg-[#EBFFE3]"
          : "hover:font-bold hover:bg-[#EBFFE3] hover:border-[#D4FBDD]"
      }  rounded transition-all duration-300 `}
      onClick={handleShowSubmit}
    >
      {showSubmit ? <CheckCircle className="text-green-700" /> : "Add to Cart"}
    </button>
  );
};

export default CartBtn;

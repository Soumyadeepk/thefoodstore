import FoodCard from "../FoodCard";
import { foodData } from "../../utils/foodData.jsx";

const Explore = () => {
  const slicedFoodData = foodData.slice(2, 5);

  return (
    <div className="flex flex-col items-center mt-20 mb-48">
      <div className="text-3xl font-semibold mb-6">EXPLORE</div>
      <div className="grid grid-cols-3 justify-items-center gap-y-8 w-2/3">
        {slicedFoodData.map((item, i) => {
          return <FoodCard data={item} />;
        })}
      </div>
    </div>
  );
};

export default Explore;

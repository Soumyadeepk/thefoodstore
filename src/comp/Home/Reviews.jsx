import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Reviews = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <div className="w-1/4 flex flex-col items-center transform -rotate-90">
          <img src="/images/home/pizzaIcon.png" alt="" className="w-20 h-20" />
        </div>
        <div className="w-1/2">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showStatus={false}
            showArrows={false}
          >
            <div className="mb-12 bg-gray-100 rounded-lg px-4  py-12 shadow-xl">
              <div className="mb-4 font-semibold text-lg">jshjdfhskj</div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium atque enim laudantium. Dolores quae consectetur
                perferendis earum hic nostrum officia facere laudantium
                voluptates obcaecati, saepe natus praesentium nam aut aperiam.
              </div>
            </div>
            <div className="mb-12 bg-gray-100 rounded-lg px-4  py-12 shadow-xl">
              <div className="mb-4 font-semibold text-lg">jshjdfhskj</div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium atque enim laudantium. Dolores quae consectetur
                perferendis earum hic nostrum officia facere laudantium
                voluptates obcaecati, saepe natus praesentium nam aut aperiam.
              </div>
            </div>
            <div className="mb-12 bg-gray-100 rounded-lg px-4  py-12 shadow-xl">
              <div className="mb-4 font-semibold text-lg">jshjdfhskj</div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium atque enim laudantium. Dolores quae consectetur
                perferendis earum hic nostrum officia facere laudantium
                voluptates obcaecati, saepe natus praesentium nam aut aperiam.
              </div>
            </div>
          </Carousel>
        </div>
        <div className="flex flex-col items-center w-1/4 transform rotate-45">
          <img src="/images/home/pizzaIcon.png" alt="" className="w-20 h-20" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

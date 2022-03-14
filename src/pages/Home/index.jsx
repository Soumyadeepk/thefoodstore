import ChefSection from "../../comp/Home/ChefSection";
import Explore from "../../comp/Home/Explore";
import Header from "../../comp/Home/Header";
import Reviews from "../../comp/Home/Reviews";
import Steps from "../../comp/Home/Steps";
import Cards from "../../comp/Home/Cards";
import { gsap } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Deals from "../../comp/Home/DealSection";
import Gallery from "../../comp/Home/Gallery";
import NewReview from "../../comp/Home/NewReview";

const Home = () => {
  const [showScreen, setShowScreen] = useState(false);
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
  return (
    <div className="">
      <div className="screen_mover absolute z-50 top-0 left-0 w-screen h-screen text-4xl font-bold  flex flex-col items-center justify-center bg-white">
        <div className="flex items-center ">
          Welcome to the &nbsp;
          <span className="text-red-800"> Food Store </span>
          <img
            src="/images/pizzaAnimate.gif"
            alt=""
            className="h-12 w-12 ml-4"
          />
        </div>
      </div>
      {showScreen ? (
        <div className="">
          <Header />
          <Cards />
          <Deals />
          <Gallery />
          <NewReview />
        </div>
      ) : (
        <div className="absolute z-40 top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center bg-black"></div>
      )}
    </div>
  );
};

export default Home;

{
  /* <Steps />
<ChefSection />
<Explore />
<Reviews /> */
}

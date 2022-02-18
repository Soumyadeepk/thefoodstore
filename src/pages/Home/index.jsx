import ChefSection from "../../comp/Home/ChefSection";
import Explore from "../../comp/Home/Explore";
import Header from "../../comp/Home/Header";
import Reviews from "../../comp/Home/Reviews";
import Steps from "../../comp/Home/Steps";
import { gsap } from "gsap/all";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [showScreen, setShowScreen] = useState(false);
  useEffect(() => {
    const time = gsap.timeline();
    time
      .from(".screen_mover", {
        duration: 2,
        yPercent: 100,
        ease: "power4.out",
      })
      .to(".screen_mover", {
        duration: 1.5,
        yPercent: -100,
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
          Home
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
          {/* <Cards /> */}
          <Steps />
          <ChefSection />
          <Explore />
          <Reviews />
        </div>
      ) : (
        <div className="absolute z-40 top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center bg-black"></div>
      )}
    </div>
  );
};

export default Home;

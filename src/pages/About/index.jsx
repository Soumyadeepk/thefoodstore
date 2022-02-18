import gsap from "gsap/all";
import { useState } from "react";
import { useEffect, useRef } from "react";

const About = () => {
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
  return (
    <div ref={el}>
      <div className="screen_mover absolute z-50 top-0 left-0 w-screen h-screen text-4xl font-bold  flex flex-col items-center justify-center bg-white">
        <div className="flex items-center ">
          About
          <img
            src="/images/pizzaAnimate.gif"
            alt=""
            className="h-12 w-12 ml-4"
          />
        </div>
      </div>
      {showScreen ? (
        <div className="mt-64 mb-32 z-20">
          <div className="flex">
            <div className="w-1/2 flex flex-col items-center">
              <div className="w-1/2" data-aos="fade-up" data-aos-delay="200">
                <div className="text-4xl font-bold">About Us</div>
                <div className="mt-4">
                  We serve authentic, seasonal, Italian cuisine which means that
                  every dish is prepared individually and is prepared with the
                  utmost attention to details, to ensure maximum comfort to our
                  customers. We pride ourselves on our creative and delicious
                  food, and our philosophy is to provide the greatest service
                  while trying to maintain a fair price. Our chefs are expert in
                  different techniques, and although they use the same
                  ingredients, our chefs are constantly learning new and
                  interesting recipes to provide you with truly excellent food.
                  The restaurant is fully equipped for dining.
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative">
                <img
                  src="/images/about/pic1.jpg"
                  alt=""
                  className="w-96 h-64 absolute top-20 left-48 z-10"
                />
                <img
                  src="/images/about/pic2.jpg"
                  alt=""
                  className="w-96 h-64 absolute -top-20 left-12"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mt-64">
            <div className="w-1/2 flex flex-col items-center">
              <div className="">
                <img
                  src="/images/about/pic3.jpg"
                  alt=""
                  className="w-72 h-96"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <div className=" w-2/3">
                We serve delicious dishes that are prepared with passion and
                care and can be enjoyed in a contemporary and relaxed setting.
                Start with a delicious signature dish that will set your heart
                aflutter, perfect for special occasions. We also specialise for
                groups so please do not hesitate to contact us with any
                questions.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-32">
            <div className="text-xl mb-8">and here we are finally.</div>
            <div className="w-4/5 h-2/3">
              <img
                src="/images/about/pic4.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute z-40 top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center bg-black"></div>
      )}
    </div>
  );
};

export default About;

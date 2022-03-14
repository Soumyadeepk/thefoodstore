import { Instagram, Mail } from "react-feather";
import { gsap } from "gsap/all";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [showText, setShowText] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
    }, 2000);
    // Form.reset();
  };
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
    <div className="">
      <div className="screen_mover absolute z-50 top-0 left-0 w-screen h-screen lg:text-4xl font-bold  flex flex-col items-center justify-center bg-white">
        <div className="flex items-center ">
          Contact
          <img
            src="/images/pizzaAnimate.gif"
            alt=""
            className="h-12 w-12 ml-4"
          />
        </div>
      </div>
      {showScreen ? (
        <div className="lg:h-screen flex flex-col lg:flex-row items-center lg:items-start ">
          <div className="w-4/5 lg:w-1/2 flex flex-col justify-center items-center">
            <div className="">
              <div className="text-4xl font-bold">Talk to Us.</div>
              <div className="text-base my-4">
                Fill up the form and we will contact you within 12 hours
              </div>
            </div>
            <div className="border border-black cursor-pointer py-2 px-4 flex justify-around w-80 lg:w-96 rounded hover:text-white hover:bg-black transition-all duration-300">
              <div className="w-1/4">
                <Mail />
              </div>
              <div className="w-3/4">support@foodstore.com</div>
            </div>
            <div className="border border-black cursor-pointer py-2 px-4 flex justify-around w-80 lg:w-96 rounded my-4 hover:bg-black transition-all duration-300 hover:text-white">
              <div className="w-1/4">
                <Instagram />
              </div>
              <div className="w-3/4">theFoodStore</div>
            </div>
            <div className="">
              <img src="/images/contact.png" alt="" />
            </div>
          </div>
          <form
            action=""
            className="w-full lg:w-1/2 h-full py-20 lg:py-0 flex flex-col justify-center items-center bg-black border border-white border-opacity-30"
            id="Form"
            onSubmit={handleForm}
          >
            <div className="lg:w-1/2">
              <input
                type="text"
                placeholder="Name*"
                className="bg-transparent w-full border-b focus:outline-none text-white"
                required
              />
            </div>
            <div className="lg:w-1/2 my-20">
              <input
                type="text"
                placeholder="Email*"
                className="bg-transparent w-full border-b focus:outline-none text-white"
                required
              />
            </div>
            <div className="lg:w-1/2">
              <input
                type="text"
                placeholder="Message*"
                className="bg-transparent w-full border-b focus:outline-none text-white"
                required
              />
            </div>
            <div className="mt-16">
              <button className="py-3 px-20 hover:bg-white hover:text-black transition-all duration-300 border border-white text-white rounded">
                Submit
              </button>
            </div>
            <div
              className={`${
                showText
                  ? "visible transition-all duration-300"
                  : "invisible transition-all duration-300"
              } animateText text-white mt-12`}
            >
              Your form has been submitted successfully
            </div>
          </form>
        </div>
      ) : (
        <div className="absolute z-40 top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center bg-white"></div>
      )}
    </div>
  );
};

export default Contact;

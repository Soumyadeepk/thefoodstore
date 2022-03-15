import { Facebook, Instagram, Twitter } from "react-feather";

const Footer = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-around py-24 pl-12 lg:pl-0 bg-black text-white">
      <div className="lg:w-1/3">
        <div className="text-4xl font-bold ">The Food Store</div>
        <div className="w-3/5 text-xl mt-1 mb-6">Eat without meat</div>

        <div className="text-sm">
          Address: <br /> 17th main , KHB colony , <br /> Koramangala 5th block
          <br />
          Bangalore: 560097
        </div>
      </div>
      <div className="mt-12 lg:mt-0 grid grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-0">
        <div className="">
          <div className="text-lg font-bold mb-2">Main Links</div>
          <div className="">Order Tracker</div>
          <div className="my-2">Menu</div>
          <div className="">About Us</div>
        </div>
        <div className="">
          <div className="text-lg font-bold mb-2">Support</div>
          <div className="">Contact Us</div>
          <div className="my-2">Privacy Policy</div>
          <div className="">Terms & Conditions</div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-2">
            <div className="text-lg font-bold mb-2 ">Follow Us</div>
            <div className="flex">
              <Instagram size={20} />
              <Facebook size={20} />
              <Twitter size={20} />
            </div>
          </div>
          <div className="">
            <div className="text-lg font-bold mb-1"> Mail Us </div>
            <div className="">support@thefoodstore.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

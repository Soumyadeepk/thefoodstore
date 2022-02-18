import { Facebook, Instagram, Twitter } from "react-feather";

const Footer = () => {
  return (
    <div className=" flex justify-around py-24 bg-black text-white">
      <div className="w-1/3">
        <div className="text-4xl font-bold mb-3">The Food Store</div>
        <div className="w-3/5">Always available when you are hungry</div>
      </div>
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
      <div className="">
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
  );
};

export default Footer;

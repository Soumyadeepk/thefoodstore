// import "../styles/card.css";

const Card = (props) => {
  return (
    <div className="card_wrapper px-2 lg:px-0 w-56 lg:w-64 h-64 lg:h-80 border flex flex-col items-center justify-center rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#EBFFE3]">
      <div className="">
        <img src={props.icon} alt="" className="w-12 h-12" />
      </div>
      <div className="mt-4 font-extrabold">{props.text}</div>
      <div className="text-sm mt-4 text-center">{props.desc}</div>
    </div>
  );
};

export default Card;

import "../styles/card.css";

const Card = (props) => {
  return (
    <div className=" shadow-lg shadow-green-300">
      <div className="card_wrapper w-40 h-40 flex flex-col items-center justify-center rounded-lg">
        <div className="">
          <img src={props.icon} alt="" className="w-12 h-12" />
        </div>
        <div className="text-sm mt-4">{props.text}</div>
      </div>
    </div>
  );
};

export default Card;

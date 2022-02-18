import Card from "../../comp/Card";

const Cards = () => {
  const cardTexts = [
    {
      icon: "/images/home/icon1.png",
      text: "Freshly Baked",
    },
    {
      icon: "/images/home/icon2.png",
      text: "Hygiene Maintained",
    },
    {
      icon: "/images/home/icon3.png",
      text: "Fastest Delivery",
    },
  ];
  return (
    <div className="flex flex-col items-center my-32">
      <div className="grid grid-cols-3 w-1/2 justify-items-center">
        {cardTexts.map((item, i) => {
          return <Card icon={item.icon} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Cards;

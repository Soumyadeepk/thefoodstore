import Card from "../../comp/Card";

const Cards = () => {
  const cardTexts = [
    {
      icon: "/images/home/icon1.png",
      text: "Freshly Baked",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi, error laborum at veritatis esse cum",
    },
    {
      icon: "/images/home/icon2.png",
      text: "Hygiene Maintained",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi, error laborum at veritatis esse cum",
    },
    {
      icon: "/images/home/icon3.png",
      text: "Fastest Delivery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi, error laborum at veritatis esse cum",
    },
  ];
  return (
    <div className="flex flex-col items-center my-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 w-3/5 justify-items-center">
        {cardTexts.map((item, i) => {
          return <Card icon={item.icon} text={item.text} desc={item.desc} />;
        })}
      </div>
    </div>
  );
};

export default Cards;

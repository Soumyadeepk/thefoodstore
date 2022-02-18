import Section from "../Section";

const Steps = () => {
  const cardTexts = [
    {
      image: "/images/home/section1.jpg",
      heading: "Bread from Mexico",
      text: "Incididunt Lorem eiusmod id nulla esse. Consectetur sit nulla incididunt quis excepteur aliquip sint reprehenderit est laboris. Quis magna sunt cillum Lorem ut fugiat. Officia non deserunt qui adipisicing deserunt cillum exercitation dolor ea incididunt ea incididunt qui aliquip. Quis dolor quis deserunt velit nostrud nisi eu dolore nisi amet aliquip do. Incididunt non anim consectetur proident esse magna irure culpa sunt fugiat commodo non cillum ea. Et sit esse ad aliquip ipsum. Occaecat mollit veniam exercitat I",
      flexDirection: "flex-row",
    },
    {
      image: "/images/home/section2.jpg",
      heading: "Heated with care",
      text: "Incididunt Lorem eiusmod id nulla esse. Consectetur sit nulla incididunt quis excepteur aliquip sint reprehenderit est laboris. Quis magna sunt cillum Lorem ut fugiat. Officia non deserunt qui adipisicing deserunt cillum exercitation dolor ea incididunt ea incididunt qui aliquip. Quis dolor quis deserunt velit nostrud nisi eu dolore nisi amet aliquip do. Incididunt non anim consectetur proident esse magna irure culpa sunt fugiat commodo non cillum ea. Et sit esse ad aliquip ipsum. Occaecat mollit veniam exercitat I",
      flexDirection: "flex-row-reverse",
    },
    {
      image: "/images/home/section3.jpg",
      heading: "Freshly Served",
      text: "Incididunt Lorem eiusmod id nulla esse. Consectetur sit nulla incididunt quis excepteur aliquip sint reprehenderit est laboris. Quis magna sunt cillum Lorem ut fugiat. Officia non deserunt qui adipisicing deserunt cillum exercitation dolor ea incididunt ea incididunt qui aliquip. Quis dolor quis deserunt velit nostrud nisi eu dolore nisi amet aliquip do. Incididunt non anim consectetur proident esse magna irure culpa sunt fugiat commodo non cillum ea. Et sit esse ad aliquip ipsum. Occaecat mollit veniam exercitat I",
      flexDirection: "flex-row",
    },
  ];
  return (
    <>
      {cardTexts.map((item, i) => {
        return (
          <Section
            flexDirection={item.flexDirection}
            image={item.image}
            heading={item.heading}
            text={item.text}
          />
        );
      })}
    </>
  );
};

export default Steps;

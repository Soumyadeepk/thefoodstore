const Section = (props) => {
  return (
    <div className={`flex ${props.flexDirection} items-start mb-20 mt-32`}>
      <div className="image_wrapper w-1/2 flex flex-col items-center">
        <img src={props.image} alt="" className="rounded bg-cover" />
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <div className="ml-20 w-11/12">
          <div className="text-4xl font-semibold sec_heading" id="sec">
            {props.heading}
          </div>
          <div className="w-2/3 mt-4">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Section;

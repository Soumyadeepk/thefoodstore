import { NavLink } from "react-router-dom";
import "../styles/button.css";
const Button = (props) => {
  return (
    <div className="">
      <NavLink to="/menu">
        <button className="btn-primary py-4 px-20 border border-white  rounded">
          {props.text}
        </button>
      </NavLink>
    </div>
  );
};

export default Button;

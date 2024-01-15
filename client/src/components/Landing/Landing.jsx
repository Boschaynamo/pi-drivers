import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return <div className={style.container}>
    <NavLink to='/home'> <button className={style.button}>Go To Home</button> </NavLink>
    </div>;
};

export default Landing;

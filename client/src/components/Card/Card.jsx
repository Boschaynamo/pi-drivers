import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, name, teams, image }) => {
  return (
    <NavLink className={style.cardContainer} to={`/detail/${id}`}>
      <div className={style.left}>
        <div className={style.name}>
          <div>
            {name.forename} {name.surname}{" "}
          </div>
        </div>
        <div className={style.teams}>
          <div>Escuderias: </div>
          <span>{teams}</span>
        </div>
      </div>
      <div className={style.right}>
        <img className={style.image} src={image} alt={`Image of ${name}`} />
      </div>
    </NavLink>
  );
};

export default Card;

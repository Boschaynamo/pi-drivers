import { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
const Cards = ({ drivers }) => {
  const cards = drivers.map((driver) => (
    <Card key={driver.id}
      name={driver.name.forename}
      teams={driver.teams}
      image={driver.image.url}
    />
  ));

  return <div className={style.cardsContainer}>{cards}</div>;
};

export default Cards;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { getDrivers } from "../../redux/actions";
const Cards = () => {
  // const [allDrivers,filter] = useSelector((state) => [state.drivers,state.filter]); gives a warning on console
  const allDrivers = useSelector((state) => state.drivers);
  const filter = useSelector((state) => state.filter);
  const driversBeforeOrder = allDrivers.filter((driver) =>
    driver.teams?.includes(filter.team)
  );
  let drivers;
  if (filter.order || filter.dob)
    drivers = driversBeforeOrder.sort((a, b) => {
      if (filter.order === null) {
        if (filter.dob === "ASC") return new Date(a.dob) - new Date(b.dob);
        else return new Date(b.dob) - new Date(a.dob);
      }
      if (filter.order === "ASC") {
        return a.name.surname.localeCompare(b.name.surname);
      } else {
        return b.name.surname.localeCompare(a.name.surname);
      }
    });
  else drivers = driversBeforeOrder;
  const dispatch = useDispatch();

  const cards = drivers.map((driver) => (
    <Card
      key={driver.id}
      name={driver.name.surname}
      teams={driver.teams}
      image={driver.image.url}
    />
  ));

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  return <div className={style.cardsContainer}>{cards}</div>;
};

export default Cards;

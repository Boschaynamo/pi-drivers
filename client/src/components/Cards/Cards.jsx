import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import SeleccionPagina from "../SeleccionPagina/SeleccionPagina.jsx"
import { getDrivers } from "../../redux/actions";
const Cards = () => {
  // const [allDrivers,filter] = useSelector((state) => [state.drivers,state.filter]); gives a warning on console
  const allDrivers = useSelector((state) => state.drivers);
  const filter = useSelector((state) => state.filter);

  const [paginaActual, setPaginaActual] = useState(0);

  const driversBeforeOrder = allDrivers.filter((driver) => {
    if (filter.team != "-") return driver.teams?.includes(filter.team);
    else return true;
  });
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

  switch (filter.origin) {
    case "API":
      drivers = drivers.filter(
        (driver) => !driver.hasOwnProperty("fromdatabase")
      );
      break;
    case "BD":
      drivers = drivers.filter((driver) =>
        driver.hasOwnProperty("fromdatabase")
      );
      break;
    default:
      break;
  }

  const pageSize = 9;
  const pages = [];

  for (let i = 0; i < drivers.length; i += pageSize) {
    const page = drivers.slice(i, i + pageSize);
    pages.push(page);
  }

  const dispatch = useDispatch();

  // const [teams, setTeams] = useState([]);

  // const retrieveTeams = async () => {
  //   try {
  //     const {data} = await axios.get('http://localhost:3001/teams');
  //     console.log(data);
  //     setTeams(data);
  //   } catch (err) {
  //     setTeams(["No teams loaded"]);
  //   }
  // };

  const cards = pages[paginaActual]?.map((driver) => (
    <Card
      key={driver.id}
      id={driver.id}
      name={driver.name}
      teams={driver.teams}
      image={driver.image.url}
    />
  ));

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  return (
    <div className={style.cardsComponentContainer}>
      <div className={style.cardsComponentContainer_1box}>
      <div className={style.cardsContainer}>{cards}</div>
      </div>
      <SeleccionPagina cantidadPaginas={pages.length} paginaActual={paginaActual} setPaginaActual={setPaginaActual}/>
    </div>
  );
};

export default Cards;

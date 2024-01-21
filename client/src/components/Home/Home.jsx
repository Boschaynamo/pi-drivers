import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import sound from "../../assets/sound/Extended F1 2018 theme by Brian Tyle.mp3";
import style from "./Home.module.css";
import Cards from "../Cards/Cards.jsx";
import Filter from "../Filter/Filter.jsx";

import { getAllTeams } from "../../redux/actions.js";

// function play() {
//   const backgroundTheme = new Audio(sound);
//   backgroundTheme.volume=0.15;
//   backgroundTheme.play()
// }

const Home = () => {
  const teams = useSelector(state=>state.allTeams)
  const dispatch = useDispatch();

  const backgroundTheme = new Audio(sound);
  backgroundTheme.volume = 0.15;

  useEffect(() => {
    // if (backgroundTheme.paused) backgroundTheme.play();
    dispatch(getAllTeams())
  }, []);

  return (
    <div className={style.container}>
      <div className={style.filtersContainer}>
        <span>Filtrar por escudería:</span><div><Filter id="team" options={teams} /></div>
        <span>Filtrar por origen:</span><div><Filter id="origin" options={["API", "BD", "-"]} /></div>
        <span>Ordenar alfabeticamente:</span><div><Filter id="order" options={["ASC", "DSC", "-"]} /></div>
        <span>Ordenar por fecha de nacimiento:</span><div><Filter id="dob" options={["ASC", "DSC", "-"]} /></div>
      </div>
      <Cards />
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import sound from "../../assets/sound/Extended F1 2018 theme by Brian Tyle.mp3";
import style from "./Home.module.css";
import Cards from "../Cards/Cards.jsx";
import Filter from "../Filter/Filter.jsx"

// function play() {
//   const backgroundTheme = new Audio(sound);
//   backgroundTheme.volume=0.15;
//   backgroundTheme.play()
// }

const Home = ({ drivers}) => {
  console.log(drivers);
  // const backgroundTheme = new Audio(sound);
  // backgroundTheme.volume = 0.15;
  useEffect(() => {
    // if (backgroundTheme.paused) backgroundTheme.play();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.filtersContainer}>
        <Filter id='hello2' options={['hello','hello2']}/>
        <Filter id='hello2' options={['hello','hello2']}/>
        <Filter id='hello2' options={['hello','hello2']}/>
      </div>
      <Cards drivers={drivers} />
    </div>
  );
};

export default Home;

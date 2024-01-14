import { useEffect } from "react";
import sound from "../../assets/sound/Extended F1 2018 theme by Brian Tyle.mp3";

function play() {
  const backgroundTheme = new Audio(sound);
  backgroundTheme.volume=0.15;
  backgroundTheme.play()
}

const Home = ()=>{
  useEffect(()=>{
    play();
  })
    return(
        <>
        Hello
        </>
    )
}

export default Home
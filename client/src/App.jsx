import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Detail from "./components/Detail/Detail.jsx"
import Form from "./components/Form/Form.jsx"

import "./App.css";

function App() {
  let location = useLocation();
  
  
  // const [allDrivers, setAllDrivers] = useState([]);
  // const [drivers, setDrivers] = useState([]);
  // async function retrieveDrivers() {
  //   try {
  //     const { data } = await axios.get("http://localhost:3001/drivers");
  //     console.log(data);
  //     setAllDrivers(data);
  //     setDrivers(data);
  //     return data;
  //   } catch (err) {
  //     window.alert(err.message);
  //   }
  // }
  
  
//No use because of redux
  // const clickSearch = (text) =>{
  //   const filteredDrivers = allDrivers.filter((driver)=>driver.name.forename.toLowerCase().includes(text.toLowerCase()));
  //   setDrivers(filteredDrivers)
  // }

  useEffect(() => {
  }, []);
  return (
    <>
      {location.pathname !== "/" ? <Nav /> : null}
      <div className="content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />}/>
      </Routes>
      </div>
    </>
  );
}

export default App;

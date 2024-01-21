import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";
const Nav = () =>{

    return <div className={style.container}>
        <NavLink className={style.botoncitos} to='/home'><span >Home</span></NavLink>
        <NavLink className={style.botoncitos} to='/form'><span >Crear un Driver</span></NavLink>
        <SearchBar />
    </div>
}

export default Nav;
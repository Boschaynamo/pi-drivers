import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { NavLink, useLocation } from "react-router-dom";
const Nav = () =>{
    const location = useLocation();

    return <div className={style.container}>
        <NavLink className={location.pathname === '/home' ? style.botoncitosActive : style.botoncitos} to='/home'><span >Home</span></NavLink>
        <NavLink className={location.pathname === '/form' ? style.botoncitosActive : style.botoncitos} to='/form'><span >Crear un Driver</span></NavLink>
        <SearchBar />
    </div>
}

export default Nav;
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
const Nav = ({clickSearch}) =>{

    return <div className={style.container}>
        <SearchBar clickSearch={clickSearch} />
    </div>
}

export default Nav;
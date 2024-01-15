import { useState } from "react";
import style from './SearchBar.module.css'

const SearchBar = ({clickSearch}) => {

    const [searchText,setSearchText] = useState('');

    const handleChange = (event) =>{
        setSearchText(event.target.value);
    }

    return <div className={style.container}>
      <input type='search' onChange={handleChange} value={searchText}></input>
      <button onClick={()=>clickSearch(searchText)}>Buscar</button>
      </div>;
  };
  
  export default SearchBar;
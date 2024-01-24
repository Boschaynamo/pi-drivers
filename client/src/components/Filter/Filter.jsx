import { useDispatch, useSelector } from "react-redux";
import { filterDrivers } from "../../redux/actions";
import style from "./Filter.module.css"

const Filter = ({ id, options }) => {
  const selectedValue = useSelector((state) => state.filter[id]);
  const dispatch = useDispatch();
  const onChangeSelection = (event) => {
    dispatch(filterDrivers({ who: event.target.id, data: event.target.value }));
  };

  return (
    <div className={style.container}>
      <select className={style.select} id={id} onChange={onChangeSelection} value={selectedValue!= null ? selectedValue:'-'}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Filter;

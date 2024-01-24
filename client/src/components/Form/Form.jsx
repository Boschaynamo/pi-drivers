import { useEffect, useState } from "react";
import axios from "axios";

import style from "./Form.module.css";

import validation from "./validation";

const Form = () => {
  const [driver, setDriver] = useState({
    name: "PORTULACA",
    surname: "LACALMO",
    description: "SOyUnaDescripcion",
    image: "defaultuirl",
    nationality: "Basingseano",
    dob: "1998-01-05",
    teams: [],
  });

  const [allTeams, setAllTeams] = useState([]);

  const [errors, setErrors] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (event) => {
    setDriver({ ...driver, [event.target.name]: event.target.value });
    const validationResult = validation({
      ...driver,
      [event.target.name]: event.target.value,
    });
    setErrors(validationResult);
    if (!Object.keys(validationResult).length) setButtonDisabled(false);
    else setButtonDisabled(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(driver);

    axios
      .post("http://localhost:3001/drivers", driver)
      .then(({ data }) => {
        window.alert(data);
      })
      .catch((err) => {
        window.alert(err.response.data.error);
      });
  };

  const handleTeamChange = (event) => {
    if (!driver.teams.find((team) => team === event.target.value))
      setDriver({ ...driver, teams: [...driver.teams, event.target.value] });
    else {
      window.alert("Esa escuderia ya fue cargada");
    }
  };

  const handleTeamClick = (event) =>
    setDriver({
      ...driver,
      teams: driver.teams.filter((team) => team !== event.target.innerHTML),
    });

  useEffect(() => {
    axios.get("http://localhost:3001/teams").then(({ data }) => {
      setAllTeams(data);
    });
  }, []);
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.labelinputContainer}>
          <label>Nombre:</label>
          <input
            name="name"
            value={driver.name}
            onChange={handleChange}
          ></input>
          <div>{errors.name}</div>
        </div>

        <div className={style.labelinputContainer}>
          <label>Apellido:</label>
          <input
            name="surname"
            value={driver.surname}
            onChange={handleChange}
          ></input>
          <div>{errors.surname}</div>
        </div>
        <div className={style.labelinputContainer}>
          <label>Descripcion:</label>
          <input
            name="description"
            value={driver.description}
            onChange={handleChange}
          ></input>
        </div>
        <div className={style.labelinputContainer}>
          <label>Imagen url:</label>
          <input
            name="image"
            value={driver.image}
            onChange={handleChange}
          ></input>
        </div>
        <div className={style.labelinputContainer}>
          <label>Nacionalidad:</label>
          <input
            name="nationality"
            value={driver.nationality}
            onChange={handleChange}
          ></input>
        </div>
        <div className={style.labelinputContainer}>
          <label>Fecha de nacimiento:</label>
          <input
            name="dob"
            value={driver.dob}
            onChange={handleChange}
            placeholder="YYYY-MM-DD"
          ></input>
          <div>{errors.dob}</div>
        </div>
        <div className={style.labelinputContainer}>
          <label>Escuderias:</label>
          <select
            defaultValue="Seleccione la escuderia que quiere agregar"
            onChange={handleTeamChange}
          >
            <option value="default">
              Seleccione la escuderia que quiere agregar
            </option>

            {allTeams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
          <span>
            {driver.teams.map((team) => (
              <span
                className={style.teamCard}
                key={`teamCard_${team}`}
                onClick={handleTeamClick}
              >
                {team}
              </span>
            ))}
          </span>
        </div>

        <button
          className={buttonDisabled ? style.buttonDisabled : style.buttonEnabled}
          disabled={buttonDisabled}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

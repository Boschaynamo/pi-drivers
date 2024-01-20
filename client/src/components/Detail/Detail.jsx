import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();

  const getDriver = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/drivers/${id}`);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const [driver, setDriver] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDriver(id);
      setDriver(result);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div>{id}</div>
      {driver && (<>
        <div>
          <div>Nombre: {driver.name.forename}</div>
          <div>Apellido: {driver.name.surname}</div>
          <div>Nacionalidad: {driver.nationality}</div>
          <div>Descripción: {driver.description}</div>
          <div>Fecha: {driver.dob}</div>
          <div>Escuderías: {driver.teams}</div>
        </div>
        <img src={driver.image.url} />
        </>
      )}
    </div>
  );
};

export default Detail;

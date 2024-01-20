import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  const getDriver = async (id) => {
    try {
        const driver = await axios.get(`http://localhost:3001/drivers/${id}`)
        console.log(driver.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  getDriver(id);

  return <div>hola</div>;
};

export default Detail;

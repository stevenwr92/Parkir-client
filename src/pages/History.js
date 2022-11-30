import { useEffect, useState } from "react";
import HistoryRow from "../componnents/HistoryRow";
import axios from "axios";

export default function History() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => {
        setDatas(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>loading ...</h1>;

  const filter = async (type) => {
    try {
      let { data } = await axios({
        url: `http://localhost:3001?type=${type}`,
        method: "GET",
      });
      setDatas(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          filter(type);
        }}
      >
        <label for="cars">Type:</label>
        <select
          name="type"
          id="cars"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select your Type
          </option>
          <option value="Car">Car</option>
          <option value="Motorcycle">Motorcycle</option>
        </select>
        <input type="submit" className="ms-2" />
      </form>

      <table>
        <tr>
          <th>Type</th>
          <th>Entrance</th>
          <th>Exit</th>
          <th>Time</th>
          <th>Fee</th>
        </tr>
        {datas.map((data) => {
          return <HistoryRow key={data.id} data={data} />;
        })}
      </table>
    </div>
  );
}

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [createForm, setCreateForm] = useState({
    type: "",
    entrance: "",
    exit: "",
  });

  const postForm = async (createForm) => {
    try {
      let { a } = await axios({
        url: "http://localhost:3001/create",
        data: {
          type: createForm.type,
          entrance: createForm.entrance,
          exit: createForm.exit,
        },
        method: "POST",
      });
      console.log(createForm);
    } catch (error) {
      console.log(error);
    }
  };

  const input = (e) => {
    const { name, value } = e.target;
    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postForm(createForm);
        }}
      >
        <label for="cars">Type:</label>
        <select name="type" id="cars" onChange={input}>
          <option value="" disabled selected>
            Select your Type
          </option>
          <option value="Car">Car</option>
          <option value="Motorcycle">Motorcycle</option>
        </select>
        <div>
          <br />
          <label for="">Entrance Time:</label>
          <input
            type="datetime-local"
            step="1"
            name="entrance"
            onChange={input}
          />
        </div>
        <br />
        <div>
          <label for="">Exit Time:</label>
          <input type="datetime-local" step="1" name="exit" onChange={input} />
        </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Home;

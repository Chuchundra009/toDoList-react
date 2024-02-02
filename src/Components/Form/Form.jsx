import { useState } from "react";
import st from "./Form.module.scss";

export default function Form() {
  const [newArr, setNewArr] = useState([]);
  const [newText, setNewText] = useState("");

  function addText(e) {
    e.preventDefault();
    setNewArr((prevArr) => [...prevArr, newText]); // Добавляем новый элемент в массив
    setNewText("");
  }

  return (
    <div className={st.container}>
      <form className={st.form}>
        <input
          type="text"
          required
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button type="submit" onClick={addText}>
          Добавить
        </button>
      </form>
      <ul className={st.ul}>
        {newArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

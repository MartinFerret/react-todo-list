import { useState } from "react";
import Item from "../Item/Item";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [DataArr, setDataArr] = useState([
    { txt: "Acheter des cacahuètes", id: uuidv4() },
    { txt: "Aller au Parc des Princes", id: uuidv4() },
    { txt: "Faire du Jogging", id: uuidv4() },
  ]);

  const [stateInput, setStateInput] = useState();

  const deleteElement = (id) => {
    const filteredState = DataArr.filter((item) => {
      return item.id !== id;
    });
    setDataArr(filteredState);
  };

  const linkedInput = (e) => {
    setStateInput(e);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newArr = [...DataArr];

    const newTodo = {};

    newTodo.txt = stateInput;

    newTodo.id = uuidv4();

    newArr.push(newTodo);

    setDataArr(newArr);

    setStateInput("");
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={(e) => addTodo(e)} className="mb-3">
        <label htmlFor="todo" className="form-label">
          Chose à faire
        </label>
        <input
          type="text"
          className="form-control"
          id="todo"
          onInput={(e) => linkedInput(e.target.value)}
          value={stateInput}
        />

        <button className="mt-2 btn btn-primary d-block">Envoyer</button>
      </form>

      <h2>Liste des choses à faire</h2>
      <ul className="list-group">
        {DataArr.map((item) => {
          return (
            <Item
              txt={item.txt}
              key={item.id}
              id={item.id}
              delFunc={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
}

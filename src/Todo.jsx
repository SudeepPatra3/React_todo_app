import React, { useState } from "react";
import "../src/App.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, Setitems] = useState([]);
  //   toogle button on edit state
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setEditItems] = useState();

  const addItem = () => {
    if (!inputData) {
      alert("Atleast Add Something");
    } else if (inputData && !toggleSubmit) {
      Setitems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setEditItems(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      Setitems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    Setitems(updatedItems);
  };

  const removeAll = () => {
    Setitems([]);
  };

  const editItem = (id) => {
    let newEditItems = items.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setInputData(newEditItems.name);
    setEditItems(id);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add items"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fa fa-edit add-btn"
                title="Update items"
                onClick={addItem}
              ></i>
            )}
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(elem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

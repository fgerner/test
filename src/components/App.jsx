import React, { useState } from "react";

function App() {
  const [item, setItem ] = useState('A Item');
  const [list, setList ] = useState({})

  function handleChange(e){
    const newItem = e.target.value;
    setItem(
      newItem
    )
  }

  function handleClick() {
    setList(prevValue => {
      
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div onChange={handleChange} className="form">
        <input type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{item}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

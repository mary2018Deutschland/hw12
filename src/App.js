import React, { useState } from "react";
import "./App.css";
import ValueDisplay from "./components/valueDisplay/index";

function App() {
  const [value, setValue] = useState(""); // Состояние для текущего значения

  return (
    <div className="App">
      <h1>Current and Previous Value</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} // Обновление состояния при изменении значения в input
      />
      <ValueDisplay value={value} />{" "}
      {/* Передача текущего значения в дочерний компонент */}
    </div>
  );
}

export default App;

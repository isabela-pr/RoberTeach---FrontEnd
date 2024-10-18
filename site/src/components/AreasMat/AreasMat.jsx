import React, { useState } from "react";
import "./AreasMat.css";

const AreasMat = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = ["Aritmética", "Álgebra", "Geometria", "Estatística"];

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container">
      {items.map((item) => (
        <div
          key={item}
          className={`item ${selectedItem === item ? "selected" : ""}`}
          onClick={() => handleSelect(item)}
        >
          {item}
        </div>
      ))}

      <button
        className={`proceed-button ${selectedItem ? "active" : ""}`}
        disabled={!selectedItem}
      >
        PROSSEGUIR
      </button>
    </div>
  );
};

export default AreasMat;

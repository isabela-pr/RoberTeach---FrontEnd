import React, { useState } from "react";
import "./AreasMat.css";
import { Link } from "react-router-dom";

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

      {selectedItem ? (
        <Link
          to="/proxima-pagina" // O caminho da página de destino
          className="proceed-button-active"
        >
          PROSSEGUIR
        </Link>
      ) : (
        <div className="proceed-button disabled d-flex justify-content-center">PROSSEGUIR</div>
      )}
    </div>
  );
};

export default AreasMat;

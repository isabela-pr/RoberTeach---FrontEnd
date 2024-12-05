import "./PagAtRem.css";
import { Link } from "react-router-dom";
import fundo01 from "../../assets/AtivRem01.png";
import fundo02 from "../../assets/AtivRem02.png";

const PagAtRem = () => {
  function handleButtonClick() {
    const gear = document.querySelector(".gear");
    const nextLesson = document.getElementById("nextLesson");

    // Gira a engrenagem
    gear.style.transform = "rotate(100deg)";

    // Mostra o texto "Próxima Lição"
    setTimeout(() => {
      nextLesson.classList.add("show");
    }, 500);
  }
  return (
    <div
      className="roberteach-container"
      style={{
        backgroundImage: `url(${fundo01})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <header className="roberteach-header">
        <h1>Rober Teach</h1>
      </header>

      <div className="row">
        <div className="col-9 ">
          <div className="next-lesson hidden" id="nextLesson">
            Próxima Lição
          </div>
        </div>
        <div className="col-3 gear-button" onClick={handleButtonClick}>
          <div className="gear"></div>
        </div>
      </div>
    </div>
  );
};

export default PagAtRem;

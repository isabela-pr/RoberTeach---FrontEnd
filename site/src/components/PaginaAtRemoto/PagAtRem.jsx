import "./PagAtRem.css";
import { Link } from "react-router-dom";
import fundoDark01 from "../../assets/fundoDark01.png";
import fundoDark02 from "../../assets/fundoDark02.png";
import fundoDark03 from "../../assets/fundoDark03.png";
import fundoDark04 from "../../assets/fundoDark04.png";
import fundoDark05 from "../../assets/fundoDark05.png";
import fundoDark06 from "../../assets/fundoDark06.png";
import fundoDark07 from "../../assets/fundoDark07.png";
import fundoDark08 from "../../assets/fundoDark08.png";
import fundoDark09 from "../../assets/fundoDark09.png";
import fundoDark10 from "../../assets/fundoDark10.png";
import fundoDark11 from "../../assets/fundoDark11.png";
import fundoDark12 from "../../assets/fundoDark12.png";
import fundoDark13 from "../../assets/fundoDark13.png";
import fundoDark14 from "../../assets/fundoDark14.png";
import fundoDark15 from "../../assets/fundoDark15.png";
import fundoDark16 from "../../assets/fundoDark16.png";
import fundoDark17 from "../../assets/fundoDark17.png";
import fundoDark18 from "../../assets/fundoDark18.png";
import fundoLight01 from "../../assets/fundoLight01.png";
import fundoLight02 from "../../assets/fundoLight02.png";
import fundoLight03 from "../../assets/fundoLight03.png";
import fundoLight04 from "../../assets/fundoLight04.png";
import fundoLight05 from "../../assets/fundoLight05.png";
import fundoLight06 from "../../assets/fundoLight06.png";
import fundoLight07 from "../../assets/fundoLight07.png";
import fundoLight08 from "../../assets/fundoLight08.png";
import fundoLight09 from "../../assets/fundoLight09.png";
import fundoLight10 from "../../assets/fundoLight10.png";
import fundoLight11 from "../../assets/fundoLight11.png";
import fundoLight12 from "../../assets/fundoLight12.png";
import fundoLight13 from "../../assets/fundoLight13.png";
import fundoLight14 from "../../assets/fundoLight14.png";
import fundoLight15 from "../../assets/fundoLight15.png";
import fundoLight16 from "../../assets/fundoLight16.png";
import fundoLight17 from "../../assets/fundoLight17.png";
import fundoLight18 from "../../assets/fundoLight18.png";

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
    <>
    <div>
    <header className="roberteach-header">
        <h1>Rober Teach</h1>
      </header>
    </div>
    <div
      className="roberteach-container"
      style={{
        backgroundImage: `url(${fundoDark01})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >


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
    </>
  );
};

export default PagAtRem;

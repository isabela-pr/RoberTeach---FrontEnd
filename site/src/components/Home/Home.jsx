// import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Math from "../../assets/math.svg";
import CN from "../../assets/bequer.svg";
import CH from "../../assets/cerebro.svg";
import Header from "../Header/Header";
import Body from "../Body/Body";

const Home = () => {
  return (
    <>
      <Header />
      <Body />
      <div className="d-flex flex-column mt-5 gap-3 justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <Link
              className="Math btn w-100 d-flex flex-column justify-content-center align-items-center gap-1"
              to={"../QuestionPage"}
            >
              <img src={Math} alt="" className="mt-2" />
              <p className="mt-2">Questões Matemática</p>
            </Link>
          </div>

          <div className="col-md-4 mb-3">
            <Link
              className="Math btn w-100 d-flex flex-column justify-content-center align-items-center gap-1"
              to={"../QuestionPageCH"}
            >
              <img src={CH} alt="" className="mt-2 w-25" />
              <p className="mt-2">Questões Ciências Humanas</p>
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link
              className="Math btn w-100 d-flex flex-column justify-content-center align-items-center gap-1"
              to={"../QuestionPageCN"}
            >
              <img src={CN} alt="" className="mt-2 w-25" />
              <p className="mt-2">Questões Ciências da Natureza</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

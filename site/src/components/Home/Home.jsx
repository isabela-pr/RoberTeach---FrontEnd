// import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ensinoRemoto from "../../assets/EnsinoRemoto.png";
import Math from "../../assets/math.svg";
import Header from "../Header/Header";
import Body from "../Body/Body";

const Home = () => {
  return (
    <>
      <Header />
      <Body />
      <div className="row w-100 mt-5">
        <div className="d-flex justify-content-center mt-">
          <nav className="box flex-column">
            <Link
              className="Math btn border d-flex justify-content-center align-items-center flex-column gap-1"
              to={"../QuestionPage"}
            >
              <img src={Math} alt="" className="mt-2" />
              <p className="mt-2">Questões Matemática</p>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Home;

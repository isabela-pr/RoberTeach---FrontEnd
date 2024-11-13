// import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import ensinoRemoto from "../../assets/EnsinoRemoto.png";
import EnsinoInstitucional from "../../assets/EnsinoInstitucional.png";
import Separador from "../../assets/linha.svg";
import SetinhaVoltar from "../../assets/setinhaVoltar.svg";

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Home = () => {
  //   const [questions, setQuestions] = useState([]);
  //   const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [selectedAnswer, setSelectedAnswer] = useState('');
  //   const [isCorrect, setIsCorrect] = useState(null);

  //   // Função para carregar as questões de matemática da API do ENEM
  //   const fetchMathQuestions = async () => {
  //     try {
  //       const response = await axios.get('https://api.enem.dev/v1/questions', {
  //         params: {
  //           subject: 'matematica' // Filtra por questões de matemática
  //         }
  //       });
  //       setQuestions(response.data);
  //     } catch (error) {
  //       console.error('Erro ao carregar questões:', error);
  //     }
  //   };

  //   // UseEffect para carregar as questões ao montar o componente
  //   useEffect(() => {
  //     fetchMathQuestions();
  //   }, []);

  //   // Função para verificar a resposta
  //   const handleAnswerSubmit = () => {
  //     const correctAnswer = questions[currentQuestion].correct;
  //     setIsCorrect(selectedAnswer === correctAnswer);
  //   };

  //   // Função para avançar para a próxima pergunta
  //   const nextQuestion = () => {
  //     setIsCorrect(null);
  //     setSelectedAnswer('');
  //     setCurrentQuestion(currentQuestion + 1);
  //   };

  //   // Se ainda não carregou as questões, mostra um carregamento
  //   if (questions.length === 0) {
  //     return <div>Carregando questões de matemática...</div>;
  //   }

  return (
    <>
      <Header />
      <Body />
      <div className="row w-100 mt-5">
        <div className="col-md-6 d-flex justify-content-center mt-4">
          <nav className="box flex-column">
            <Link className="ensinoRemoto btn border" to={"../EnsinoRemoto"}>
              <img src={ensinoRemoto} alt="" />
              Ensino Remoto
            </Link>
          </nav>
        </div>
        <div className="col-md-6 d-flex justify-content-center mt-4">
          <nav className="box flex-column ">
            <Link
              className="ensinoInstitucional btn border"
              to={"../EnsinoInstitucional"}
            >
              <img src={EnsinoInstitucional} alt="" />
              Ensino Institucional
            </Link>
          </nav>
        </div>
      </div>

      {/* <div className="row w-100 g-1">
        <img src={Separador} alt="" className="separador" />
        <div className="g-4 d-flex g-3 justify-content-center align-items-center pt-4 col-md-6">
          <img src={SetinhaVoltar} alt="" className="setinha" />
        </div>
        <div className="d-flex g-3 justify-content-center align-items-center pt-4 col-md-6">
          <button>prosseguir</button>
        </div>
      </div> */}
    </>

    /* <div>
      <h1>Questão de Matemática</h1>
      <div>
        <p>{questions[currentQuestion].statement}</p>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
        <button onClick={handleAnswerSubmit}>Verificar Resposta</button>
        {isCorrect !== null && (
          <div>
            {isCorrect ? <p>Resposta correta!</p> : <p>Resposta errada!</p>}
            <button onClick={nextQuestion}>Próxima questão</button>
          </div>
        )}
      </div>
    </div>
   </> */
  );
};

export default Home;

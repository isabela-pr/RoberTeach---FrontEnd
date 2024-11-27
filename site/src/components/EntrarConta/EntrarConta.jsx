import React, { useState, useEffect } from "react";
import "./EntrarConta.css";

const EntrarConta = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const options = { method: "GET" };

  fetch("https://api.enem.dev/v1/exams/2018/questions", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(
      answer === questions[currentQuestionIndex]?.correctAlternative
    );
  };

  const handleConfirm = () => {
    if (isCorrect) setPoints(points + 1);
    setSelectedAnswer(null);
    setIsCorrect(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <div>
      {questions.length > 0 ? (
        <div className="white">
          <h1>{questions[currentQuestionIndex]?.title}</h1>
          <div>
            {questions[currentQuestionIndex]?.alternatives.map((alt, index) => (
              <button
                key={index}
                style={{
                  backgroundColor: selectedAnswer === alt ? "blue" : "white",
                }}
                onClick={() => handleAnswer(alt)}
              >
                {alt}
              </button>
            ))}
          </div>
          <button onClick={handleConfirm}>Confirmar</button>
          <p>Pontos: {points}</p>
        </div>
      ) : (
        <p>Carregando questões...</p>
      )}
    </div>
  );
};

// Importa o JSON
// import questions from "../question.json";

// const EntrarConta = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [feedback, setFeedback] = useState("");

//   const handleAnswer = (selectedOption) => {
//     const question = questions[currentQuestion];

//     if (selectedOption === question.answer) {
//       setScore(score + 1);
//       setFeedback("Você acertou! 🎉");
//     } else {
//       setFeedback(`Você errou! ❌ ${question.explanation}`);
//     }

//     // Mostra a próxima pergunta após um pequeno atraso
//     setTimeout(() => {
//       setFeedback("");
//       if (currentQuestion < questions.length - 1) {
//         setCurrentQuestion(currentQuestion + 1);
//       } else {
//         alert(
//           `Fim do quiz! Sua pontuação final é: ${
//             score + (selectedOption === question.answer ? 1 : 0)
//           }`
//         );
//         setCurrentQuestion(0);
//         setScore(0);
//       }
//     }, 2000);
//   };

//   return (
//     <div className="container quiz-container d-flex flex-column align-items-center justify-content-between">
//       {/* Cabeçalho com Barra de Progresso */}
//       <header className="w-100 d-flex align-items-center justify-content-between mb-4">
//         <div className="progress w-75">
//           <div
//             className="progress-bar bg-purple"
//             role="progressbar"
//             style={{
//               width: `${((currentQuestion + 1) / questions.length) * 100}%`,
//             }}
//             aria-valuenow={(currentQuestion + 1) / questions.length}
//             aria-valuemin="0"
//             aria-valuemax="100"
//           ></div>
//         </div>
//         <p className="text-white pt-3">Pontuação: {score}</p>
//       </header>

//       {/* Corpo do Quiz */}
//       <div className="text-center quiz-box">
//         <p className="instruction mb-5">
//           Responda corretamente as questões abaixo:
//         </p>
//         <div className="d-flex justify-content-center align-items-center flex-column bg-question p-4 mb-4 text-white shadow-sm">
//           <h2 className="mb-4">{questions[currentQuestion].question}</h2>
//           <div className="d-grid gap-3">
//             {questions[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 className="btn btn-purple"
//                 onClick={() => handleAnswer(option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//         {feedback && <p className="feedback text-white mt-3">{feedback}</p>}
//       </div>

//       {/* Rodapé com botões */}
//       <footer className="w-100 d-flex justify-content-between">
//         <button
//           className="btn btn-pular"
//           onClick={() =>
//             setCurrentQuestion((prev) => (prev + 1) % questions.length)
//           }
//         >
//           Pular
//         </button>
//         <button className="btn btn-darkPurple">Confirmar</button>
//       </footer>
//     </div>
//   );
// };

export default EntrarConta;

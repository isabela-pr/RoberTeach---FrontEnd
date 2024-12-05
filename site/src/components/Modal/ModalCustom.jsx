import React from "react";
import { useNavigate } from "react-router-dom";

const ModalCustom = ({
  show,
  handleClose,
  resultsData,
  correctAnswers,
  incorrectAnswers,
  clearState,
  returnRoute,
}) => {
  const navigate = useNavigate();

  if (!show) return null;

  const handleRefazer = () => {
    clearState();
    handleClose();
    navigate(returnRoute);
  };

  const handleVoltar = () => {
    handleClose();
    navigate("/Home");
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Resultados Detalhes</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Acertos: {correctAnswers}</p>
            <p>Erros: {incorrectAnswers}</p>
            <h3>Detalhes das Respostas:</h3>
            <ul>
              {resultsData.map((result, index) => (
                <li key={index}>
                  <strong>Questão:</strong> {result.question} <br />
                  <strong>Correta:</strong> {result.isCorrect ? "Sim" : "Não"}{" "}
                  <br />
                  {result.isCorrect ? (
                    <p>Sua Resposta: {result.selectedAnswer}</p>
                  ) : (
                    <>
                      <p>Sua Resposta: {result.selectedAnswer}</p>
                      <p>Resposta Correta: {result.correctAnswer}</p>
                    </>
                  )}
                  <hr />
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRefazer}
            >
              Refazer Teste
            </button>
            <button
              type="button"
              className="btn btn-primary-back"
              onClick={handleVoltar}
            >
              Voltar para Início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCustom;

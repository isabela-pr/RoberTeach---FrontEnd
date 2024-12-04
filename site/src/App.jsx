import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./components/Intro/Intro.css";

function App() {
  const [isInactive, setIsInactive] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Função para resetar o timer de inatividade
    const resetTimer = () => {
      setIsInactive(false);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsInactive(true);
      }, 90000); //90000 1 minuto e 30 segundos
    };

    // Eventos para detectar atividade do usuário
    const handleActivity = () => resetTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("keypress", handleActivity);

    // Inicia o timer ao carregar a página
    resetTimer();

    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("keypress", handleActivity);
    };
  }, []);

  // Exibe o modal se o usuário estiver inativo
  useEffect(() => {
    if (isInactive) {
      const modalElement = document.getElementById("timeoutModal");
      if (modalElement) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    }
  }, [isInactive]);

  function closeModal() {
    const modalElement = document.getElementById("timeoutModal");
    const modal = window.bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
  }

  return (
    <>
      <Outlet />

      <div
        className="modal fade fullscreen-modal"
        id="timeoutModal"
        tabIndex="-1"
        aria-labelledby="timeoutModalLabel"
        aria-hidden="true"
        onClick={() => closeModal()}
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen">
          <div className="modal-content">
            <div className="modal-body">
              <div className="body">
                <div className="eye-container gap-5">
                  <div className="eye">
                    <div className="shine"></div>
                  </div>
                  <div className="eye">
                    <div className="shine"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

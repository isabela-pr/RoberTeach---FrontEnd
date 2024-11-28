import React from 'react'
import "./PagAtRem.css"
import { Link } from 'react-router-dom';

const PagAtRem = () => {
    const activities = [
        { id: 1, title: 'Unidade 1', completed: true,  path: '/unidade1' }, // exemplo de rota para unidade 1
        { id: 2, title: 'Unidade 2', completed: false, path: '/unidade2'},
        { id: 3, title: 'Unidade 3', completed: true, path: '/unidade3'},
        // Adicione mais atividades aqui
      ];
   return(
    <div className="duolingo-container">
    <header className="duolingo-header">
      {/* Cabeçalho com logo, nome do usuário, pontos etc. */}
      {/* <img src="/logo.png" alt="Logo" /> */}
      <h1>Rober Teach</h1>
    </header>
    <main className="duolingo-main">
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className={`activity-item ${activity.completed ? 'completed' : ''}`}>
              <Link to={activity.path}> {/* Link para a tela da atividade */}
                <h3>{activity.title}</h3>
              </Link>
              { activity.completed && <span className="completed-icon">✔</span>}
          </li>
        ))}
      </ul>
    </main>
  </div>
   )
        };

export default PagAtRem
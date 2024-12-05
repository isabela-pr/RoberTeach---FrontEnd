import { StrictMode } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
=======
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> origin/Karol

import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Intro from "./components/Intro/Intro.jsx";
<<<<<<< HEAD
import QuestionPage from "./components/Questions/QuestionPage.jsx";
import QuestionPageCN from "./components/Questions/QuestionPageCN.jsx";
import QuestionPageCH from "./components/Questions/QuestionPageCH.jsx";
=======
import Beneficios from "./components/Beneficios/Beneficios.jsx";
import Atividades from "./components/Atividades/Atividades.jsx";
import AreasMat from "./components/AreasMat/AreasMat.jsx";
import Aluno from "./components/Aluno/Aluno.jsx";
import Professor from "./components/Professor/Professor.jsx";
import HomeInst from "./components/HomeInst/HomeInst.jsx";
import HomeAluno from "./components/HomeAluno/HomeAluno.jsx";
import PagAtRem from "./components/PaginaAtRemoto/PagAtRem.jsx";

>>>>>>> origin/Karol

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Erro</h1>,
    children: [
      { path: "/", element: <Intro /> },
      { path: "Home", element: <Home /> },
<<<<<<< HEAD
      { path: "QuestionPage", element: <QuestionPage /> },
      { path: "QuestionPageCN", element: <QuestionPageCN /> },
      { path: "QuestionPageCH", element: <QuestionPageCH /> },
=======
      { path: "Header", element: <Header /> },
      { path: "EnsinoRemoto", element: <EnsinoRemoto /> },
      { path: "EnsinoInstitucional", element: <EnsinoInstitucional /> },
      { path: "CriarConta", element: <CriarConta /> },
      { path: "EntrarConta", element: <EntrarConta /> },
      { path: "Perfis", element: <Perfis /> },
      { path: "Beneficios", element: <Beneficios /> },
      { path: "Atividades", element: <Atividades /> },
      { path: "AreasMat", element: <AreasMat /> },
      { path: "Aluno", element: <Aluno/> },
      { path: "Professor", element: <Professor/>},
      { path: "HomeInst", element: <HomeInst/>},
      { path: "HomeAluno", element: <HomeAluno/>},
      {path: "PagAtRem", element: <PagAtRem/>}
>>>>>>> origin/Karol
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

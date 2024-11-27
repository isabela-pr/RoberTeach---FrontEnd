import { StrictMode } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import EnsinoRemoto from "./components/EnsinoRemoto/EnsinoRemoto.jsx";
import Header from "./components/Header/Header.jsx";
import EnsinoInstitucional from "./components/EnsinoInstitucional/EnsinoInstitucional.jsx";
import CriarConta from "./components/CriarConta/CriarConta.jsx";
import EntrarConta from "./components/EntrarConta/EntrarConta.jsx";
import Perfis from "./components/Perfis/Perfis.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Beneficios from "./components/Beneficios/Beneficios.jsx";
import Atividades from "./components/Atividades/Atividades.jsx";
import AreasMat from "./components/AreasMat/AreasMat.jsx";
import Aluno from "./components/Aluno/Aluno.jsx";
import Professor from "./components/Professor/Professor.jsx";
import HomeInst from "./components/HomeInst/HomeInst.jsx";
import HomeAluno from "./components/HomeAluno/HomeAluno.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Erro</h1>,
    children: [
      { path: "/", element: <Intro /> },
      { path: "Home", element: <Home /> },
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
      { path: "HomeAluno", element: <HomeAluno/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

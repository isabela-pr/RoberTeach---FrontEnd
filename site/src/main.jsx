import { StrictMode } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import EnsinoRemoto from "./components/EnsinoRemoto/EnsinoRemoto.jsx";
import Teste from "./components/teste.jsx";
import Header from "./components/Header/Header.jsx";
import EnsinoInstitucional from "./components/EnsinoInstitucional/EnsinoInstitucional.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Erro</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "EnsinoRemoto", element: <EnsinoRemoto /> },
      { path: "EnsinoInstitucional", element: <EnsinoInstitucional /> },
      { path: "teste", element: <Teste /> },
      { path: "Header", element: <Header /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

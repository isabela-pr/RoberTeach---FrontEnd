import { StrictMode } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Intro from "./components/Intro/Intro.jsx";
import QuestionPage from "./components/Questions/QuestionPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Erro</h1>,
    children: [
      { path: "/", element: <Intro /> },
      { path: "Home", element: <Home /> },
      { path: "QuestionPage", element: <QuestionPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

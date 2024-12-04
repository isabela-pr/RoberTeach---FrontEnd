import { StrictMode } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Intro from "./components/Intro/Intro.jsx";
import QuestionPage from "./components/Questions/QuestionPage.jsx";
import QuestionPageCN from "./components/Questions/QuestionPageCN.jsx";
import QuestionPageCH from "./components/Questions/QuestionPageCH.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Erro</h1>,
    children: [
      { path: "/", element: <Intro /> },
      { path: "Home", element: <Home /> },
      { path: "QuestionPage", element: <QuestionPage /> },
      { path: "QuestionPageCN", element: <QuestionPageCN /> },
      { path: "QuestionPageCH", element: <QuestionPageCH /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

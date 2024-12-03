import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
// import QuestionPage from "./QuestionPage";

function App() {
  return (
    <>
      {/* <QuestionPage /> */}
      <Outlet />
    </>
  );
}

export default App;

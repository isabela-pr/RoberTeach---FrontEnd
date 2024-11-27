import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
// import QuestionPage from "./components/Questions/QuestionPage";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
// function App() {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// }

export default App;

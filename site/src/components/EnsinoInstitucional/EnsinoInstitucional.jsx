import RobertinhoPiscando from "../../assets/robertinhoPiscando.png";
import { Link } from "react-router-dom"
import "./EnsinoInstitucional.css"

const EnsinoInstitucional = () => {
  return (
    <>
    <div className="d-flex Robertofalando align-items-end justify-content-end">
    <div className="row m-0 p-0 justify-content-center align-items-center mb-0">
      <div className="col-4 ms-3  d-flex justify-content-center align-items-center">
        <img src={RobertinhoPiscando} alt="" className="robertoPiscando" />
      </div>
      <div className="col m-0 me-3 d-flex justify-content-center align-items-center fala-R">
        <p className="m-0">
          Olá, eu sou o Roberto Robô, venha conhecer o meu site!
        </p>
      </div>
    </div>
  </div>

  <div className="login d-grid gap-3 mt-5">
        <Link to={"../Aluno"} className="Aluno btn btn-primary-e ">
          <p>Aluno</p>
        </Link>
        <Link to={"../Professor"} className="Professor btn btn-primary-c ">
          <p>Professor</p>
        </Link>
      </div>
  
  </>
  )
}

export default EnsinoInstitucional
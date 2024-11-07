import React from "react";
import "./Professor";
import rodape from "../../assets/rodapeApp.png";
import RoberTeach from "../../assets/RT-Maior.png"
import { Link } from "react-router-dom";

const Professor = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("As senhas não coincidem.");
//       return;
//     }

//     try {
//       const response = await axios.post("/api/CriarConta", { email, password });
//       window.location.href = "/EntrarConta";
//     } catch (err) {
//       setError("Falha ao criar conta");
//     }
//   };

//   return (
//     <>
//       <div className="d-flex justify-content-center mt-3">
//         <img src={RoberTeach} alt="" />
//       </div>
//       <div className="login-container mt-5">
//         <form className="login-form" onSubmit={handleSignup}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               placeholder="@mail.com"
//               id="email"
//               value={email}
//               className="input-field"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="Nome de usuário">Nome de usuário</label>
//             <input
//               type="text"
//               id="text"
//               className="input-field"
//               placeholder="Nome de usuário"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Senha</label>
//             <input
//               type="password"
//               placeholder="Senha"
//               id="password"
//               value={password}
//               className="input-field"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label className="remember-me">
//               <input type="checkbox" />
//               Lembre-se de mim
//             </label>
//           </div>
//         </form>
//         <Link className="CriarP btn btn-primary-C">
//           <p>Criar</p>
//         </Link>
//         {error && <p>{error}</p>}
//       </div>
//       <div className="footer d-flex justify-content-center position-fixed">
//         <img src={rodape} alt="" />
//       </div>
//     </>
//   );

return (
    <>
    <div className="mt-3 d-flex justify-content-center w-100 ">
      <img src={RoberTeach} alt="" />
    </div>
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="input-field"
            placeholder="@mail.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Código de turma">Código de turma</label>
          <input
            type="text"
            id="text"
            className="input-field"
            placeholder="Código de turma"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Senha"
          />
        </div>

        <div className="form-group">
          <label className="remember-me">
            <input type="checkbox" />
            Lembre-se de mim
          </label>
        </div>
      </form>
        <Link className="CriarP btn btn-primary-C" to="../HomeInst">
        <p>Criar</p>
        </Link>
    </div>
    <div className="footer d-flex justify-content-center position-fixed">
      <img src={rodape} alt="" />
    </div>
  </>
  )
};

export default Professor;

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaUser } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  async function Enviar() {
    try {
      const resposta = await axios.post("http://192.168.1.18:3000/login", {
        email,
        senha,
      });
      resposta.status == 200 ? navigate("/home") : alert("Errro ao logar");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex items-center justify-center w-full h-183 bg-[#cc0000]">
        <div className="flex items-center justify-around bg-white h-140 w-240 rounded-[50px]">
          <div className="flex items-center flex-col">
            <img className="w-55 h-20" src="logoSESI.jpg" alt="Logo do SESI" />
            <p className="text-[15px]">Educação que transforma</p>
            <h2>SEJA BEM VINDO!</h2>

            <div>
              <h1>LOGIN</h1>
              <div>
                <FaUser />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                />
              </div>
              <h1>SENHA</h1>
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder=""
              />
            </div>
            <button onClick={() => Enviar()}>ENTRAR</button>
            <p>Não tem uma conta?</p>
            <Link to={"/cadastrar"}>CADASTRE-SE</Link>
          </div>
          <img width={40} height={40} src="imagemEsquerda.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
export default Login;

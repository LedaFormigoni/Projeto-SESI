import { useState } from "react";

function Login()
{
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

 async function Enviar () {
  const resposta = await fetch("http://localhost:3000/login", { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        email,
        senha,
    }),
  });
  resposta.status==200? window.location.href='www.google.com': alert('Errro ao logar')
}
  return (
    <>
      <div>
        <img src="logoSESI.jpg" alt="" />
        <p>Educação que transforma</p>
        <h2>SEJA BEM VINDO!</h2>
      </div>
      <div>
        <h1>LOGIN</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=""
        />
        <h1>SENHA</h1>
        <input
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder=""
        />
      </div>
      <button onClick={Enviar}>ENTRAR</button>
      <p>Não tem uma conta?</p>
      <p>CADASTRE-SE</p>
      <img src="imagemEsquerda.jpg" alt="" />
    </>
  );
}
export default Login;
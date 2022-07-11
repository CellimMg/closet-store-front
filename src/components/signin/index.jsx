import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Login } from "./style.js"

import Logo from "../../assets/closet_store.svg"


export default function Signin({ setUserData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    setLoading(true);
    const LINK_API = "https://closet-store.herokuapp.com/signin";
    const request = axios.post(LINK_API, {
      email,
      password
    });
    request.then(response => {
      const { data } = response;
      setUserData(data);
      console.log(data);
      navigate("/checkout"); //lembrar de mudar a rota.
    })
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      alert("E-mail ou senha incorretos. Tente novamente.");
    });
  }

  return (
    <Login>
      <img src={Logo} alt="logo" />
      < form onSubmit={login} >
        <input
          type="email"
          disabled={loading ? true : false}
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input
          type="password"
          disabled={loading ? true : false}
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">
          {loading ? (
            <ThreeDots color="#FFFDFD" height={13} align='center' />
          ) : (
            'Entrar'
          )}
        </button>
      </form >
      <Link to={"/signup"}>
        <p>Não possui conta?<br></br>Cadastre-se!</p>
      </Link>
    </Login>
  );
}
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { Sign_up } from "./style.js"

import Logo from "../../assets/closet_store.svg"


export default function Signup() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);


  function signup(event) {
    event.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert("Senhas digitadas não coincidem.");
      setLoading(false);
      return;
    }

    const LINK_API = "https://closet-store.herokuapp.com/signup";
    const request = axios.post(LINK_API, {
      name,
      lastName,
      email,
      password
    });
    request.then(response => {
      const { data } = response;
      console.log(data);
    })
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      alert("Dados inválidos, digite os dados novamente.");
    });
  }

  return (
    <Sign_up>
      <img src={Logo} alt="logo" />
      <form onSubmit={signup}>
        <input
          type="text"
          disabled={loading ? true : false}
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <input
          type="text"
          disabled={loading ? true : false}
          placeholder="Sobrenome"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} />

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

        <input
          type="password"
          disabled={loading ? true : false}
          placeholder="confirme sua senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} />

        <button type="submit">
          {loading ? (
            <ThreeDots color="#FFFDFD" height={13} align='center' />
          ) : (
            'Entrar'
          )}
        </button>
      </form >
      <Link to={"/signin"}>
        <p>Já possui conta? Faça login!</p>
      </Link>
    </Sign_up>
  );
}
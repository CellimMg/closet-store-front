import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';


export default function Signup() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function signup(event) {
    event.preventDefault();
    setLoading(true);
    const LINK_API = "http://localhost:5000/signup";
    const request = axios.post(LINK_API, {
      name,
      lastName,
      email,
      img,
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
    <div>
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
          type="text"
          disabled={loading ? true : false}
          placeholder="Imagem de perfil"
          value={img}
          onChange={(e) => setImg(e.target.value)} />

        <input
          type="password"
          disabled={loading ? true : false}
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">
          {loading ? (
            <ThreeDots color="#00ffff" height={13} align='center' />
          ) : (
            'Entrar'
          )}
        </button>
      </form >
    </div>
  );
}
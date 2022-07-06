import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';


export default function Signin({setUserData}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    setLoading(true);
    const LINK_API = "http://localhost:5000/signin";
    const request = axios.post(LINK_API, {
      email,
      password
    });
    request.then(response => {
      const { data } = response;
      setUserData(data);
      console.log(data);
    })
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      alert("E-mail ou senha incorretos. Tente novamente.");
    });
  }

  return (
    <div>
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
            <ThreeDots color="#00ffff" height={13} align='center' />
          ) : (
            'Entrar'
          )}
        </button>
      </form >
    </div>
  );
}
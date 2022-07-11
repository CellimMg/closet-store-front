import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Header, Forms, AdressInputs, CardInputs, CardInputs2 } from "./style.js"

import Logo from "../../assets/closet_store.svg"
import Back from "../../assets/Vector.svg"

export default function Checkout({ userData }) {
  const [CEP, setCEP] = useState("");
  const [complement, setComplement] = useState("");
  const [holderName, setHolderName] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [CVV, setCVV] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let TOKEN = userData.token;
  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  };

  function finalizeOrder(event) {
    event.preventDefault();
    setLoading(true);
    const LINK_API = "http://localhost:5000/checkout";
    const request = axios.post(LINK_API, {
      CEP,
      complement,
      holderName,
      creditCardNumber,
      CVV,
      expirationDate
    }, config);
    request.then(response => {
      const { data } = response;
      console.log(data);
      navigate("/success");
    })
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
    });
  }

  return (
    <>
      <Header>
        <img src={Back} alt="back" />
        <img src={Logo} alt="logo" />
        <div></div>
      </Header>

      <Forms onSubmit={finalizeOrder}>
        <form >
          <h1>Informações de entrega</h1>
          <AdressInputs>
            <input
              className="cep"
              type="text"
              disabled={loading ? true : false}
              placeholder="CEP"
              value={CEP}
              onChange={(e) => setCEP(e.target.value)} />


            <input
              type="number"
              disabled={loading ? true : false}
              placeholder="Número"
              value={complement}
              onChange={(e) => setComplement(e.target.value)} />

          </AdressInputs>

          <h2>Informações de pagamento</h2>

          <CardInputs>
            <input
              type="string"
              disabled={loading ? true : false}
              placeholder="Nome do titular"
              value={holderName}
              onChange={(e) => setHolderName(e.target.value)} />

            <input
              type="number"
              disabled={loading ? true : false}
              placeholder="Número do cartão"
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)} />

            <CardInputs2>
              <input
                className="cvv"
                type="number"
                disabled={loading ? true : false}
                placeholder="CVV"
                value={CVV}
                onChange={(e) => setCVV(e.target.value)} />

              <input
                type="string"
                disabled={loading ? true : false}
                placeholder="Validade"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)} />
            </CardInputs2>
          </CardInputs>

          <button type="submit">
            {loading ? (
              <ThreeDots color="#FFFDFD" height={13} align='center' />
            ) : (
              'Finalizar'
            )}
          </button>

        </form>
      </Forms>
    </>
  );
}
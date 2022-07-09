import { Link } from "react-router-dom";
import { Header, Body, Description } from "./style.js"

import Logo from "../../assets/closet_store.svg"
import Home from "../../assets/icons8-home.svg"

export default function Success() {
  return (
    <>
      <Header>
        <Link to={"/"}>
          <img src={Home} className="home" alt="back" />
        </Link>
        <img src={Logo} alt="logo" />
        <div></div>
      </Header>

      <Body>
        <h1>Obrigado pela compra!</h1>

        <Description>
          <h2>Itens:</h2>
          <h3>Blusa azul (1)</h3>
          <h3>Calça preta (1)</h3>
          <h2>Total:</h2>
          <h3>R$ 500</h3>
        </Description>
      </Body>
    </>
  );
}
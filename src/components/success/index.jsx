import { Link, useLocation } from "react-router-dom";
import { Header, Body, Description } from "./style.js"

import Logo from "../../assets/closet_store.svg"
import Home from "../../assets/icons8-home.svg"
import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext.js";
import UserContext from "../../context/UserContext.js";

export default function Success() {

  const { state } = useLocation();
  const [produtos, setProdutos] = useState([]);
  const { products, setProducts } = useContext(ProductContext);
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    const newArr = [...produtos];
    userData.cart.forEach((value, index, array) => {
      newArr.push(products.filter(product => product._id === value)[0]);
      setProdutos([...newArr]);
    });

    setUserData({ ...userData, cart: [] });
  }, []);

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
          {produtos.map(product => <h3>{product.name} (1)</h3>)}
          <h2>Total:</h2>
          <h3>R$ {produtos.reduce(function (acumm, curr) { return acumm + curr.price }, 0)}</h3>
        </Description>
      </Body>
    </>
  );
}
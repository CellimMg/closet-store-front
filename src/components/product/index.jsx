import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ProductContext from "../../context/ProductContext";
import UserContext from "../../context/UserContext";
import DefaultPage from "../commom/DefaultPage";
import { ImageProduct, Title, Sale, Description, Footer, Left, Button, Right } from "./style.js";

export default function Product({setCart}) {

    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();


    function addToCart() {
        if (userData.cart.length === 0) {
            userData.cart = [id];
        } else {
            userData.cart = [...userData.cart, id];
        }

        console.log(userData);
        setUserData({ ...userData });
        navigate("/cart");
    }


    function checkout(){
        setCart(products.filter(product => product._id === id)[0]);
        alert("Faça um login ou cadastre-se para comprar esse item!");
        navigate("/signin");
    }

    return (
        <DefaultPage back={true}>

            <ImageProduct src={products.filter(product => product._id === id)[0].image} />
            <Title>{products.filter(product => product._id === id)[0].name}</Title>
            <Sale>{products.filter(product => product._id === id)[0].sale ? `-${products.filter(product => product._id === id)[0].sale}%` : ""}</Sale>
            <Description>{products.filter(product => product._id === id)[0].description}</Description>
            <Footer>
                <Left>R$ {products.filter(product => product._id === id)[0].price}</Left>
                <Right><Button onClick={() => addToCart()}>Adicionar ao carrinho</Button></Right>

            </Footer>

        </DefaultPage>
    );


}
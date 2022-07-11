import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductContext from "../../context/ProductContext";
import UserContext from "../../context/UserContext";
import DefaultPage from "../commom/DefaultPage";
import { ImageProduct, Title, Sale, Description, Footer, Left, Button, Right } from "./style.js";

export default function Product() {

    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    function addToUserAndNavigate(id) {

        const cart = [];
        setUserData({ ...userData, cart: [...cart, id] });
        navigate("/cart");
    }

    return (
        <DefaultPage>

            <ImageProduct src={products.filter(product => product._id === id)[0].image} />
            <Title>{products.filter(product => product._id === id)[0].name}</Title>
            <Sale>{products.filter(product => product._id === id)[0].sale ? `-${products.filter(product => product._id === id)[0].sale}%` : ""}</Sale>
            <Description>{products.filter(product => product._id === id)[0].description}</Description>
            <Footer>
                <Left>R$ {products.filter(product => product._id === id)[0].price}</Left>
                <Right><Button onClick={() => addToUserAndNavigate(id)}>Adicionar ao carrinho</Button></Right>
            </Footer>

        </DefaultPage>
    );


}
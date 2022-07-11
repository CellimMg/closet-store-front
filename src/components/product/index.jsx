import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ProductContext from "../../context/ProductContext";
import DefaultPage from "../commom/DefaultPage";
import { ImageProduct, Title, Sale, Description, Footer, Left, Button, Right } from "./style.js";

export default function Product({setCart}) {

    const { id } = useParams();
    const { products, setProducts } = useContext(ProductContext);
    const navigate = useNavigate();

    console.log(products);
    console.log(id);

    function checkout(){
        setCart(products.filter(product => product._id === id)[0]);
        alert("Faça um login ou cadastre-se para comprar esse item!");
        navigate("/signin");
    }

    return (
        <DefaultPage>

            <ImageProduct src={products.filter(product => product._id === id)[0].image} />
            <Title>{products.filter(product => product._id === id)[0].name}</Title>
            <Sale>{products.filter(product => product._id === id)[0].sale ? `-${products.filter(product => product._id === id)[0].sale}%` : ""}</Sale>
            <Description>{products.filter(product => product._id === id)[0].description}</Description>
            <Footer>
                <Left>R$ {products.filter(product => product._id === id)[0].price}</Left>

                <Right>
                    <Button onClick={checkout}>Adicionar ao carrinho</Button>
                </Right>
            </Footer>

        </DefaultPage>
    );


}
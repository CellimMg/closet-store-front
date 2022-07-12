import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext";
import UserContext from "../../context/UserContext";
import DefaultPage from "../commom/DefaultPage";
import styledComponent from "styled-components";
import { useNavigate } from "react-router-dom";
import IconCancel from "../../assets/close-circle-outline.svg";

export default function Cart() {

    const { userData, setUserData } = useContext(UserContext);
    const { products } = useContext(ProductContext);
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    function generateCart(product, index) {
        return (
            <CardCart>
                <Image src={product.image} alt="Imagem" />
                <CardCartInfo>
                    <CardCartInfoTitle>{product.name}</CardCartInfoTitle>
                    <CardCartInfoPrice>R$ {product.price}</CardCartInfoPrice>
                    <ButtonCancel><img onClick={() => onTap(index)} src={IconCancel} /></ButtonCancel>
                </CardCartInfo>
            </CardCart>
        );
    }

    function onTap(index) {
        const data = [...produtos];
        const dataUser = [...userData.cart];
        data.splice(index, 1);
        dataUser.splice(index, 1);
        setUserData({ ...userData, cart: [...dataUser] });
        setProdutos([...data]);
    }

    useEffect(() => {
        const newArr = [...produtos];
        userData.cart.forEach((value, index, array) => {
            newArr.push(products.filter(product => product._id === value)[0]);
            setProdutos([...newArr]);
        });
    }, []);

    return (
        <DefaultPage back={true} showFloat={false}>
            {produtos.length === 0 ? <TitleEmpty>Sem produtos no carrinho!</TitleEmpty> : <>{produtos.map((produto, index) => generateCart(produto, index))}
                {produtos.length > 0 ? <Footer>
                    <Left>R$ {produtos.reduce(function (acumm, curr) { return acumm + curr.price }, 0)}</Left>
                    <Right><Button onClick={() => userData.token ? navigate("/checkout") : navigate("/signin")}>{userData.token ? "Pagar" : "Entre para continuar"}</Button></Right>
                </Footer> : <></>}</>}
        </DefaultPage>
    );
}

const TitleEmpty = styledComponent.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Robot";
    color: black;
    font-size: 18px;
`;


const CardCart = styledComponent.div`

    height: 110px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const Image = styledComponent.img`

    width: 95px;
    height: 100%;
    border-radius: 20px;
    margin-right: 15px


`;

const CardCartInfo = styledComponent.div`
    height: 100%;
    width: calc(100% - 110px);
    display: flex;
    flex-flow: column;
    
`;

const CardCartInfoTitle = styledComponent.span`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    color: black;
    margin-bottom: 17px;
`;

const CardCartInfoPrice = styledComponent.span`
    font-family: 'Roboto';
    font-size: 14px;
    color: black;
    margin-bottom: 36px;
`;


export const Footer = styledComponent.div`
    bottom: 0px;
    left: 0px;
    right: 0px;
    position: absolute;
    height: 90px;
    background-color: #FBFBFB;
    display: flex;
`;

export const Left = styledComponent.div`

    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    color: #007A22;
`;

export const Right = styledComponent.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styledComponent.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-family: 'Roboto';
    font-size: 16px;
    width: 127px;
    height: 43px;
    background: #7A7FFD;
    border-radius: 19px;
`;

export const ButtonCancel = styledComponent.div`
    display: flex;
    align-items;
    justify-content: end;

    img{
        width: 25px;
        height: 25px;
    }
`;


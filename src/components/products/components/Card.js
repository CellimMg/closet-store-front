import styledComponents from "styled-components";
import { Link } from "react-router-dom";

export default function Card({ image, title, price, sale, id }) {

    return (
        <Link to={`/product/${id}`}>
            <CardBody>
                <Image src={image} />
                <Title>{title}</Title>
                <PriceTile>
                    <Price>R$ {price}</Price>
                    <Sale>{sale ? `-${sale}%` : ""}</Sale>
                </PriceTile>
            </CardBody>
        </Link>
    );
}


const CardBody = styledComponents.div`
    width: 120px;
    height: 185px;
    display: flex;
    flex-flow: column;
    margin-right: 30px;


    &:hover{
        cursor: pointer;
    }
`;

const Image = styledComponents.img`
    width: 125px;
    height: 137px;
    margin-bottom: 10px;
    border-radius: 20px;
`;


const Title = styledComponents.div`
    margin-bottom: 8px;
    font-weight: 700;
    color: black;
    font-family: 'Roboto', sans-serif;
`;


const PriceTile = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Price = styledComponents.span`
    font-size: 14px;
    color: #808080;
`;

const Sale = styledComponents.span`
    font-size: 14px;
    color: #FF0404;
`;
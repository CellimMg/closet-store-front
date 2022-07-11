import styledComponent from "styled-components";


export const ImageProduct = styledComponent.img`
    width: 100%;
    height: 270px;
    margin-bottom: 20px;
    border-radius: 20px;
`;

export const Title = styledComponent.div`
font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
`;


export const Sale = styledComponent.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    color: #FF0000;
    margin-top: 10px;
`;

export const Description = styledComponent.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    color: #5E5E5E;
    margin-top: 15px;
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
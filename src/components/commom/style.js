import styledComponent from "styled-components";

export const Page = styledComponent.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 10px 17px 30px 17px;
    position: relative;
`;


export const PageBody = styledComponent.div`
    width: 100%;
    height: calc(100% - 84px);
    background-color: white;
    padding: 0px 0px 30px 0px;
    overflow-y: scroll;
`;

export const FloatingButton = styledComponent.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    height: 60px;
    width: 60px;
    background-color: #7A7FFD;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
    }

    img{
        color: white;
        width: 30px;
        height: 30px;
    }
`;

export const AppBar = styledComponent.div`
    width: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    justify-content: space-between;
`;

export const LogoImg = styledComponent.img`
    width: 100px;
    height: 45px;
`;


export const IconImg = styledComponent.img`
    width: 25px;
    height: 22px;
`;
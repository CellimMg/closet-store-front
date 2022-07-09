import styled from 'styled-components'

export const Sign_up = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 39px;

img{
    width: 150px;
    height: 65px;
    margin-bottom: 78px;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input{
    margin-bottom: 13px;
    background: #FFFFFF;
    border: 1px solid #C8BDBD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    width: 303px;
    height: 45px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 14px;
    color: #000000;
    padding-left: 17px;
}

input::placeholder{
    color: #000000;
}

button{
    width: 303px;
    height: 45px;
    background: #7A7FFD;
    border-radius: 19px;
    color: #FFFDFD;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
}

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    color: #000000;
    margin-top: 37px;
}
`
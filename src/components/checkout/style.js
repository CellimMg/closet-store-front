import styled from 'styled-components'

export const Header = styled.header`
display: flex;
justify-content: space-between;
padding: 21px 23px 38px 23px;
`

export const Forms = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  color: #000000;
  padding: 0 0 11px 0px;
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
    margin-top: 158px;
    margin-left: 10px;
}

h2{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  color: #000000;
  padding: 25px 0 11px 0px;
}
`

export const AdressInputs = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

input{
    margin-bottom: 13px;
    background: #FFFFFF;
    border: 1px solid #C8BDBD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    width: 160px;
    height: 45px;
}

input::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 14px;
    color: #000000;
    padding-left: 17px;
}

.cep{
  margin-right: 8px;
}
`

export const CardInputs = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

input{
    margin-bottom: 13px;
    background: #FFFFFF;
    border: 1px solid #C8BDBD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    width: 330px;
    height: 45px;
}

input::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 14px;
    color: #000000;
    padding-left: 17px;
}
`

export const CardInputs2 = styled.div`
  display: flex;
  flex-wrap: wrap;

  input{
    margin-bottom: 13px;
    background: #FFFFFF;
    border: 1px solid #C8BDBD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    width: 160px;
    height: 45px;
}

input::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 14px;
    color: #000000;
    padding-left: 17px;
}

.cvv{
  margin-right: 8px;
}
`
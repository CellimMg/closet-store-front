import styled from 'styled-components'

export const Header = styled.header`
display: flex;
justify-content: space-between;
padding: 21px 23px 38px 23px;

.home{
  width: 21px;
  height: 21px;
  margin-top: 20px;
}
`

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;

h1{
  color: #007A22;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
}
`

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  padding: 20px 0 20px 0;
}

h3{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  line-height: 125%;
}
`
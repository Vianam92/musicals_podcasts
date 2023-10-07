import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 10px;
  heigth:60px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; 
`;

export const Title = styled.h1`
  color: rgb(12, 91, 128); 
`;

export const TitleH2 = styled.h2`
  color: white;
  background: rgb(12, 91, 128);
  text-align: center;
  margin:10px;
  padding:10px;
  border-radius:15px;
`;

export const InputSearch = styled.input`
height:30px;
padding: 20px 8px;
border-radius:5px;
border: solid 2px hsla(148, 7%, 42%, 0.293);
font-size:17px;
width:250px;

`
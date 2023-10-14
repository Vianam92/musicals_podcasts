import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  heigth: 60px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Title = styled.h1`
  color: rgb(12, 91, 128);
`;

export const TitleH2 = styled.h2`
  color: white;
  background: rgb(12, 91, 128);
  text-align: center;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
`;

export const InputSearch = styled.input`
  height: 30px;
  padding: 20px 8px;
  border-radius: 5px;
  border: solid 2px hsla(148, 7%, 42%, 0.293);
  font-size: 17px;
  width: 250px;
`;

export const ImageStyled = styled.img`
  border-radius: 50%;
`;

export const ListStyle = styled.li`
  text-transform: uppercase;
  color: black;
  font-weight: 700;
  width: 100%;
  text-align: center;
  flex-grow: 2;
`;

export const CardsEpisodes = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  padding: 15px;
  height: auto;


  section{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 15px;
  }
`;

export const LayoutGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 10rem;
  row-gap: 8rem;
  padding: 20px;
  margin-top: 80px;
`;

export const LayoutFlex = styled.article`
  display: flex;
  justify-content: center;
  row-gap: 20px;
  column-gap: 100px;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-top: 80px;
  padding-bottom: 50px;
`;

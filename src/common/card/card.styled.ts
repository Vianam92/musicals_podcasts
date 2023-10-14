import styled from "styled-components";

export const ListImage = styled.li`
  height: 250px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid rgba(128, 128, 128, 0.227);
`;

export const Image = styled.img`
  margin: 20px 0;
  width: 200px;
`;

export const Title = styled.li`
  padding: 20px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.217);

  a{
    color: black;
    display: flex;
    flex-direction: column;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 700;
  font-size: 17px;
`;

export const TitleBy = styled.small`
  font-weight: 500;
  font-size: 14px;
  padding:5px 0;
`;

export const ListDescription = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const DescriptionSpan = styled.span`
  font-weight: 700;
  margin-bottom: 10px;
`;

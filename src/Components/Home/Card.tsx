import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Post } from "../Types/Types";

const CardContainer = styled.div`
  border: 1px solid black;
  width: 50vw;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  img {
    width: 20%;
    margin-right: 10px;
  }

  h1 {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: #ced4da;
  }
`;

const Card: React.FC<{ data: Post }> = ({ data }) => {
  const navigate = useNavigate();

  const clickHandler = (e: React.MouseEvent<HTMLElement>): void => {
    navigate(`/category/${data.strCategory}`);
  };

  return (
    <CardContainer onClick={clickHandler}>
      <img src={data.strCategoryThumb} alt="404 Not Found" />
      <div>
        <h1>{data.strCategory}</h1>
        <p>{data.strCategoryDescription}</p>
      </div>
    </CardContainer>
  );
};

export default Card;

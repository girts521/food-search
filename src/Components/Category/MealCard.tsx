import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Meal } from "../Types/Types";

const CardContainer = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;

  img {
    width: 100%;
  }

  .title {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #dee2e6;
    opacity: 0.7;
    z-index: 2;

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
    }
  }
`;

const MealCard: React.FC<{ data: Meal; category: string }> = ({ data, category, }) => {
  const [hover, setHover] = useState<Boolean>(false);
  const navigate = useNavigate();

  const clickHandler = (e: React.MouseEvent<HTMLElement>): void => {
    navigate(`/category/${category}/${data.idMeal}`);
  };

  const mouseEnterHandler = (): void => {
    setHover(!hover);
  };

  return (
    <CardContainer>
      <img onMouseEnter={mouseEnterHandler} src={data.strMealThumb} alt="404 Not Found" />
      {hover && (
        <>
          <div
            onClick={clickHandler}
            onMouseLeave={mouseEnterHandler}
            className="title"
          >
            <h1>{data.strMeal}</h1>
          </div>
        </>
      )}
    </CardContainer>
  );
};

export default MealCard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Description } from "../Types/Types";

const Container = styled.div`
  width: 35vw;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 100%;
    position: relative;

    img {
      width: 100%;
    }

    .header {
      width: 100%;
      position: absolute;
      bottom: 50px;
      background-color: lightgray;

      h2 {
        text-align: center;
      }

      @media (max-width: 570px) {
        h2 {
          font-size: 12px;
        }
      }
    }
  }

  .ingredients {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;

    ul {
      padding-left: 40px;
    }
  }
  .title {
    width: 100%;
    margin-bottom: 10px;
    padding: 3px;
    background-color: lightGray;
  }

  p {
    padding: 10px;
  }
`;

const FoodDescription: React.FC = () => {
  const [data, setData] = useState<Description | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }, [params.foodId]);

  return (
    <Container>
      <div className="image">
        <div className="header">
          <h2>{data?.meals[0].strMeal}</h2>
        </div>
        <img src={data?.meals[0].strMealThumb} alt="" />
      </div>
      
      <div className="ingredients">
        <div className="title"> Ingredients:</div>
        <ul>
          {data?.meals[0].strIngredient1 && (
            <li> {data?.meals[0].strIngredient1}</li>
          )}
          {data?.meals[0].strIngredient2 && (
            <li> {data?.meals[0].strIngredient2}</li>
          )}
          {data?.meals[0].strIngredient3 && (
            <li> {data?.meals[0].strIngredient3}</li>
          )}
          {data?.meals[0].strIngredient4 && (
            <li> {data?.meals[0].strIngredient4}</li>
          )}
          {data?.meals[0].strIngredient5 && (
            <li> {data?.meals[0].strIngredient5} </li>
          )}
          {data?.meals[0].strIngredient6 && (
            <li> {data?.meals[0].strIngredient6} </li>
          )}
          {data?.meals[0].strIngredient7 && (
            <li> {data?.meals[0].strIngredient7} </li>
          )}
          {data?.meals[0].strIngredient8 && (
            <li> {data?.meals[0].strIngredient8} </li>
          )}
          {data?.meals[0].strIngredient9 && (
            <li> {data?.meals[0].strIngredient9} </li>
          )}
          {data?.meals[0].strIngredient10 && (
            <li> {data?.meals[0].strIngredient10} </li>
          )}
          {data?.meals[0].strIngredient11 && (
            <li> {data?.meals[0].strIngredient11} </li>
          )}
          {data?.meals[0].strIngredient12 && (
            <li> {data?.meals[0].strIngredient12} </li>
          )}
          {data?.meals[0].strIngredient13 && (
            <li> {data?.meals[0].strIngredient13} </li>
          )}
          {data?.meals[0].strIngredient14 && (
            <li> {data?.meals[0].strIngredient14} </li>
          )}
          {data?.meals[0].strIngredient15 && (
            <li> {data?.meals[0].strIngredient15} </li>
          )}
          {data?.meals[0].strIngredient16 && (
            <li> {data?.meals[0].strIngredient16} </li>
          )}
          {data?.meals[0].strIngredient17 && (
            <li> {data?.meals[0].strIngredient17} </li>
          )}
          {data?.meals[0].strIngredient18 && (
            <li> {data?.meals[0].strIngredient18} </li>
          )}
          {data?.meals[0].strIngredient19 && (
            <li> {data?.meals[0].strIngredient19} </li>
          )}
          {data?.meals[0].strIngredient20 && (
            <li> {data?.meals[0].strIngredient20} </li>
          )}
        </ul>
      </div>
      <div className="title">Instructions: </div>
      <p>{data?.meals[0].strInstructions}</p>
    </Container>
  );
};

export default FoodDescription;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MealCard from "./MealCard";
import { MealData } from "../Types/Types";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Category: React.FC = () => {
  const params = useParams();
  const [data, setData] = useState<MealData | null>(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <Container>
      {data
        ? data.meals.map((item) => {
            return (
              <MealCard
                key={item.idMeal}
                category={params.categoryName ? params.categoryName : ""}
                data={item}
              />
            );
          })
        : "loading..."}
    </Container>
  );
};

export default Category;

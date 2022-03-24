import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

type Food = {
        idMeal: string,
        strMeal: string,
        strDrinkAlternate: string,
        strCategory: string,
        strArea: string,
        strInstructions: string,
        strMealThumb: string,
        strTags: string,
        strYoutube: string,
        strIngredient1: string | null,
        strIngredient2: string | null,
        strIngredient3: string | null,
        strIngredient4: string | null,
        strIngredient5: string | null,
        strIngredient6: string | null,
        strIngredient7: string | null,
        strIngredient8: string | null,
        strIngredient9: string | null,
        strIngredient10: string | null,
        strIngredient11: string | null,
        strIngredient12: string | null,
        strIngredient13: string | null,
        strIngredient14: string | null,
        strIngredient15: string | null,
        strIngredient16: string | null,
        strIngredient17: string | null,
        strIngredient18: string | null,
        strIngredient19: string | null,
        strIngredient20: string | null,
        strMeasure1: string | null,
        strMeasure2: string | null,
        strMeasure3: string | null,
        strMeasure4: string | null,
        strMeasure5: string | null,
        strMeasure6: string | null,
        strMeasure7: string | null,
        strMeasure8: string | null,
        strMeasure9: string | null,
        strMeasure10: string | null,
        strMeasure11: string | null,
        strMeasure12: string | null,
        strMeasure13: string | null,
        strMeasure14: string | null,
        strMeasure15: string | null,
        strMeasure16: string | null,
        strMeasure17: string | null,
        strMeasure18: string | null,
        strMeasure19: string | null,
        strMeasure20: string | null,
        strSource: string | null,
        strImageSource: string | null,
        strCreativeCommonsConfirmed: string | null,
        dateModified: string | null
}

type Description = {
    meals: Food[]
}

const Container = styled.div`
width: 35vw;
margin:auto;
margin-top: 20px;
margin-bottom: 20px;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width:100%;
}

.ingredients{
    width: 100%;
    margin-top: 20px;
    margin-bottom:20px;

    ul {
        padding-left:40px;
    }

}
.title{
        width: 100%;
        margin-bottom: 10px;
        padding: 3px;
        background-color: lightGray;
    }

 p{
        padding: 10px;
    }
`



const FoodDescription:React.FC = () => {

    const [data, setData] = useState<Description | null>(null)

    const params = useParams()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
        .then(response => response.json())
        .then(res => {
            setData(res)            
        })
    }, [])

    return <Container>
    <img src={data?.meals[0].strMealThumb} alt="" />
    <div className="ingredients">
       <div className="title"> Ingredients:</div>
        <ul>
            {data?.meals[0].strIngredient1 && <li> {data?.meals[0].strIngredient1}</li> }
            {data?.meals[0].strIngredient2 && <li> {data?.meals[0].strIngredient2}</li> }
            {data?.meals[0].strIngredient3 && <li> {data?.meals[0].strIngredient3}</li> }
            {data?.meals[0].strIngredient4 && <li> {data?.meals[0].strIngredient4}</li> }
            {data?.meals[0].strIngredient5 && <li> {data?.meals[0].strIngredient5} </li> }
            {data?.meals[0].strIngredient6 && <li> {data?.meals[0].strIngredient6} </li>  }
            {data?.meals[0].strIngredient7 && <li> {data?.meals[0].strIngredient7} </li>  }
            {data?.meals[0].strIngredient8 && <li> {data?.meals[0].strIngredient8} </li> }
            {data?.meals[0].strIngredient9 && <li> {data?.meals[0].strIngredient9} </li> }
            {data?.meals[0].strIngredient10 && <li> {data?.meals[0].strIngredient10} </li> }
            {data?.meals[0].strIngredient11 && <li> {data?.meals[0].strIngredient11} </li> }
            {data?.meals[0].strIngredient12 && <li> {data?.meals[0].strIngredient12} </li> }
            {data?.meals[0].strIngredient13 && <li> {data?.meals[0].strIngredient13} </li> }
            {data?.meals[0].strIngredient14 && <li> {data?.meals[0].strIngredient14} </li> }
            {data?.meals[0].strIngredient15 && <li> {data?.meals[0].strIngredient15} </li> }
            {data?.meals[0].strIngredient16 && <li> {data?.meals[0].strIngredient16} </li> }
            {data?.meals[0].strIngredient17 && <li> {data?.meals[0].strIngredient17} </li> }
            {data?.meals[0].strIngredient18 && <li> {data?.meals[0].strIngredient18} </li> }
            {data?.meals[0].strIngredient19 && <li> {data?.meals[0].strIngredient19} </li> }
            {data?.meals[0].strIngredient20 && <li> {data?.meals[0].strIngredient20} </li> }  
        </ul>
    </div>
    <div className="title">Instructions: </div>
    <p>
        {data?.meals[0].strInstructions}
    </p>
  
    </Container>
}

export default FoodDescription
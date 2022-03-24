import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Card from "./Card"
import Nav from "../Nav/Nav"


type Post = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

type CategoryData = {
categories: Post[]
    
}

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
`

const Home:React.FC = () => {

    const [data, setData] = useState<CategoryData | null>(null)

useEffect(() => {

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then( response => setData(response) )
}, [])

    return <>  
    
    <HomeContainer>
    { data ? data.categories.map((item) => {

     return  <Card key={item.idCategory} data={item} />

    }) : 'Loading...'}
    </HomeContainer>
    </>

}

export default Home 
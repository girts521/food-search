import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash"

const Container = styled.nav`
height: 7vh;
border: 1px solid black;

display: flex;
flex-direction: row;
/* justify-content: center; */
align-items: center;

input{
    height: 32px;
    background-color:#ced4da;
    padding-left: 15px;
}
`

const Button = styled.button`
margin-right: 20px;
margin-left: 10px;
background-color: #97a97c;
padding: 7px;

`

type DataType = {
    id: string,
    name: string
}

const Nav:React.FC = () => {
    const navigate = useNavigate()

    // const [meal, setMeal] = useState<DataType[]>([])
    const [meal, setMeal] = useState<boolean>(true)


    const clickHandler = ():void => {
        navigate('/')
    }

    const search = async (query:string):Promise<DataType[]> => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        const data = await res.json()
        const result:DataType[] = []

        for (let i = 0; i < 10; i++){
            if(data.meals[i]){
            const meal = {
                id:data.meals[i].idMeal,
                name: data.meals[i].strMeal ,
            }
            result.push(meal)
        }
        }
        return result
    }

    const debounceSearch = debounce(async (query:string) => {
        const result = await search(query)
    }, 300)

    const changeHandler = async (e:React.ChangeEvent<HTMLInputElement>) => {
      await  debounceSearch(e.target.value)
      console.log(meal)
    }



    return <Container>
    <Button onClick={clickHandler}>HOME</Button>
    <input onChange={changeHandler} type="text" placeholder="Search meal by name" />
    <div>
        <ul>
            {/* <li>{}</li> */}
        </ul>
    </div>
    </Container>
}

export default Nav
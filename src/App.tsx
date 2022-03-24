import React from 'react';
import logo from './logo.svg';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Category from './Components/Category/Category';
import FoodDescription from './Components/FoodDescription/FoodDescription';

import {createGlobalStyle} from "styled-components"
import { Routes, Route, Link } from "react-router-dom";

 const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin:0 auto;
   }
`

const App:React.FC = () => {
  return (
    <>  
    <GlobalStyle />
     <Nav />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/category/:categoryName" element={<Category />} />
     <Route path="/category/:categoryName/:foodId" element={<FoodDescription />} />
     </Routes>
    </>

  );
}

export default App;

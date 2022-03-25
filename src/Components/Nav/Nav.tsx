import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { DataType } from "../Types/Types";

const Container = styled.nav`
  height: 7vh;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    height: 32px;
    background-color: #ced4da;
    padding-left: 15px;
    z-index: 5;
  }
  .search {
    position: relative;
    z-index: 5;
  }

  .backdrop {
    position: absolute;
    top: 0;
    background-color: transparent;
    width: 100vw;
    height: 100vh;
    z-index: 5;
  }
`;

const Button = styled.button`
  margin-right: 20px;
  margin-left: 10px;
  background-color: #97a97c;
  padding: 7px;
  z-index: 5;
  cursor: pointer;
`;

const Search = styled.div`
  position: absolute;
  background-color: pink;
  width: 100%;
  top: 36px;
  left: 0;
  z-index: 5;

  li {
    margin: 5px;
    padding: 7px;
    list-style-type: none;
    cursor: pointer;
  }
`;



const Nav: React.FC = () => {
  const navigate = useNavigate();
  const [meal, setMeal] = useState<DataType[] | undefined>([]);
  const [show, setShow] = useState<boolean>(false);

  const clickHandler = (): void => {
    setShow(false);
    navigate("/");
  };

  const search = async (query: string): Promise<DataType[]> => {
    const result: DataType[] = [];

    if (query != "") {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await res.json();

        for (let i = 0; i < 5; i++) {
          if (data.meals && data.meals[i]) {
            const meal = {
              id: data.meals[i].idMeal,
              name: data.meals[i].strMeal,
              category: data.meals[i].strCategory,
            };
            result.push(meal);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
    return result;
  };

  const debounceSearch = debounce(
    async (query: string) => {
      const result = await search(query);
      setShow(true);
      setMeal(result);
    },300, {
      leading: false,
      trailing: true,
    }
  );

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await debounceSearch(e.target.value);
  };

  useEffect(() => {
    debounceSearch.cancel();
  }, [debounceSearch]);

  const searchClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const category = e.currentTarget.dataset.category;
    const id = e.currentTarget.dataset.id;
    setShow(false);
    navigate(`/category/${category}/${id}`);
  };

  const onFocusHandler = () => {
    setShow(true);
  };

  const backdropClickHandler = () => {
    setShow(false);
  };

  return (
    <Container>
      {show && <div onClick={backdropClickHandler} className="backdrop"></div>}
      <Button onClick={clickHandler}>HOME</Button>
      <div className="search">
        <input
          onChange={changeHandler}
          onFocus={onFocusHandler}
          type="text"
          placeholder="Search meal by name"
        />
        {show && (
          <Search>
            <ul>
              {meal?.map((item) => {
                return (
                  <li
                    onClick={searchClickHandler}
                    data-category={item.category}
                    data-id={item.id}
                    key={item.id}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </Search>
        )}
      </div>
    </Container>
  );
};

export default Nav;

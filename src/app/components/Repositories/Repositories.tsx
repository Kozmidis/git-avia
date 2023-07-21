"use client";
import styles from "../Repositories/Repositories.module.css";
import { Repository } from "../Repository/Repository";
import React, { useState, ChangeEvent, MouseEvent } from "react";
import { type } from "os";
import { ResponseTypes, ReposType, OwnerType } from "../../types/types";

export const Repositories = () => {
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = React.useState<ResponseTypes>();
  const [state, setState] = React.useState({
    isLoaded: false,
    isRepos: false,
    reposNotFind: false,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClick = async (event: MouseEvent) => {
    try {
      setState({
        ...state,
        isLoaded: true,
        isRepos: false,
        reposNotFind: false,
      });
      await fetch(
        `https://api.github.com/search/repositories?q=${inputValue}+language:javascript&sort=stars&per_page=10&order=desc`
      ).then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setRepos(data);
          setState({
            ...state,
            isLoaded: false,
            isRepos: true, //добавить проверку по total_count
            reposNotFind: false,
          });
        }
      });
    } catch (event: any) {
      setState({
        ...state,
        isLoaded: false,
        isRepos: false,
        reposNotFind: true,
      });
      console.log(event.message);
    }
  };
  return (
    <>
      <div>
        <input
          placeholder="Введите имя репозитория"
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          className={styles.input}
        ></input>
        <button
          onClick={handleClick}
          className={styles.button}
          disabled={state.isLoaded}
        >
          {state.isLoaded ? " Загрузка..." : "Найти"}
        </button>
      </div>
      <div className={styles.repositoriesContainer}>
        {state.isRepos ? (
          repos.items.map((item: ReposType) => (
            <Repository key={item.id} {...item} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
// const map = data.items.map((item: ReposType) => {
//   console.log(item.owner.login);
// });

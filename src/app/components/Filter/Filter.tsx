"use client";
import styles from "../Filter/Filter.module.css";
import React, { useState, ChangeEvent, MouseEvent } from "react";
import { type } from "os";
import { ResponseTypes, FormState, OwnerType } from "../../types/types";

type FilterProps = Pick<ResponseTypes, "total_count"> & {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  repos: ResponseTypes;
  setRepos: (repos: ResponseTypes) => void;
  formState: FormState;
  setState: (formState: FormState) => void;
};

export const Filter: React.FC<FilterProps> = ({
  inputValue,
  setInputValue,
  repos,
  setRepos,
  formState,
  setState,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClick = async (event: MouseEvent) => {
    try {
      setState({
        ...formState,
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
          if (data.total_count != 0) {
            setState({
              ...formState,
              isLoaded: false,
              isRepos: true, //добавить проверку по total_count
              reposNotFind: false,
            });
          } else {
            setState({
              ...formState,
              isLoaded: false,
              isRepos: false,
              reposNotFind: true,
            });
            console.log("Репозиторий не найден");
          }
        }
      });
    } catch (event: any) {
      setState({
        ...formState,
        isLoaded: false,
        isRepos: false,
        reposNotFind: true,
      });
      console.log(event.message);
    }
  };
  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>ФИЛЬТРЫ ПОИСКА</h2>
      <input
        placeholder="Введите имя репозитория"
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        className={styles.input}
      ></input>
      <div className={styles.languageContainer}>
        <p className={styles.containerTitle}>Язык программирования:</p>
        <label className={styles.filterItem}>
          <input className={styles.vanish} type="checkbox" value="Js"></input>
          <span></span>
          <p className={styles.filterItemName}>Js</p>
        </label>
        <label className={styles.filterItem}>
          <input className={styles.vanish} type="checkbox" value="Go"></input>
          <span></span>
          <p className={styles.filterItemName}>Go</p>
        </label>
        <label className={styles.filterItem}>
          <input
            className={styles.vanish}
            type="checkbox"
            value="Python"
          ></input>
          <span></span>
          <p className={styles.filterItemName}>Python</p>
        </label>
      </div>
      <div>
        <p className={styles.containerTitle}>Дополнительно:</p>
        <label className={styles.filterItem}>
          <input className={styles.vanish} type="checkbox" value="Js"></input>
          <span></span>
          <p className={styles.filterItemName}>Форки:</p>
        </label>
        <label className={styles.filterItem}>
          <input className={styles.vanish} type="checkbox" value="Go"></input>
          <span></span>
          <p className={styles.filterItemName}>Звёзды</p>
        </label>
        <label className={styles.filterItem}>
          <input
            className={styles.vanish}
            type="checkbox"
            value="Python"
          ></input>
          <span></span>
          <p className={styles.filterItemName}>форк?</p>
        </label>
      </div>
      <button
        onClick={handleClick}
        className={styles.button}
        disabled={formState.isLoaded}
      >
        {formState.isLoaded ? " Загрузка..." : "Найти"}
      </button>
    </div>
  );
};

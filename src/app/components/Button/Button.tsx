"use client";
import styles from "../Button/Button.module.css";
import { useState, ChangeEvent, MouseEvent } from "react";
import { type } from "os";

type OwnerType = {
  login: string;
  avatar_url: string;
  html_url: string;
};

type ReposType = {
  name: string;
  language: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  html_url: string;
  owner: OwnerType;
};

export const Button = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClick = async (event: MouseEvent) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${inputValue}+language:javascript&sort=stars&per_page=10&order=desc`
    );
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data.items);
      const map = data.items.map((item: ReposType) => {
        console.log(item.owner.login);
      });
    }
  };

  return (
    <div>
      <input
        placeholder="Введите имя репозитория"
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        className={styles.input}
      ></input>
      <button onClick={handleClick} className={styles.button}>
        Найти
      </button>
    </div>
  );
};

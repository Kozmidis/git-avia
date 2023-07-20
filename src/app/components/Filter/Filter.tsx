import styles from "../Filter/Filter.module.css";
import { FC } from "react";

export const Filter = () => {
  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>ФИЛЬТРЫ ПОИСКА</h2>
      <div className={styles.languageContainer}>
        <p className={styles.containerTitle}>Язык программирования:</p>
        <label className={styles.filterItem}>
          <input type="checkbox" value="Js"></input>
          <p className={styles.filterItemName}>Js</p>
        </label>
        <label className={styles.filterItem}>
          <input type="checkbox" value="Go"></input>
          <p className={styles.filterItemName}>Go</p>
        </label>
        <label className={styles.filterItem}>
          <input type="checkbox" value="Python"></input>
          <p className={styles.filterItemName}>Python</p>
        </label>
      </div>
    </div>
  );
};

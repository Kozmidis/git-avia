import styles from "../Button/Button.module.css";

export const Button = () => {
  return (
    <div>
      <input
        placeholder="Введите имя репозитория"
        type="text"
        className={styles.input}
      ></input>
      <button className={styles.button}>Найти</button>
    </div>
  );
};

import styles from "../Repository/Repository.module.css";
import { FC } from "react";
import { ReposType } from "../../types/types";
import { type } from "os";

export const Repository: FC<ReposType> = ({
  owner,
  name,
  language,
  forks,
  html_url,
  created_at,
}) => {
  const date = new Date(created_at);
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }
  const year = date.getFullYear();
  const month = padTo2Digits(date.getMonth() + 1);
  const day = padTo2Digits(date.getDate());
  const createdRep = [day, month, year].join(".");

  return (
    <div className={styles.repository}>
      <p className={styles.lang}>{language}</p>
      <a className={styles.userProfile} href={owner.html_url}>
        <img className={styles.userImage} src={owner.avatar_url}></img>
        <p className={styles.userName}>{owner.login}</p>
      </a>

      <a className={styles.repositoryName} href={html_url}>
        <h3 className={styles.repositoryName}>{name}</h3>
      </a>

      <p className={styles.fork}>Форки: {forks}</p>
      <p className={styles.dateCreated}>Дата создания: {createdRep}</p>
    </div>
  );
};

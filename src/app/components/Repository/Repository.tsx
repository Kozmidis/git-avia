import styles from "../Repository/Repository.module.css";
import { FC } from "react";
import { ReposType } from "../../types/types";

export const Repository: FC<ReposType> = ({
  owner,
  name,
  language,
  forks,
  html_url,
}) => {
  return (
    <div className={styles.repository}>
      <p className={styles.lang}>{language}</p>
      <a className={styles.userProfile} href={owner.html_url}>
        <img className={styles.userImage} src={owner.avatar_url}></img>
        <p className={styles.userName}>{owner.login}</p>
      </a>

      <a href={html_url}>
        <h3 className={styles.repositoryName}>{name}</h3>
      </a>

      <p className={styles.fork}>Форки: {forks}</p>
      <p className={styles.dateCreated}>Дата создания: 26.06.1997</p>
    </div>
  );
};

import styles from "../Repository/Repository.module.css";
import userImage from "../../../../public/images/userImage.jpg";

export const Repository = () => {
  return (
    <div className={styles.repository}>
      <p className={styles.lang}>JavaScript</p>
      <div className={styles.userProfile}>
        <img className={styles.userImage} src={userImage.src}></img>
        <p className={styles.userName}>Юрбан Трамбовала</p>
      </div>

      <h3 className={styles.repositoryName}>Рысь/Брысь</h3>

      <p className={styles.fork}>WTF!?!</p>
      <p className={styles.dateCreated}>Дата создания: 26.06.1997</p>
    </div>
  );
};

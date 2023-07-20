import styles from "../Repositories/Repositories.module.css";
import { Repository } from "../Repository/Repository";

export const Repositories = () => {
  return (
    <>
      <div className={styles.repositoriesContainer}>
        <Repository />
        <Repository />
        <Repository />
      </div>
    </>
  );
};

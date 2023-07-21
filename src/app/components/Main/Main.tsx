import { Filter } from "../Filter/Filter";
import { Repositories } from "../Repositories/Repositories";
import styles from "../Main/Main.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Filter />
      <div className={styles.mainContainer}>
        <Repositories />
      </div>
    </div>
  );
};

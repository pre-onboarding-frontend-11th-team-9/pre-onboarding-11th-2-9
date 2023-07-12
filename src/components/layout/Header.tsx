import { REPO_INFO } from "../../constants/api";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>{REPO_INFO}</h1>
      </div>
    </header>
  );
};

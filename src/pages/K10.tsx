import { FunctionComponent } from "react";
import styles from "./K10.module.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Shared/Main";
const K10: FunctionComponent = () => {
  return (
    <div className={styles.k10}>
      <nav className={styles.nav}>
        <div className={styles.iconbutton}>
          <div className={styles.unstylediconbutton}>
            <img
              className={styles.menufilledIcon}
              alt=""
              src="/menufilled.svg"
            />
          </div>
        </div>
        <Sidebar />
      </nav>
      <Main />
    </div>
  );
};

export default K10;

import { React } from "react";
import Heading from "../heading";
import Form from "../Form";
import Button from "../Button";
import styles from "../../pages/K10.module.css";



function Main(props) {
  return (
    <div>
      <div className={styles.headingParent}>
        <Heading />

        <div className={styles.frameParent2}>
          <Form />

          <div className={styles.group}>
            <div className={styles.div9}>絞り込み検索</div>
            <img className={styles.menufilledIcon} alt="" src="/icon10.svg" />
          </div>
          <button className={styles.buttonoutlined7}>
            <div className={styles.unstyledbutton5}>
              <button className={styles.content5}>
                <div className={styles.button6}>メディアを比較</div>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="/masked-icon.svg"
                />
              </button>
            </div>
          </button>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Main;

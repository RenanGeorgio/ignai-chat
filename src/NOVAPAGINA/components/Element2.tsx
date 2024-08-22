import { FunctionComponent } from "react";
import styles from "./Element2.module.css";

export type Element2Type = {
  className?: string;
  activity?: string;
  commandSymbol1?: string;
};

const Element2: FunctionComponent<Element2Type> = ({
  className = "",
  activity,
  commandSymbol1,
}) => {
  return (
    <div className={[styles.element, className].join(" ")}>
      <img className={styles.activityIcon} alt="" src={activity} />
      <div className={styles.manageSubcription}>Manage subcription</div>
      <div className={styles.tooltips}>
        <img
          className={styles.commandSymbol1Icon}
          alt=""
          src={commandSymbol1}
        />
        <b className={styles.f}>F</b>
      </div>
    </div>
  );
}

export default Element2;
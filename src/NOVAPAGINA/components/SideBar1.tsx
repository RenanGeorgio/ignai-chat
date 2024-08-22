import { FunctionComponent } from "react";
import Element2 from "./Element2";
import styles from "./SideBar1.module.css";

export type SideBar1Type = {
  className?: string;
};

const SideBar1: FunctionComponent<SideBar1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.sideBar, className].join(" ")}>
      <div className={styles.logo} />
      <div className={styles.options}>
        <div className={styles.element}>
          <img
            className={styles.chatBubble1Icon}
            alt=""
            src="/chatbubble-1@2x.png"
          />
          <div className={styles.search}>Search</div>
          <div className={styles.tooltips}>
            <img
              className={styles.commandSymbol1Icon}
              alt=""
              src="/commandsymbol-1.svg"
            />
            <b className={styles.f}>F</b>
          </div>
        </div>
        <Element2
          activity="/activity.svg"
          commandSymbol1="/commandsymbol-1-1.svg"
        />
        <Element2
          activity="/paper.svg"
          commandSymbol1="/commandsymbol-1-2.svg"
        />
      </div>
      <img
        className={styles.logoutIcon}
        loading="lazy"
        alt=""
        src="/logout.svg"
      />
      <img
        className={styles.blackBackground1}
        loading="lazy"
        alt=""
        src="/black-background-1@2x.png"
      />
    </div>
  );
}

export default SideBar1;
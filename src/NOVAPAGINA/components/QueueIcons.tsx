import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./QueueIcons.module.css";

export type QueueIconsType = {
  className?: string;
  headphones?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propPadding1?: CSSProperties["padding"];
};

const QueueIcons: FunctionComponent<QueueIconsType> = ({
  className = "",
  headphones,
  propBackgroundColor,
  propPadding,
  propBackgroundColor1,
  propPadding1,
}) => {
  const queueIconsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const iMGStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const queueStatusesStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={[styles.queueIcons, className].join(" ")}
      style={queueIconsStyle}
    >
      <div className={styles.img} style={iMGStyle} />
      <img
        className={styles.headphonesIcon}
        loading="lazy"
        alt=""
        src={headphones}
      />
      <div className={styles.queueStatuses} style={queueStatusesStyle}>
        <div className={styles.incio1545StatusContainer}>
          <p className={styles.p}>{`554356   `}</p>
          <p className={styles.incio1545}>{`início: 15:45  `}</p>
          <p className={styles.statusOn}>{`status: on `}</p>
          <p className={styles.espera0527}>Espera: 05:27</p>
        </div>
      </div>
    </div>
  );
}

export default QueueIcons;
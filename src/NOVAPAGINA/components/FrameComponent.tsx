import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  headphones?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  headphones,
  propPadding,
  propGap,
  propPadding1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={[styles.imgParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.img} />
      <img
        className={styles.headphonesIcon}
        loading="lazy"
        alt=""
        src={headphones}
      />
      <div
        className={styles.incio1545StatusOnEsperWrapper}
        style={frameDiv1Style}
      >
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

export default FrameComponent;
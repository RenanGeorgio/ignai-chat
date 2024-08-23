import { FunctionComponent } from "react";
import QueueIcons from "./queue-icons";
import FrameComponent from "./frame-component";
import styles from "../style/queueItems.module.css";

export type QueueItemsType = {
  className?: string;
};

const QueueItems: FunctionComponent<QueueItemsType> = ({ className = "" }) => {
  return (
    <div className={[styles.queueItems, className].join(" ")}>
      <div className={styles.queueHeadings}>
        <QueueIcons headphones="/headphones-2.svg" />
        <div className={styles.queueContacts}>
          <div className={styles.img} />
          <div className={styles.contactItems}>
            <div className={styles.contactIcons}>
              <img className={styles.chat2Icon} alt="" src="/chat-2.svg" />
            </div>
            <img
              className={styles.blackAndWhiteDarkGreyFace}
              loading="lazy"
              alt=""
              src="/2515845-black-and-white-dark-grey-facebook-icon@2x.png"
            />
          </div>
          <div className={styles.queueContactStatuses}>
            <div className={styles.incio1545StatusContainer}>
              <p className={styles.p}>{`554356   `}</p>
              <p className={styles.incio1545}>{`início: 15:45  `}</p>
              <p className={styles.statusOn}>{`status: on `}</p>
              <p className={styles.espera0527}>Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.queueHeadings1}>
        <QueueIcons
          headphones="/headphones-3.svg"
          propBackgroundColor="#c0bfc8"
          propPadding="11px 7px 29px 9px"
          propBackgroundColor1="#c0bfc8"
          propPadding1="0rem 0rem 0rem var(--padding-5xs)"
        />
        <div className={styles.imgParent}>
          <div className={styles.img1} />
          <div className={styles.chat3Parent}>
            <img className={styles.chat3Icon} alt="" src="/chat-3.svg" />
            <div className={styles.logoMediaSocialWhatsappIcoWrapper}>
              <img
                className={styles.logoMediaSocialWhatsappIcoIcon}
                loading="lazy"
                alt=""
                src="/2986186-logo-media-social-whatsapp-icon-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.incio1545StatusOnEsperWrapper}>
            <div className={styles.incio1545StatusContainer1}>
              <p className={styles.p1}>{`554356   `}</p>
              <p className={styles.incio15451}>{`início: 15:45  `}</p>
              <p className={styles.statusOn1}>{`status: on `}</p>
              <p className={styles.espera05271}>Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.queueHeadings2}>
        <FrameComponent headphones="/headphones-4.svg" />
        <div className={styles.imgGroup}>
          <div className={styles.img2} />
          <div className={styles.chat4Parent}>
            <img
              className={styles.chat4Icon}
              loading="lazy"
              alt=""
              src="/chat-4.svg"
            />
            <img
              className={styles.logoMediaSocialWwwIcon}
              loading="lazy"
              alt=""
              src="/1071014-logo-media-social-www-icon@2x.png"
            />
          </div>
          <div className={styles.incio1545StatusOnEsperContainer}>
            <div className={styles.incio1545StatusContainer2}>
              <p className={styles.p2}>{`554356   `}</p>
              <p className={styles.incio15452}>{`início: 15:45  `}</p>
              <p className={styles.statusOn2}>{`status: on `}</p>
              <p className={styles.espera05272}>Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.singleContact}>
        <div className={styles.singleContactInfo}>
          <FrameComponent
            headphones="/headphones-5.svg"
            propPadding="20px 9px 28px"
            propGap="7px"
            propPadding1="0rem var(--padding-12xs) 0rem var(--padding-8xs)"
          />
          <div className={styles.contactData}>
            <div className={styles.img3} />
            <div className={styles.chat5Parent}>
              <img
                className={styles.chat5Icon}
                loading="lazy"
                alt=""
                src="/chat-5.svg"
              />
              <div className={styles.whatsappIconContainer}>
                <img
                  className={styles.logoMediaSocialWhatsappIcoIcon1}
                  loading="lazy"
                  alt=""
                  src="/2986186-logo-media-social-whatsapp-icon-2@2x.png"
                />
              </div>
            </div>
            <div className={styles.incio1545StatusContainer3}>
              <p className={styles.p3}>{`554356   `}</p>
              <p className={styles.incio15453}>{`início: 15:45  `}</p>
              <p className={styles.statusOn3}>{`status: on `}</p>
              <p className={styles.espera05273}>Espera: 05:27</p>
            </div>
          </div>
        </div>
        <div className={styles.secondContact}>
          <div className={styles.img4} />
          <div className={styles.secondContactInfo}>
            <div className={styles.instagramContact}>
              <img
                className={styles.chat6Icon}
                loading="lazy"
                alt=""
                src="/chat-6.svg"
              />
            </div>
            <img
              className={styles.blackAndWhiteDarkGreyInst}
              loading="lazy"
              alt=""
              src="/2515843-black-and-white-dark-grey-instagram-icon@2x.png"
            />
          </div>
          <div className={styles.contactStatusContainer}>
            <div className={styles.incio1545StatusContainer4}>
              <p className={styles.p4}>{`554356   `}</p>
              <p className={styles.incio15454}>{`início: 15:45  `}</p>
              <p className={styles.statusOn4}>{`status: on `}</p>
              <p className={styles.espera05274}>Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueueItems;
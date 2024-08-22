import React from "react";
import FrameComponent from "./frame-component";
import "../style/queueItems.css"; 

export type QueueItemsType = {
  className?: string;
};

const QueueItems: React.FC<QueueItemsType> = ({ className = "" }) => {
  return (
    <div className={`container ${className}`}>
      <div className={`rowWrap mq450:flex-wrap`}>
        <div className="itemWrapper">
          <div className="hiddenImage" />
          <img
            className="icon"
            loading="lazy"
            alt=""
            src="/headphones-2.svg"
          />
          <div className="textBlock">
            <div className="textContent">
              <p className="whitespace">554356</p>
              <p className="whitespace">início: 15:45</p>
              <p className="whitespace">status: on</p>
              <p className="whitespace">Espera: 05:27</p>
            </div>
          </div>
        </div>
        <div className="itemWrapper">
          <div className="hiddenImage" />
          <div className="iconGroup">
            <div className="icon">
              <img
                className="icon"
                alt=""
                src="/chat-2.svg"
              />
            </div>
            <img
              className="icon"
              loading="lazy"
              alt=""
              src="/2515845-black-and-white-dark-grey-facebook-icon@2x.png"
            />
          </div>
          <div className="textBlock">
            <div className="textContent">
              <p className="whitespace">554356</p>
              <p className="whitespace">início: 15:45</p>
              <p className="whitespace">status: on</p>
              <p className="whitespace">Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`rowWrap mq450:flex-wrap`}>
        <FrameComponent headphones="/headphones-3.svg" />
        <div className="itemWrapper">
          <div className="hiddenImage" />
          <div className="iconGroup">
            <img
              className="icon"
              alt=""
              src="/chat-3.svg"
            />
            <div className="icon">
              <img
                className="icon"
                loading="lazy"
                alt=""
                src="/2986186-logo-media-social-whatsapp-icon-1@2x.png"
              />
            </div>
          </div>
          <div className="textBlock">
            <div className="textContent">
              <p className="whitespace">554356</p>
              <p className="whitespace">início: 15:45</p>
              <p className="whitespace">status: on</p>
              <p className="whitespace">Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueItems;

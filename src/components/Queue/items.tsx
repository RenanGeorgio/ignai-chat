import type { NextPage } from "next";
import FrameComponent from "../frame-component";

export type QueueItemsType = {
  className?: string;
};

const QueueItems: NextPage<QueueItemsType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full text-left text-[0.875rem] text-ghostwhite font-body-regular ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] mq450:flex-wrap">
        <div className="flex-1 rounded-3xl bg-silver-100 flex flex-col items-start justify-start pt-[0.625rem] px-[0.562rem] pb-[1.687rem] box-border gap-[1.125rem] min-w-[9.875rem]">
          <div className="w-[10.625rem] h-[11.063rem] relative rounded-3xl bg-silver-100 hidden" />
          <img
            className="w-[1.938rem] h-[1.625rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="/headphones-2.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.312rem] pr-[0.062rem]">
            <div className="flex-1 relative leading-[1.5rem] shrink-0 z-[1]">
              <p className="m-0 whitespace-pre-wrap">{`554356   `}</p>
              <p className="m-0 whitespace-pre-wrap">{`início: 15:45  `}</p>
              <p className="m-0">{`status: on `}</p>
              <p className="m-0">Espera: 05:27</p>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xl bg-silver-200 flex flex-col items-start justify-start pt-[0.5rem] pb-[1.937rem] pl-[0.937rem] pr-[0.187rem] box-border gap-[0.687rem] min-w-[9.875rem]">
          <div className="w-[10.625rem] h-[11.063rem] relative rounded-3xl bg-silver-200 hidden" />
          <div className="flex flex-row items-end justify-start gap-[1rem]">
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/chat-2.svg"
              />
            </div>
            <img
              className="h-[1.938rem] w-[1.875rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/2515845-black-and-white-dark-grey-facebook-icon@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.375rem] pr-[0rem]">
            <div className="flex-1 relative leading-[1.5rem] shrink-0 z-[1]">
              <p className="m-0 whitespace-pre-wrap">{`554356   `}</p>
              <p className="m-0 whitespace-pre-wrap">{`início: 15:45  `}</p>
              <p className="m-0">{`status: on `}</p>
              <p className="m-0">Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] mq450:flex-wrap">
        <FrameComponent headphones="/headphones-3.svg" />
        <div className="flex-1 rounded-3xl bg-silver-200 flex flex-col items-start justify-start pt-[0.562rem] pb-[1.312rem] pl-[0.937rem] pr-[0.187rem] box-border gap-[1.437rem] min-w-[9.875rem]">
          <div className="w-[10.625rem] h-[11.063rem] relative rounded-3xl bg-silver-200 hidden" />
          <div className="flex flex-row items-end justify-start gap-[1rem]">
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/chat-3.svg"
            />
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem]">
              <img
                className="w-[1.875rem] h-[1.688rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/2986186-logo-media-social-whatsapp-icon-1@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.375rem] pr-[0rem]">
            <div className="flex-1 relative leading-[1.5rem] shrink-0 z-[1]">
              <p className="m-0 whitespace-pre-wrap">{`554356   `}</p>
              <p className="m-0 whitespace-pre-wrap">{`início: 15:45  `}</p>
              <p className="m-0">{`status: on `}</p>
              <p className="m-0">Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] mq450:flex-wrap">
        <FrameComponent
          headphones="/headphones-4.svg"
          propPadding="1.437rem 0.562rem"
          propGap="0.562rem"
          propPadding1="0rem 0.125rem 0rem 0.25rem"
        />
        <div className="flex-1 rounded-3xl bg-silver-200 flex flex-col items-start justify-start pt-[0.937rem] pb-[1.125rem] pl-[0.937rem] pr-[0.25rem] box-border gap-[1.125rem] min-w-[9.875rem]">
          <div className="w-[10.625rem] h-[11.063rem] relative rounded-3xl bg-silver-200 hidden" />
          <div className="flex flex-row items-end justify-start gap-[1rem]">
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/chat-4.svg"
            />
            <img
              className="h-[1.875rem] w-[1.875rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/1071014-logo-media-social-www-icon@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.312rem] pr-[0rem]">
            <div className="flex-1 relative leading-[1.5rem] shrink-0 z-[1]">
              <p className="m-0 whitespace-pre-wrap">{`554356   `}</p>
              <p className="m-0 whitespace-pre-wrap">{`início: 15:45  `}</p>
              <p className="m-0">{`status: on `}</p>
              <p className="m-0">Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[1rem]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] mq450:flex-wrap">
          <FrameComponent
            headphones="/headphones-5.svg"
            propPadding="1.25rem 0.562rem 1.75rem"
            propGap="0.437rem"
            propPadding1="0rem 0.062rem 0rem 0.312rem"
          />
          <div className="flex-[0.9605] rounded-3xl bg-silver-200 flex flex-col items-start justify-start pt-[1.625rem] pb-[0.75rem] pl-[0.937rem] pr-[0.562rem] gap-[0.937rem] mq450:flex-1">
            <div className="w-[10.625rem] h-[11.063rem] relative rounded-3xl bg-silver-200 hidden" />
            <div className="flex flex-row items-end justify-start gap-[1rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/chat-5.svg"
              />
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem]">
                <img
                  className="w-[1.875rem] h-[1.688rem] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/2986186-logo-media-social-whatsapp-icon-2@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch relative leading-[1.5rem] shrink-0 z-[1]">
              <p className="m-0 whitespace-pre-wrap">{`554356   `}</p>
              <p className="m-0 whitespace-pre-wrap">{`início: 15:45  `}</p>
              <p className="m-0">{`status: on `}</p>
              <p className="m-0">Espera: 05:27</p>
            </div>
          </div>
        </div>
        <div className="w-[10.625rem] rounded-3xl bg-silver-200 flex flex-col items-start justify-start pt-[1.75rem] pb-[0.5rem] pl-[0.937rem] pr-[0.25rem] box-border gap-[0.937rem]">
          <div className="w-[10.625rem] h-[11.063rem] relative rounded-3xl bg-silver-200 hidden" />
          <div className="flex flex-row items-start justify-start gap-[1rem]">
            <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/chat-6.svg"
              />
            </div>
            <img
              className="h-[1.875rem] w-[1.875rem] relative object-cover min-h-[1.875rem] z-[1]"
              loading="lazy"
              alt=""
              src="/2515843-black-and-white-dark-grey-instagram-icon@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.312rem] pr-[0rem]">
            <div className="flex-1 relative leading-[1.5rem] shrink-0 z-[1]">
              <p className="m-0 whitespace-pre-wrap">{`554356   `}</p>
              <p className="m-0 whitespace-pre-wrap">{`início: 15:45  `}</p>
              <p className="m-0">{`status: on `}</p>
              <p className="m-0">Espera: 05:27</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueItems;
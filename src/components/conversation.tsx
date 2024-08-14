import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Input from "./input";

export type ConversationType = {
  className?: string;
};

const Conversation: NextPage<ConversationType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-whitesmoke-100 overflow-hidden flex flex-col items-end justify-start min-w-[39.813rem] max-w-full text-left text-[0.875rem] text-gray-2 font-body-regular mq850:min-w-full ${className}`}
    >
      <div className="self-stretch bg-white border-line border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-[1.5rem] px-[2rem] pb-[1.375rem] max-w-full text-[1.25rem] text-black">
        <div className="flex-1 flex flex-row items-center justify-start py-[0.625rem] px-[0rem] box-border gap-[0.75rem] max-w-full mq850:flex-wrap">
          <img
            className="h-[2.5rem] w-[2.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start relative min-w-[35.125rem] max-w-full mq850:min-w-full">
            <h3 className="m-0 self-stretch relative text-inherit leading-[1.75rem] font-semibold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
              Bot Tira Dúvidas
            </h3>
            <div className="self-stretch flex flex-row items-center justify-start max-w-full text-[0.875rem] text-gray-1">
              <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                Escrevendo...
              </div>
            </div>
            <input
              className="!m-[0] w-[1.75rem] h-[2rem] absolute top-[0rem] left-[11.063rem] z-[1]"
              type="checkbox"
            />
            <div className="w-[1.75rem] h-[2rem] !m-[0] absolute top-[0rem] left-[42.438rem] z-[1]" />
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-3xl bg-whitesmoke-100 flex flex-col items-center justify-start pt-[2rem] px-[2rem] pb-[50.125rem] box-border gap-[1.25rem] max-w-full text-right mq850:pt-[1.25rem] mq850:pb-[21.188rem] mq850:box-border mq1225:pt-[1.313rem] mq1225:pb-[32.563rem] mq1225:box-border">
        <div className="self-stretch flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border relative gap-[0.25rem] max-w-full">
          <div className="self-stretch relative leading-[1.5rem] whitespace-nowrap">{`11:03 AM `}</div>
          <TextField
            className="[border:none] bg-[transparent] w-full h-[3rem] font-body-regular text-[0.875rem] text-white max-w-[45.313rem] mq850:max-w-full"
            placeholder="Olá, estou a qui para lhe ajudar, qual sua dúvida?"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "48px",
                backgroundColor: "#202226",
                borderRadius: "12px 0px 12px 12px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />
          <div className="w-[45.313rem] !m-[0] absolute top-[-26.75rem] left-[11.938rem] rounded-tl-xl rounded-tr-none rounded-b-xl bg-black flex flex-row items-center justify-end py-[0.75rem] px-[1.25rem] box-border max-w-[45.313rem] text-left text-white mq850:max-w-full">
            <div className="h-[3rem] flex-1 relative leading-[1.5rem] inline-block max-w-full">
              Uhmm, olhei no sistema aqui e ví que realmente o seu pedido
              deveria ter chegado, vou lhe passar para um de nossos atendentes
              para averiguarmos melhor.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] pb-[1.875rem] pl-[0rem] pr-[11.937rem] gap-[0.75rem] text-left text-black mq1225:pr-[5.938rem] mq1225:box-border mq450:pr-[2.938rem] mq450:box-border">
          <div className="flex flex-row items-start justify-start gap-[0.75rem]">
            <div className="relative leading-[1.5rem] font-semibold inline-block min-w-[4.688rem]">
              Atendente
            </div>
            <div className="relative leading-[1.5rem] text-gray-2 inline-block min-w-[3.438rem] whitespace-nowrap">{`11:05 AM `}</div>
          </div>
          <div className="w-full rounded-tl-none rounded-tr-xl rounded-b-xl bg-whitesmoke-300 flex flex-row items-center justify-start py-[2rem] px-[1.25rem] box-border max-w-[45.313rem] mq850:max-w-full">
            <div className="flex flex-row items-start justify-start gap-[0.375rem]">
              <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-gray-200" />
              <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-neutral-07-100" />
              <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
      <Input
        smile1="/smile-1.svg"
        image="/image.svg"
        attach="/attach.svg"
        location1="/location.svg"
      />
    </div>
  );
}

export default Conversation;
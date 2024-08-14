import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import SideBar from "@components/side-bar";
import Title from "@components/title";
import Conversation from "@components/conversation";

const Page: NextPage = () => {
  return (
    <div className="w-full relative rounded-13xl bg-black overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] text-center text-[1.25rem] text-black font-body-regular mq1525:flex-wrap mq1525:pl-[1.25rem] mq1525:pr-[1.25rem] mq1525:box-border">
      <div className="h-[81.25rem] w-[6.25rem] flex flex-row items-start justify-start mq1525:hidden">
        <SideBar
          chatBubble1="/chatbubble-1@2x.png"
          commandSymbol1="/commandsymbol-1.svg"
          activity="/activity.svg"
          activity="/paper.svg"
        />
      </div>
      <main className="flex-1 border-darkslategray-200 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start min-w-[57.188rem] max-w-full mq1225:min-w-full">
        <section className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-[0.875rem] text-white font-body-regular mq1225:flex-wrap">
          <div className="w-[26.75rem] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[7.5rem] box-border min-w-[26.75rem] max-w-full mq850:pb-[3.188rem] mq850:box-border mq850:min-w-full mq1225:flex-1 mq1225:pb-[4.875rem] mq1225:box-border">
            <Title
              fAQ="FAQ"
              icon16LineEdit="/icon16lineedit.svg"
              search="/search.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-full mq450:gap-[1.25rem]">
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[2rem] pb-[39.75rem] box-border gap-[1rem] max-w-full mq850:pb-[16.75rem] mq850:box-border mq1225:pb-[25.813rem] mq1225:box-border">
                <div className="self-stretch relative leading-[1.5rem] text-gray-2">
                  Perguntas em destaque
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch rounded-341xl border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.875rem] px-[0.937rem] whitespace-nowrap max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Como encontrar a 2 via do cliente?
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch rounded-341xl border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.875rem] px-[0.937rem] whitespace-nowrap max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Qual botão pula para o próximo da fila?
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch rounded-341xl border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.875rem] px-[0.937rem] whitespace-nowrap max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Como atender somente ligação?
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch rounded-341xl border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.875rem] px-[0.937rem] whitespace-nowrap max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Como atender somente WhatsApp?
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch rounded-341xl border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.875rem] px-[0.937rem] whitespace-nowrap max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Qual o tempo máximo de espera do cliente?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Conversation />
        </section>
      </main>
      <div className="w-[25.75rem] bg-whitesmoke-200 border-line border-l-[1px] border-solid box-border flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[36.125rem] gap-[1.25rem] max-w-full mq850:pb-[15.25rem] mq850:box-border mq1225:pb-[23.5rem] mq1225:box-border">
        <div className="self-stretch border-line border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[2.125rem] px-[0.5rem] pb-[2rem] max-w-full">
          <h3 className="m-0 flex-1 relative text-inherit leading-[1.75rem] font-semibold font-inherit inline-block max-w-full mq450:text-[1rem] mq450:leading-[1.375rem]">
            Relatar bug
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.75rem] box-border max-w-full text-left text-[0.875rem] text-ghostwhite">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.437rem] max-w-full mq450:gap-[1.188rem]">
            <div className="self-stretch rounded-3xl bg-silver-200 flex flex-col items-start justify-start pt-[0.75rem] px-[1.687rem] pb-[1.375rem] relative gap-[19.875rem] mq450:gap-[9.938rem]">
              <div className="self-stretch h-[25rem] relative rounded-3xl bg-silver-200 hidden z-[0]" />
              <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 hidden z-[1]" />
              <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 hidden z-[2]" />
              <div className="w-[12.125rem] relative leading-[1.5rem] inline-block z-[2]">
                Escreva seu problema...
              </div>
              <div className="w-[1.875rem] h-[1.938rem] relative hidden z-[4]" />
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="flex flex-row items-start justify-start gap-[0.812rem]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/attach-1.svg"
                  />
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-1.svg"
                  />
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] w-full h-[2.438rem] absolute !m-[0] right-[0rem] bottom-[-9.625rem] left-[0rem]"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "39px",
                    backgroundColor: "#c0bfc8",
                    borderRadius: "24px",
                  },
                  width: "356px",
                }}
              />
              <TextField
                className="[border:none] bg-[transparent] w-full h-[2.438rem] absolute !m-[0] right-[0rem] bottom-[-13.062rem] left-[0rem]"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "39px",
                    backgroundColor: "#c0bfc8",
                    borderRadius: "24px",
                  },
                  width: "356px",
                }}
              />
            </div>
            <div className="w-[21.438rem] flex flex-row items-start justify-start py-[0rem] px-[2rem] box-border max-w-full text-center text-[1.25rem] text-black">
              <div className="flex-1 flex flex-col items-end justify-start gap-[3.187rem] mq450:gap-[1.563rem]">
                <div className="w-[16.75rem] flex flex-row items-start justify-end py-[0rem] px-[2.312rem] box-border">
                  <h3 className="m-0 flex-1 relative text-inherit leading-[1.75rem] font-semibold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
                    Lista de tickets
                  </h3>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] text-left text-[0.875rem] text-ghostwhite mq450:flex-wrap mq450:justify-center">
                  <div className="w-[12.125rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1.937rem]">
                      <div className="self-stretch relative leading-[1.5rem] font-semibold">
                        <ol className="m-0 font-inherit text-inherit pl-[1.357rem]">
                          <li>Erro ao coletar dados</li>
                        </ol>
                      </div>
                      <div className="self-stretch relative leading-[1.5rem] font-semibold">
                        <ol className="m-0 font-inherit text-inherit pl-[1.357rem]">
                          <li>Erro no buscador</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start gap-[1.5rem]">
                    <img
                      className="w-[2.313rem] h-[2.063rem] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/3668844-clock-pending-time-icon-1@2x.png"
                    />
                    <div className="flex flex-row items-start justify-end py-[0rem] pl-[0.25rem] pr-[0.125rem]">
                      <img
                        className="h-[1.938rem] w-[1.938rem] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/1329086-circle-done-downloaded-icon-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
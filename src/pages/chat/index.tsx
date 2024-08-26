import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import SideBar from "@components/side-bar";
import { TicketsComponent } from "@components/Tickets";
import { QueueComponent } from "@components/Queue";

const Dashboard: NextPage = () => {
  return (
    <div className="w-full relative rounded-[32px] bg-black overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] text-left text-[0.75rem] text-neutral-04-50 font-caption-1 mq1525:flex-wrap mq1525:pl-[1.25rem] mq1525:pr-[1.25rem] mq1525:box-border">
      <div className="h-[81.25rem] w-[6.25rem] flex flex-row items-start justify-start mq1525:hidden">
        <SideBar />
      </div>
      <main className="flex-1 flex flex-col items-start justify-start min-w-[57.188rem] max-w-full mq1225:min-w-full">
        <section className="self-stretch border-darkslategray-200 border-l-[1px] border-solid box-border flex flex-col items-start justify-start relative max-w-full text-left text-[0.75rem] text-neutral-06-100 font-caption-1">
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-[2rem] text-white font-body-regular mq1225:flex-wrap">
            <TicketsComponent />
            <div className="flex-1 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-whitesmoke-100 flex flex-col items-end justify-start min-w-[39.813rem] max-w-full text-[0.875rem] text-black mq850:min-w-full">
              <header className="self-stretch bg-white border-line border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-[2.125rem] px-[2rem] pb-[2rem] sticky gap-[1.25rem] top-[0] z-[99] max-w-full text-left text-[0.875rem] text-gray-1 font-body-regular">
                <div className="flex-1 flex flex-row items-center justify-start gap-[0.75rem] max-w-full">
                  <img
                    className="h-[2.563rem] w-[3rem] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/2986186-logo-media-social-whatsapp-icon@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start py-[0rem] px-[0rem] box-border relative max-w-full">
                    <div className="self-stretch relative text-[1.25rem] leading-[1.75rem] font-semibold text-black whitespace-nowrap mq1225:hidden">{`Nome: Perim Supermercado - CNPJ: 05.026.424/0001-50 `}</div>
                    <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                      <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                        Escrevendo...
                      </div>
                    </div>
                    <div className="w-[14.875rem] !m-[0] absolute top-[3.25rem] left-[40.625rem] flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[1.5rem] whitespace-nowrap">
                        Tempo atendimento: 03:46
                      </div>
                    </div>
                    <input
                      className="!m-[0] w-[1.75rem] h-[2rem] absolute top-[0rem] left-[38.938rem] z-[1]"
                      type="checkbox"
                    />
                    <div className="!m-[0] absolute top-[0rem] left-[42.438rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] z-[1]">
                      <img
                        className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/video-1.svg"
                      />
                    </div>
                    <div className="!m-[0] absolute top-[0.188rem] left-[43.063rem] flex flex-row items-center justify-start pt-[0.268rem] pb-[0.125rem] px-[0rem] z-[2]">
                      <a className="[text-decoration:none] w-[0.875rem] relative leading-[1.106rem] text-[inherit] inline-block shrink-0">
                        x
                      </a>
                    </div>
                  </div>
                </div>
                <div className="!m-[0] absolute top-[2.125rem] left-[52.875rem] flex flex-row items-start justify-start gap-[1.25rem] z-[1]">
                  <img
                    className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem]"
                    loading="lazy"
                    alt=""
                    src="/sidebar.svg"
                  />
                  <img
                    className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem]"
                    loading="lazy"
                    alt=""
                    src="/more-1.svg"
                  />
                </div>
              </header>
              <div className="self-stretch h-[66.75rem] rounded-3xl bg-whitesmoke-100 flex flex-col items-center justify-start pt-[2rem] px-[2rem] pb-[0rem] box-border relative gap-[1.25rem] max-w-full">
                <div className="self-stretch h-[15.375rem] flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border relative gap-[0.75rem] max-w-full shrink-0 text-gray-100">
                  <div className="w-[45.313rem] !m-[0] absolute top-[1.125rem] left-[11.938rem] rounded-tl-xl rounded-tr-none rounded-b-xl bg-black flex flex-row items-center justify-end py-[0.75rem] px-[1.25rem] box-border max-w-[45.313rem] mq850:max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Olá! Sou o bot de atedimento da Unimarka. Favor digitar
                      seu nome e CNPJ ou 0 caso não seja cliente.
                    </div>
                  </div>
                  <div className="w-[45.313rem] !m-[0] absolute top-[12.375rem] left-[11.938rem] rounded-tl-xl rounded-tr-none rounded-b-xl bg-black flex flex-row items-center justify-end py-[0.75rem] px-[1.25rem] box-border max-w-[45.313rem] mq850:max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Achei seu cadastro :) Poderia me explicar em algumas
                      palavras o motivo do contato?
                    </div>
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] w-[45.313rem] h-[2.688rem] !m-[0] absolute top-[8.5rem] left-[0rem] font-body-regular text-[0.875rem] text-black max-w-[45.313rem] mq850:max-w-full"
                    placeholder="Meu nome é Marcelo Almeida e o CNPJ é 05.026.424/0001-50"
                    variant="outlined"
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "43px",
                        backgroundColor: "#eaeaea",
                        borderRadius: "0px 12px 12px 12px",
                        fontSize: "14px",
                      },
                      "& .MuiInputBase-input": { color: "#202226" },
                      width: "725px",
                    }}
                  />
                  <div className="!m-[0] absolute top-[6.438rem] left-[0rem] flex flex-row items-start justify-start gap-[0.687rem] text-black">
                    <div className="relative leading-[1.5rem] font-semibold inline-block min-w-[7rem]">
                      Cliente 5532431
                    </div>
                    <div className="relative leading-[1.5rem] text-gray-2 inline-block min-w-[3.438rem] whitespace-nowrap">{`11:03 AM `}</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] pb-[12.875rem] pl-[0rem] pr-[11.937rem] gap-[0.75rem] mq450:pr-[2.938rem] mq450:box-border mq1225:pr-[5.938rem] mq1225:box-border">
                  <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                    <div className="relative leading-[1.5rem] font-semibold">
                      Marcelo Almeida (PERIM)
                    </div>
                    <div className="relative leading-[1.5rem] text-gray-2 inline-block min-w-[3.438rem] whitespace-nowrap">{`11:04 AM `}</div>
                  </div>
                  <div className="w-full h-[4.5rem] rounded-tl-none rounded-tr-xl rounded-b-xl bg-whitesmoke-200 flex flex-row items-center justify-start py-[0.75rem] px-[1.187rem] box-border relative max-w-[45.313rem] mq850:max-w-full">
                    <div className="w-[42.938rem] absolute !m-[0] top-[0.75rem] left-[1.188rem] leading-[1.5rem] inline-block">
                      Bom dia, estou com um problema em que meu pedido está
                      atrasado, eu chequei na plataforma e a data prevista era
                      para o dia 23 hoje é dia 25, gostaria de saber o que
                      aconteceu.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[0.25rem] max-w-full shrink-0 text-right text-gray-2">
                  <div className="self-stretch relative leading-[1.5rem] whitespace-nowrap">{`11:03 AM `}</div>
                  <div className="w-full rounded-tl-xl rounded-tr-none rounded-b-xl bg-black flex flex-row items-center justify-end py-[0.75rem] px-[1.25rem] box-border max-w-[45.313rem] text-left text-white mq850:max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Bom dia! Me chamo Gabriel e estou aqui para lhe ajudar!!
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[11.937rem] box-border gap-[0.25rem] max-w-full shrink-0 mq450:pr-[2.938rem] mq450:box-border mq1225:pr-[5.938rem] mq1225:box-border">
                  <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                    <div className="relative leading-[1.5rem] font-semibold">
                      Marcelo Almeida (PERIM)
                    </div>
                    <div className="relative leading-[1.5rem] text-gray-2 inline-block min-w-[3.438rem] whitespace-nowrap">{`11:05 AM `}</div>
                  </div>
                  <div className="w-full rounded-t-xl rounded-br-xl rounded-bl-none bg-whitesmoke-200 flex flex-row items-center justify-end py-[0.75rem] px-[1.25rem] box-border max-w-[45.313rem] mq850:max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Bom dia, estou com um problema em que meu pedido está
                      atrasado, eu chequei na plataforma e a data prevista era
                      para o dia 23 hoje é dia 25, gostaria de saber o que
                      aconteceu.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border relative gap-[0.25rem] shrink-0 max-w-full text-white">
                  <div className="self-stretch relative leading-[1.5rem] text-gray-2 text-right whitespace-nowrap">{`11:03 AM `}</div>
                  <div className="w-full rounded-tl-xl rounded-tr-none rounded-b-xl bg-black flex flex-row items-center justify-end py-[0.75rem] px-[1.25rem] box-border max-w-[45.313rem] mq850:max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Claro! Vou entrar em contato com o time de logística para
                      eles averiguarem o ocorrido, poderia esperar 5 minutinhos?
                      Caso não possa esperar nós lhe enviaremos as informações
                      por e-mail.
                    </div>
                  </div>
                  <div className="w-[45.313rem] !m-[0] absolute top-[-26.75rem] left-[11.938rem] rounded-tl-xl rounded-tr-none rounded-b-xl bg-black flex flex-row items-center justify-end py-[0.75rem] px-[1.25rem] box-border max-w-[45.313rem] mq850:max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Uhmm, olhei no sistema aqui e ví que realmente o seu
                      pedido deveria ter chegado, vou lhe passar para um de
                      nossos atendentes para averiguarmos melhor.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] pb-[1.875rem] pl-[0rem] pr-[11.937rem] gap-[0.75rem] mq450:pr-[2.938rem] mq450:box-border mq1225:pr-[5.938rem] mq1225:box-border">
                  <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                    <div className="relative leading-[1.5rem] font-semibold">
                      Marcelo Almeida (PERIM)
                    </div>
                    <div className="relative leading-[1.5rem] text-gray-2 inline-block min-w-[3.438rem] whitespace-nowrap">{`11:05 AM `}</div>
                  </div>
                  <div className="w-full rounded-tl-none rounded-tr-xl rounded-b-xl bg-whitesmoke-200 flex flex-row items-center justify-start py-[2rem] px-[1.25rem] box-border max-w-[45.313rem] mq850:max-w-full">
                    <div className="flex flex-row items-start justify-start gap-[0.375rem]">
                      <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-gray-200" />
                      <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-neutral-07-100" />
                      <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-gray-300" />
                    </div>
                  </div>
                </div>
                <div className="w-[57.25rem] !m-[0] absolute top-[31rem] left-[2rem] flex flex-col items-end justify-start gap-[0.25rem] max-w-full z-[1] text-right text-gray-2">
                  <div className="self-stretch relative leading-[1.5rem] whitespace-nowrap">{`11:03 AM `}</div>
                  <TextField
                    className="[border:none] bg-[transparent] w-full h-[3rem] font-body-regular text-[0.875rem] text-white max-w-[45.313rem] mq850:max-w-full"
                    placeholder="Você está na posição 0 da fila de atendimento"
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
                </div>
              </div>
              <div className="self-stretch bg-white flex flex-col items-start justify-start p-[2rem] box-border max-w-full text-gray-2 font-plus-jakarta-sans">
                <div className="self-stretch rounded-31xl bg-whitesmoke-100 flex flex-row items-center justify-start p-[0.75rem] box-border gap-[1rem] max-w-full mq850:flex-wrap">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                    loading="lazy"
                    alt=""
                    src="/smile-1.svg"
                  />
                  <div className="flex-1 relative leading-[0.625rem] font-medium inline-block min-w-[8.313rem] max-w-full">
                    Escreva sua mensagem...
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/image.svg"
                  />
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative"
                    loading="lazy"
                    alt=""
                    src="/attach.svg"
                  />
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative"
                    loading="lazy"
                    alt=""
                    src="/location.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="!m-[0] absolute top-[38.5rem] right-[23.125rem] rounded-md bg-neutral-03-100 flex flex-row items-start justify-start py-[0.125rem] px-[0.5rem] gap-[0.5rem] z-[1]">
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1rem] h-[1rem] relative"
                loading="lazy"
                alt=""
                src="/pausecircle.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[1.25rem] font-medium inline-block min-w-[7.938rem]">
              Fim atedimento via bot
            </div>
          </div>
          <div className="!m-[0] absolute right-[22.375rem] bottom-[34.5rem] rounded-md bg-neutral-03-100 flex flex-row items-start justify-start py-[0.125rem] px-[0.5rem] gap-[0.5rem] z-[1]">
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1rem] h-[1rem] relative"
                loading="lazy"
                alt=""
                src="/pausecircle-1.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[1.25rem] font-medium">
              Início atendimento humano
            </div>
          </div>
        </section>
      </main>
      <img
        className="h-[1rem] w-[1.125rem] absolute !m-[0] top-[37.375rem] left-[9.438rem] z-[1]"
        loading="lazy"
        alt=""
        src="/headphones-1.svg"
      />
      <div className="h-[1.5rem] hidden flex-row items-start justify-start z-[3]">
        <div className="self-stretch flex-1 relative tracking-[-0.02em] leading-[1.5rem] font-semibold">
          Just now
        </div>
      </div>
      <div className="h-[1.75rem] rounded-md bg-neutral-03-100 hidden flex-row items-center justify-center py-[0.125rem] px-[0.5rem] box-border z-[4] text-neutral-06-100">
        <div className="flex-1 relative tracking-[-0.02em] leading-[1.25rem] font-medium">
          Copy
        </div>
      </div>
      <div className="rounded-md bg-neutral-03-100 hidden flex-row items-center justify-center py-[0.125rem] px-[0.5rem] gap-[0.5rem] z-[5]">
        <img
          className="h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]"
          alt=""
          src="/hearteyes@2x.png"
        />
        <img
          className="h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]"
          alt=""
          src="/unamused@2x.png"
        />
      </div>
      <div className="h-[1.5rem] hidden flex-row items-start justify-start z-[6]">
        <div className="self-stretch flex-1 relative tracking-[-0.02em] leading-[1.5rem] font-semibold">
          Just now
        </div>
      </div>
      <div className="h-[1.75rem] rounded-md bg-neutral-03-100 hidden flex-row items-center justify-center py-[0.125rem] px-[0.5rem] box-border z-[7] text-neutral-06-100">
        <div className="flex-1 relative tracking-[-0.02em] leading-[1.25rem] font-medium">
          Copy
        </div>
      </div>
      <QueueComponent />
      <div className="rounded-md bg-neutral-03-100 hidden flex-row items-center justify-center py-[0.125rem] px-[0.5rem] gap-[0.5rem] z-[9]">
        <img
          className="h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]"
          alt=""
          src="/hearteyes-1@2x.png"
        />
        <img
          className="h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]"
          alt=""
          src="/unamused-1@2x.png"
        />
      </div>
    </div>
  );
}

export default Dashboard
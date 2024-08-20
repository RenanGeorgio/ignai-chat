import React from "react";
import { TextField } from "@mui/material";
import SideBar from "../../components/side-bar";

const Page: React.FC = () => {
  return (
    <div className="w-full relative rounded-13xl bg-black overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1050:pl-[1.25rem] mq1050:pr-[1.25rem] mq1050:box-border">
      <div className="h-[81.25rem] w-[6.25rem] flex flex-row items-start justify-start mq1050:hidden">
        <SideBar />
      </div>
      <main className="flex-1 border-darkslategray-200 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-[calc(100%_-_100px)] mq1050:max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[50.875rem] box-border relative max-w-full text-left text-[2rem] text-white font-body-regular lg:pr-[25.438rem] lg:box-border mq450:pr-[1.25rem] mq450:box-border mq750:pr-[12.688rem] mq750:box-border">
          <div className="w-[26.75rem] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[8rem] box-border max-w-full mq1050:pb-[5.188rem] mq1050:box-border mq750:pb-[3.375rem] mq750:box-border">
            <div className="self-stretch border-darkslategray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-[2.25rem] px-[2rem] pb-[2.125rem] max-w-full">
              <a className="[text-decoration:none] flex-1 relative leading-[2.5rem] font-semibold text-[inherit] inline-block max-w-full mq1050:text-[1.625rem] mq1050:leading-[2rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                Usuário
              </a>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-full text-[0.875rem] mq450:gap-[1.25rem]">
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[2rem] pb-[42.25rem] box-border gap-[1rem] min-h-[63.75rem] max-w-full mq1050:pb-[27.438rem] mq1050:box-border mq750:pb-[17.813rem] mq750:box-border">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch rounded-341xl border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.875rem] px-[0.937rem] whitespace-nowrap max-w-full">
                    <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                      Marcio Pereira de Abreu
                    </div>
                  </div>
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[3.5rem] font-body-regular text-[0.875rem] text-white"
                  placeholder="Atendente 10345"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#3e4249" },
                    /*
                    "& .MuiInputBase-root": {
                      height: "56px",
                      borderRadius: "360px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#fff" },
                    */
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[3.5rem] font-body-regular text-[0.875rem] text-white"
                  placeholder="Ativo"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#3e4249" },
                    /*
                    "& .MuiInputBase-root": {
                      height: "56px",
                      borderRadius: "360px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#fff" },
                    */
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[3.5rem] font-body-regular text-[0.875rem] text-white"
                  placeholder="e-mail: marcio.pereira@unimarka.com.br"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#3e4249" },
                    /*
                    "& .MuiInputBase-root": {
                      height: "56px",
                      borderRadius: "360px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#fff" },
                    */
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[3.5rem] font-body-regular text-[0.875rem] text-white"
                  placeholder="Telefone: (27) 99701-6060"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#3e4249" },
                    /*
                    "& .MuiInputBase-root": {
                      height: "56px",
                      borderRadius: "360px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#fff" },
                    */
                  }}
                />
              </div>
            </div>
          </div>
          <div className="absolute !m-[0] top-[76.5rem] left-[51.375rem] text-[0.938rem] leading-[2.5rem] font-semibold">
            IGNAI, marca registrada
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
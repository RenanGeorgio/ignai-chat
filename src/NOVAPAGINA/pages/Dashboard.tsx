import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import SideBar1 from "../components/SideBar1";
import QueueItems from "../components/QueueItems";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sideBar}>
        <SideBar1 />
      </div>
      <main className={styles.contentWrapper}>
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.message}>
              <div className={styles.title}>
                <h1 className={styles.messagens}>Messagens</h1>
                <div className={styles.notification}>
                  <img
                    className={styles.icon16lineedit}
                    alt=""
                    src="/icon16lineedit.svg"
                  />
                </div>
                <div className={styles.notification1}>
                  <img className={styles.searchIcon} alt="" src="/search.svg" />
                </div>
              </div>
              <div className={styles.conversationList}>
                <div className={styles.menu}>
                  <div className={styles.hoje}>Hoje</div>
                  <div className={styles.list}>
                    <div className={styles.menu1}>
                      <img
                        className={styles.chat1Icon}
                        alt=""
                        src="/chat-1.svg"
                      />
                      <div className={styles.incio1545Status}>
                        554356 início: 15:45 status: on 5:27
                      </div>
                    </div>
                    <div className={styles.menu2}>
                      <img
                        className={styles.chat1Icon1}
                        alt=""
                        src="/chat-1-1.svg"
                      />
                      <div className={styles.incio1543Status}>
                        554355 início: 15:43 status: espera 03:45
                      </div>
                    </div>
                    <div className={styles.menu3}>
                      <img
                        className={styles.chat1Icon2}
                        loading="lazy"
                        alt=""
                        src="/chat-1-2.svg"
                      />
                      <div className={styles.incio1540Fim}>
                        554354 início: 15:40 fim: 15:42 - ÑR
                      </div>
                    </div>
                    <div className={styles.menu4}>
                      <img
                        className={styles.chat1Icon3}
                        loading="lazy"
                        alt=""
                        src="/chat-1-3.svg"
                      />
                      <div
                        className={styles.incio1530Fim}
                      >{`554353   início: 15:30  fim: 15:40 - R `}</div>
                    </div>
                    <div className={styles.menu5}>
                      <img
                        className={styles.chat1Icon4}
                        loading="lazy"
                        alt=""
                        src="/chat-1-4.svg"
                      />
                      <div
                        className={styles.incio1520Fim}
                      >{`554352   início: 15:20  fim: 15:30 - R `}</div>
                    </div>
                    <div className={styles.menu6}>
                      <img
                        className={styles.chat1Icon5}
                        alt=""
                        src="/chat-1-5.svg"
                      />
                      <div
                        className={styles.incio1510Fim}
                      >{`554351   início: 15:10  fim: 15:15 - R `}</div>
                    </div>
                    <div className={styles.menu7}>
                      <img
                        className={styles.chat1Icon6}
                        alt=""
                        src="/chat-1-6.svg"
                      />
                      <div
                        className={styles.incio1506Fim}
                      >{`554350   início: 15:06  fim: 15:13 - ÑR `}</div>
                      <img
                        className={styles.headphonesIcon}
                        loading="lazy"
                        alt=""
                        src="/headphones.svg"
                      />
                    </div>
                    <div className={styles.menu8}>
                      <img
                        className={styles.chat1Icon7}
                        loading="lazy"
                        alt=""
                        src="/chat-1-7.svg"
                      />
                      <div
                        className={styles.incio1501Fim}
                      >{`554349   início: 15:01  fim: 15:05 - R `}</div>
                    </div>
                    <div className={styles.menu9}>
                      <img
                        className={styles.chat1Icon8}
                        loading="lazy"
                        alt=""
                        src="/chat-1-8.svg"
                      />
                      <div
                        className={styles.incio1455Fim}
                      >{`554349   início: 14:55  fim: 15:00 - R `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.conversation}>
              <header className={styles.groupChat}>
                <div className={styles.conversation1}>
                  <img
                    className={styles.logoMediaSocialWhatsappIcoIcon}
                    loading="lazy"
                    alt=""
                    src="/2986186-logo-media-social-whatsapp-icon@2x.png"
                  />
                  <div className={styles.conversation2}>
                    <div
                      className={styles.nomePerimSupermercado}
                    >{`Nome: Perim Supermercado - CNPJ: 05.026.424/0001-50 `}</div>
                    <div className={styles.address}>
                      <div className={styles.escrevendo}>Escrevendo...</div>
                    </div>
                    <div className={styles.address1}>
                      <div className={styles.tempoAtendimento0346}>
                        Tempo atendimento: 03:46
                      </div>
                    </div>
                    <input className={styles.icon} type="checkbox" />
                    <div className={styles.icon1}>
                      <img
                        className={styles.videoIcon}
                        loading="lazy"
                        alt=""
                        src="/video-1.svg"
                      />
                    </div>
                    <div className={styles.address2}>
                      <a className={styles.x}>x</a>
                    </div>
                  </div>
                </div>
                <div className={styles.icon2}>
                  <img
                    className={styles.sidebarIcon}
                    loading="lazy"
                    alt=""
                    src="/sidebar.svg"
                  />
                  <img
                    className={styles.more1Icon}
                    loading="lazy"
                    alt=""
                    src="/more-1.svg"
                  />
                </div>
              </header>
              <div className={styles.conversation3}>
                <div className={styles.bot}>
                  <div className={styles.chat}>
                    <div className={styles.olSouO}>
                      Olá! Sou o bot de atedimento da Unimarka. Favor digitar
                      seu nome e CNPJ ou 0 caso não seja cliente.
                    </div>
                  </div>
                  <div className={styles.chat1}>
                    <div className={styles.acheiSeuCadastro}>
                      Achei seu cadastro :) Poderia me explicar em algumas
                      palavras o motivo do contato?
                    </div>
                  </div>
                  <TextField
                    className={styles.chat2}
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
                  <div className={styles.name}>
                    <div className={styles.cliente5532431}>Cliente 5532431</div>
                    <div className={styles.am}>{`11:03 AM `}</div>
                  </div>
                </div>
                <div className={styles.bot1}>
                  <div className={styles.name1}>
                    <div className={styles.marceloAlmeidaPerim}>
                      Marcelo Almeida (PERIM)
                    </div>
                    <div className={styles.am1}>{`11:04 AM `}</div>
                  </div>
                  <div className={styles.chat3}>
                    <div className={styles.bomDiaEstou}>
                      Bom dia, estou com um problema em que meu pedido está
                      atrasado, eu chequei na plataforma e a data prevista era
                      para o dia 23 hoje é dia 25, gostaria de saber o que
                      aconteceu.
                    </div>
                  </div>
                </div>
                <div className={styles.conversation4}>
                  <div className={styles.am2}>{`11:03 AM `}</div>
                  <div className={styles.chat4}>
                    <div className={styles.bomDiaMe}>
                      Bom dia! Me chamo Gabriel e estou aqui para lhe ajudar!!
                    </div>
                  </div>
                </div>
                <div className={styles.conversation5}>
                  <div className={styles.name2}>
                    <div className={styles.marceloAlmeidaPerim1}>
                      Marcelo Almeida (PERIM)
                    </div>
                    <div className={styles.am3}>{`11:05 AM `}</div>
                  </div>
                  <div className={styles.chat5}>
                    <div className={styles.bomDiaEstou1}>
                      Bom dia, estou com um problema em que meu pedido está
                      atrasado, eu chequei na plataforma e a data prevista era
                      para o dia 23 hoje é dia 25, gostaria de saber o que
                      aconteceu.
                    </div>
                  </div>
                </div>
                <div className={styles.conversation6}>
                  <div className={styles.am4}>{`11:03 AM `}</div>
                  <div className={styles.chat6}>
                    <div className={styles.claroVouEntrar}>
                      Claro! Vou entrar em contato com o time de logística para
                      eles averiguarem o ocorrido, poderia esperar 5 minutinhos?
                      Caso não possa esperar nós lhe enviaremos as informações
                      por e-mail.
                    </div>
                  </div>
                  <div className={styles.chat7}>
                    <div className={styles.uhmmOlheiNo}>
                      Uhmm, olhei no sistema aqui e ví que realmente o seu
                      pedido deveria ter chegado, vou lhe passar para um de
                      nossos atendentes para averiguarmos melhor.
                    </div>
                  </div>
                </div>
                <div className={styles.bot2}>
                  <div className={styles.name3}>
                    <div className={styles.marceloAlmeidaPerim2}>
                      Marcelo Almeida (PERIM)
                    </div>
                    <div className={styles.am5}>{`11:05 AM `}</div>
                  </div>
                  <div className={styles.chat8}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.frameItem} />
                      <div className={styles.frameInner} />
                    </div>
                  </div>
                </div>
                <div className={styles.conversation7}>
                  <div className={styles.am6}>{`11:03 AM `}</div>
                  <TextField
                    className={styles.chat9}
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
              <div className={styles.input}>
                <div className={styles.searchBar}>
                  <img
                    className={styles.smile1Icon}
                    loading="lazy"
                    alt=""
                    src="/smile-1.svg"
                  />
                  <div className={styles.escrevaSuaMensagem}>
                    Escreva sua mensagem...
                  </div>
                  <img
                    className={styles.imageIcon}
                    loading="lazy"
                    alt=""
                    src="/image.svg"
                  />
                  <img
                    className={styles.attachIcon}
                    loading="lazy"
                    alt=""
                    src="/attach.svg"
                  />
                  <img
                    className={styles.locationIcon}
                    loading="lazy"
                    alt=""
                    src="/location.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.status}>
            <div className={styles.icons}>
              <img
                className={styles.pauseCircleIcon}
                loading="lazy"
                alt=""
                src="/pausecircle.svg"
              />
            </div>
            <div className={styles.fimAtedimentoVia}>
              Fim atedimento via bot
            </div>
          </div>
          <div className={styles.status1}>
            <div className={styles.pauseCircleWrapper}>
              <img
                className={styles.pauseCircleIcon1}
                loading="lazy"
                alt=""
                src="/pausecircle-1.svg"
              />
            </div>
            <div className={styles.incioAtendimentoHumano}>
              Início atendimento humano
            </div>
          </div>
        </section>
      </main>
      <img
        className={styles.headphonesIcon1}
        loading="lazy"
        alt=""
        src="/headphones-1.svg"
      />
      <div className={styles.justNowWrapper}>
        <div className={styles.justNow}>Just now</div>
      </div>
      <div className={styles.copyWrapper}>
        <div className={styles.copy}>Copy</div>
      </div>
      <div className={styles.hearteyesParent}>
        <img className={styles.hearteyesIcon} alt="" src="/hearteyes@2x.png" />
        <img className={styles.unamusedIcon} alt="" src="/unamused@2x.png" />
      </div>
      <div className={styles.justNowContainer}>
        <div className={styles.justNow1}>Just now</div>
      </div>
      <div className={styles.copyContainer}>
        <div className={styles.copy1}>Copy</div>
      </div>
      <div className={styles.rightSideBar}>
        <div className={styles.title1}>
          <div className={styles.filaDeAtendimentoWrapper}>
            <h3 className={styles.filaDeAtendimento}>Fila de atendimento</h3>
          </div>
          <img className={styles.videoIcon1} alt="" src="/video-2.svg" />
        </div>
        <div className={styles.queue}>
          <QueueItems />
        </div>
      </div>
      <div className={styles.hearteyesGroup}>
        <img
          className={styles.hearteyesIcon1}
          alt=""
          src="/hearteyes-1@2x.png"
        />
        <img className={styles.unamusedIcon1} alt="" src="/unamused-1@2x.png" />
      </div>
    </div>
  );
}

export default Dashboard;
import { FunctionComponent, useState } from "react";
import "../styles/configuration.css";
import FormColaborador from "../components/Configuration/FormColaborador";
import TableColaborador from "../components/Configuration/TableColaborador";
import AtendimentoComponent from "../components/Configuration/Atendimento";
import PaymentAddress from "../components/Configuration/PaymentAddress";

const Configuration: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<'geral' | 'endereco'>('geral');

  return (
    <div className="containerConfig">
      <div className="headerConfig">
        <h1 className="titleConfig">Configurações</h1>
        <div className="buttonGroup">
          <button
            className={`tabButton ${activeTab === 'geral' ? 'active' : ''}`}
            onClick={() => setActiveTab('geral')}
          >
            Geral
          </button>
          <button
            className={`tabButton ${activeTab === 'endereco' ? 'active' : ''}`}
            onClick={() => setActiveTab('endereco')}
          >
            Endereço e Pagamento
          </button>
        </div>
      </div>
      {activeTab === 'geral' ? (
        <div className="bodyConfig">
          <FormColaborador />
          <TableColaborador />
        </div>
      ) : (
        <div className="body2Config">
          <PaymentAddress />
        </div>
      )}
      <div className="footerConfig">
        {activeTab === 'geral' && <AtendimentoComponent />}
      </div>
    </div>
  );
};

export default Configuration;

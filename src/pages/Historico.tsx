import React from "react";

import TicketTable from "../components/History/TicketTable";
import ActivityCard from "../components/History/ActivityCard";
import "../styles/historico.css";

const Historico: React.FC = () => {

  return (
    <div className="dashboardHistory">
      <section className="contentHistory">
        <div className="containerHistory">
          <TicketTable />
        </div>
        <div className="activityContainer">
          <ActivityCard />
        </div>
      </section>
    </div>
  );
}

export default Historico;

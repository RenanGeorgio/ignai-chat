import { FunctionComponent } from "react";

import TicketsDashboard from "../components/Dashboard/TicketsDashboard";
import PercentageView from "../components/Dashboard/PercentageView";
import PrevisionGraph from "../components/Dashboard/PrevisionGraph";
import PieChartView from "../components/Dashboard/PieChartView";
import TableDashboard from "../components/Dashboard/TableDashboard";
import TicketSourceChart from "../components/Dashboard/TicketSourceChart";

import "../styles/dashboard.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="containerDashboard">
      <div className="headerDashboard">
        <h1 className="titleDashboard">Dashboard</h1>
        <TicketsDashboard />
      </div>
      <div className="bodyDashboard">
        <div>
          <PrevisionGraph />
        </div>
        <div className="bodyPercentage">
          <PercentageView />
        </div>
        <div className="bodyChart">
          <PieChartView />
        </div>
      </div>
      <div className="footerDashboard">
        <div className="footerTable">
          <TableDashboard />
        </div>
        <div className="footerTicket">
          <TicketSourceChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import { FunctionComponent } from "react";
import TicketsDashboard from "../components/Dashboard/TicketsDashboard";
import PercentageView from "../components/Dashboard/PercentageView";
import PrevisionGraph from "../components/Dashboard/PrevisionGraph";
import PieChartView from "../components/Dashboard/PieChartView";
import TableDashboard from "../components/Dashboard/TableDashboard";
import "../styles/dashboard.css";
import TicketSourceChart from "../components/Dashboard/TicketSourceChart";

const Dashboard: FunctionComponent = () => {

  return (
    <div className="containerDashboard">
      <div className="headerDashboard">
        <h1 className="titleDashboard">Dashboard</h1>
        <TicketsDashboard />
      </div>
      <div className="bodyDashboard">
        <PrevisionGraph />
        <PercentageView />
        <PieChartView />
      </div>
      <div className="footerDashboard">
        <TableDashboard />
        <TicketSourceChart />
      </div>
    </div>
  );
}

export default Dashboard;
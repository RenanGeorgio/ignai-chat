import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Divider, Icon } from "@mui/material";

import MDBox from "../../MDBox";
import MDTypography from "../../Typography";

import configs from "./configs";

type Obj = {
  [key: string]: any
}

interface Props {
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark'
  title: string
  description: string | unknown
  date: string
  chart: Obj
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ReportsBarChart({ color='info', title, description="", date, chart }: Props) {
  // @ts-ignore
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              <Bar data={data} options={options} redraw />
            </MDBox>
          ),
          [color, chart]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {date}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ReportsBarChart;
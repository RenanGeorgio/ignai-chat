import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const dataset = [
  { month: 'Jan', value: 50 },
  { month: 'Feb', value: 30 },
  { month: 'Mar', value: 70 },
  { month: 'Apr', value: 40 },
  { month: 'May', value: 90 },
  { month: 'Jun', value: 60 },
];

const chartSetting = {
  xAxis: [
    {
      label: 'Valor (tickets)',
    },
  ],
  width: 400,
  height: 300,
};

const legends = [
  { color: 'red', label: 'Ligação', value: 25 },
  { color: 'blue', label: 'WhatsApp', value: 15 },
  { color: 'green', label: 'Site', value: 20 },
  { color: 'orange', label: 'Facebook', value: 10 },
  { color: 'purple', label: 'Telegram', value: 18 },
  { color: 'gray', label: 'Instagram', value: 12 },
];

const TicketSourceChart = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        boxShadow: 3,
        padding: 2,
        borderRadius: 2,
        maxWidth: '600px',
        height: '380px',
        margin: '0 auto',
        cursor: 'pointer'
      }}
    >
      <Typography variant="h6" component="h2" mb={2}>
        Fonte de abertura de tickets
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[{ dataKey: 'value', label: 'Tickets', color: 'skyblue' }]}
            layout="horizontal"
            grid={{ vertical: true }}
            {...chartSetting}
          />
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            {legends.map((legend, index) => (
              <Grid item xs={6} key={index} display="flex" alignItems="center">
                <Box
                  sx={{
                    backgroundColor: legend.color,
                    borderRadius: '50%',
                    width: 12,
                    height: 12,
                    marginRight: 1,
                  }}
                />
                <Box>
                  <Typography variant="body2" fontWeight="bold">
                    {legend.label}
                  </Typography>
                  <Typography variant="body2" fontSize="1.1rem">
                    {legend.value}%
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TicketSourceChart;

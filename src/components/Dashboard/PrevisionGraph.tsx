import React from "react";
import { LineChart, lineElementClasses, markElementClasses } from "@mui/x-charts/LineChart";
import { Box, Typography } from "@mui/material";

const DemandForecast: React.FC = () => {
  const timeLabels = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00'];
  const realDemandData = [120, 150, 180, 200, 210, 230];
  const todayData = [105, 125, 155, 185, 200, 215];
  const forecastData = [110, 130, 160, 190, 205, 220];

  return (
    <Box 
      sx={{ 
        width: '100%', 
        maxWidth: 600, 
        height: 300, 
        margin: '0 auto', 
        padding: '20px', 
        backgroundColor: '#fff', 
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)', 
        borderRadius: '10px',
        cursor: 'pointer'
      }}
    >
      <Typography variant="h5" color="black" mb={0}>
        Previsão de demanda
      </Typography>
      <Typography variant="subtitle1" color="gray">
        Total número de atendimentos hoje: 582
      </Typography>
      <LineChart
        width={550}
        height={240}
        series={[
          { data: realDemandData, label: 'Demanda real', color: '#1976d2', id: 'realDemand' },
          { data: todayData, label: 'Hoje', color: '#43a047', id: 'today' },
          { data: forecastData, label: 'Previsão', color: '#ffa000', id: 'forecast' },
        ]}
        xAxis={[{ scaleType: 'point', data: timeLabels }]}
        sx={{
          [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
            strokeWidth: 2,
          },
          '.MuiLineElement-series-realDemand': {
            strokeDasharray: '5 5',
          },
          '.MuiLineElement-series-today': {
            strokeDasharray: '3 4 5 2',
          },
          '.MuiLineElement-series-forecast': {
            strokeDasharray: '2 6',
          },
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
            fill: '#fff',
          },
          [`& .${markElementClasses.highlighted}`]: {
            stroke: 'none',
          },
        }}
      />
    </Box>
  );
}

export default DemandForecast;

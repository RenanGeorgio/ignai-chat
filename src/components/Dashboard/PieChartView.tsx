import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const PieChartView: React.FC = () => {
  const data = [
    { value: 40, label: 'Cliente 1', color: '#8884d8' },
    { value: 30, label: 'Cliente 2', color: '#82ca9d' },
    { value: 20, label: 'Cliente 3', color: '#ffc658' },
    { value: 10, label: 'Cliente 4', color: '#ff8042' }
  ];

  return (
    <div style={{ margin: '20px', height: '325px', width: '300px', backgroundColor: '#fff',   boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', cursor: 'pointer' }}>
      <h3 style={{ margin: 'auto', position:'relative', top:'10px', marginBottom: '-5px', textAlign: 'left', marginLeft: '10px' }}>Tempo médio</h3>
      <p style={{ fontSize: '14px', color: 'gray', marginBottom: '-25px', textAlign: 'left', marginLeft: '10px' }}>
        Média mensal: 56s
      </p>
      <PieChart
        series={[
          {
            data: data.map((d) => ({
              id: d.label,
              value: d.value,
              color: d.color,
            })),
            innerRadius: 20,
            outerRadius: 80,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 225,
            cx: 140,
            cy: 150,
          }
        ]}
      />
    </div>
  );
}

export default PieChartView;

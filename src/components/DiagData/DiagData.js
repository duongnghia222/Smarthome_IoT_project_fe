import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
export default function DiagData({data1, labels}) {
    const data = {
        labels: labels,
        datasets: [{
          label: 'Độ ẩm',
          data: data1.data,
          fill: false,
          borderColor: data1.color,
          tension: 0.1
        }]
      };
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: `Biều đồ ${data1.name}`,
            font: {
              size: 20,
              
            }
          },
     
        },
      };
  return (
    <Line data={data} options={options}/>
  )
}

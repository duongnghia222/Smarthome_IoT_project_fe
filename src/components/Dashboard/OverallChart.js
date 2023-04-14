import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Biểu đồ tổng quát",
      font: {
        size: 15
      }
    },
    legend: {
        position: 'bottom',
        align: 'start'
    }
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: true,
  },
  scales: {
    x: {
      // type: 'linear',
      // max: 100,
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = {
  labels,
  datasets: [
    {
      label: 'Nhiệt độ',
      data: labels.map(() => Math.floor(Math.random()*100)),
      backgroundColor: '#0F88F9',
      stack: 'Stack 0',
    },
    {
      label: 'Độ ẩm',
      data: labels.map(() => Math.floor(Math.random()*100)),
      backgroundColor: '#10D5F8',
      stack: 'Stack 0'
    },
    {
      label: 'Ánh sáng',
      data: labels.map(() => Math.floor(Math.random()*100)),
      backgroundColor: '#FCA33D',
      stack: 'Stack 0',
    },
  ],
};
export default function OverallChart() {
  return (
    <Bar options={options} data={data}/>
  )
}

import React, { useState, useEffect } from 'react'
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
export default function DiagData({data1, labels, my_theme}) {
    const wht = 'rgba(255, 255, 255, 0.5)';
    const blk = 'rgba(0, 0, 0, 0.5)';

    const [my_color, set_color] = useState(my_theme === "dark" ? wht : blk)
    useEffect(() => {
      set_color(my_theme === 'dark' ? wht : blk);
    }, [my_theme]);
    const data = {
        labels: labels,
        datasets: [{
          label: data1.name,
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
            text: `Biểu đồ ${data1.name}`,
            font: {
              size: 20,
            }
          },
     
        },
        scales: {
          x: {
            grid: {
              color: my_color // set color of x-axis grid
            },
            ticks: {
              color: my_color.replace(/0\.5\)$/, '1)') // set color of x-axis text
            }
          },
          y: {
            grid: {
              color: my_color // set color of y-axis grid
            },
            ticks: {
              color: my_color.replace(/0\.5\)$/, '1)') // set color of y-axis text
            }
          }
        }
      };
  return (
    <Line data={data} options={options}/>
  )
}

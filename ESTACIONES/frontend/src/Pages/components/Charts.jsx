import { Line } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

//quiero otra data para mostrar en otro grafico


const Charts = () => {
  return (
    <>
      <div className="container mx-auto my-10">
        <div>
          <p>grafico de lineas basico</p>
          <div className="border-2 border-blue-600 h-96">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <div>
          <p>grafico de lineas basico</p>
          <div className="border-2  border-blue-600 h-96"></div>
        </div>
      </div>
      ;
    </>
  );
};

export default Charts;

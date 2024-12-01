import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar elementos necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function PredictiveChart() {
  const [chartData, setChartData] = useState(null);

  // Simulación de datos desde una API (puedes adaptarlo a tu backend real)
  useEffect(() => {
    const fetchChartData = async () => {
      // Simula los datos retornados por una API
      const simulatedData = {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
        current: [100, 120, 130, 140, 150], // Datos históricos
        predicted: [150, 160, 175], // Datos proyectados
      };

      setChartData({
        labels: simulatedData.labels,
        datasets: [
          {
            label: "Datos Actuales",
            data: simulatedData.current,
            borderColor: "rgba(14, 165, 233, 0.8)", // Línea sólida
            borderWidth: 2,
            tension: 0.4,
            fill: false,
          },
          {
            label: "Datos Proyectados",
            data: simulatedData.predicted,
            borderColor: "rgba(236, 72, 153, 0.8)", // Línea punteada
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.4,
            fill: false,
          },
        ],
      });
    };

    fetchChartData();
  }, []);

  // Opciones de configuración del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Datos Históricos y Predicción",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Año",
        },
      },
      y: {
        title: {
          display: true,
          text: "Valores",
        },
      },
    },
  };

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (!chartData) return <p>Cargando datos del gráfico...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
        Gráfico de Predicción
      </h2>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default PredictiveChart;

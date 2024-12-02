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
        labels: [
          "2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07", "2024-08", "2024-09", "2024-10",
          "2024-11", "2024-12"
        ], // Meses de 2024 (datos históricos)
        current: [
          720, 725, 730, 735, 740, 745, 750, 755, 760, 765, 
          770, 775 // Datos históricos (2024)
        ],
        predicted: [
          780, 782, 785, 787, 790, 792, 794, 796, 798, 800, 
          802, 804, 806, 808, 810, 812, 814, 816, 818, 820, 822, 824, 826, 828, 830, 832, 834, 836, 838, 840, 842, 844, 846 // Datos proyectados (hasta junio 2025)
        ]
      };

      // Nuevas etiquetas que abarcan desde enero 2024 hasta junio 2025
      const extendedLabels = [
        ...simulatedData.labels, 
        "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06"
      ];

      // Nuevos datos de predicción hasta junio 2025
      const newPredictedData = [
        ...simulatedData.current, 
        ...simulatedData.predicted.slice(0, 6) // Tomamos solo hasta junio de 2025
      ];

      setChartData({
        labels: extendedLabels,
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
            data: newPredictedData,
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

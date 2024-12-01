import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { useNotification } from './NotificationProvider.jsx';

export default function CardAlert() {
  const showNotification = useNotification();
  const handleClick = () => {
    showNotification('Datos actualizados correctamente', 'success');
  };

  // Array de consejos
  const consejos = [
    "Automatiza tareas repetitivas para reducir errores.",
    "Prioriza actividades clave en horarios de mayor productividad.",
    "Capacita al equipo en herramientas tecnológicas.",
    "Implementa métricas claras para evaluar el desempeño.",
    "Optimiza la comunicación interna para ahorrar tiempo."
  ];

  // Estado para manejar el índice del consejo actual
  const [indiceActual, setIndiceActual] = React.useState(0);

  React.useEffect(() => {
    // Configura un temporizador para actualizar el índice cada 5 segundos
    const intervalo = setInterval(() => {
      setIndiceActual((indiceActual) => (indiceActual + 1) % consejos.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [consejos.length]);

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <Card className="w-full bg-gray-50 shadow-lg rounded-lg">
        <CardContent className="flex flex-col items-start">
          <AutoAwesomeRoundedIcon fontSize="small" className="text-blue-500" />
          <Typography className="pt-2 text-lg font-semibold">
            Recomendaciones
          </Typography>
          <Typography className="pt-3 text-sm text-gray-600">
            {consejos[indiceActual]} {/* Renderiza el consejo actual */}
          </Typography>
        </CardContent>
      </Card>
      <div className="w-full p-4">
        <Button
          onClick={handleClick}
          variant="contained"
          size="small"
          fullWidth
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Actualizar Datos
        </Button>
      </div>
    </div>
  );
}

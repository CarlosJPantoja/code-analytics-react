import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { useNotification } from './NotificationProvider.jsx';
import { Stack } from '@mui/material';

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
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <TipsAndUpdatesIcon fontSize="small" />
            <Typography className="pt-2 text-xl font-semibold">
              Tips inteligentes
            </Typography>
          </Stack>
          <Typography className="pt-3 text-sm text-gray-600">
            {consejos[indiceActual]} {/* Renderiza el consejo actual */}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

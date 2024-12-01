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
    // Configura un temporizador para actualizar el índice cada 10 segundos
    const intervalo = setInterval(() => {
      setIndiceActual((indiceActual) => (indiceActual + 1) % consejos.length);
    }, 5000); // 10 segundos

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, [consejos.length]);

  return (
    <>
    <Card variant="outlined" className='h-[205px]' sx={{ m: 2, p: 2}}>
      <CardContent>
        <AutoAwesomeRoundedIcon fontSize="small" />
        <Typography className='pt-2' gutterBottom sx={{ fontWeight: 600 }}>
          Recomendaciones
        </Typography>
       <div  className='pt-3'>
       <Typography  variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          {consejos[indiceActual]} {/* Renderiza el consejo actual */}
        </Typography>
        
       </div>
       
      </CardContent>
      
    </Card>
    <div className='p-4'>
    <Button  onClick={handleClick} variant="contained"  size="small" fullWidth>
      Actualizar Datos
    </Button>
    </div>
    </>
    
    
  );
}


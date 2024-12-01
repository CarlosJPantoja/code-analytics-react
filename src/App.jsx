import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de la biblioteca
import GraficosPage from './Pages/GraficosPage.jsx';
import ConfiguracionPage from './Pages/ConfiguracionPage.jsx';
import Dashboard from './Dashboard.jsx';
import './index.css';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/graficos" element={<GraficosPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
      </Routes>
    </Router>
  );
}

export default App;

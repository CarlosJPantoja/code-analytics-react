import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de la biblioteca
import GraficosPage from './Pages/GraficosPage.jsx';
import ConfiguracionPage from './Pages/ConfiguracionPage.jsx';
import Dashboard from './Dashboard.jsx';
import AppTheme from '../shared-theme/AppTheme';
import './index.css';

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './theme/customizations';


const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};
function App(props) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/graficos" element={<GraficosPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
      </Routes>
    </Router>
    </AppTheme>

  );
}

export default App;

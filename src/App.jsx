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
import SignIn from './SingIn.jsx';


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
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/:option" element={<Dashboard />} />
      </Routes>
    </Router>
    </AppTheme>

  );
}

export default App;

import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './components/navbar/navbar';
import InicioEmpleados from './components/empleados/inicio';

function App() {
  return (
    <div className="App">
      <BarraNav/>
      <InicioEmpleados/>
    </div>
  );
}

export default App;

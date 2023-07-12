import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import C02contador from './components/C02contador';
import C03doblecontador from './components/C03doblecontador';

function App() {
  return (
    <div >
      <h3>Primer componente</h3>
      <C01componente />
      <h3>Segundo componente</h3>
      <C02contador />
      <h3>Tercer componente</h3>
      <C03doblecontador />
    </div>
  );
}

export default App;

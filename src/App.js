import './App.css';
import Checklist from './components/Checklist'

function App() {
  return (
    <div className="App">
      <h1>Checklists de Veículos - Golden Service</h1>
      <div className='wrapper'>
        <div className='tres-quartos'>
          <h2>3/4</h2>
          <Checklist placa="AOG8D93" />
          <Checklist placa="FRI4452" />
          <Checklist placa="GGA2G98" />
          <Checklist placa="IDY9179" />
          <Checklist placa="IQK0923" />
          <Checklist placa="IRP2263" />
          <Checklist placa="ITR7E12" />
          <Checklist placa="IUQ3A31" />
          <Checklist placa="IUV7F42" />
          <Checklist placa="IYV9163" />
          <Checklist placa="LSA8I32" />
          <Checklist placa="MHS1674" />
          <Checklist placa="RDY1C71" />
        </div>
        <div className='cavalos'>
          <h2>Cavalos</h2>
          <Checklist placa="MIC5D48" />
          <Checklist placa="MMF1F11" />
          <Checklist placa="MMK7F34" />
        </div>
      </div>
    </div>
  );
}

export default App;

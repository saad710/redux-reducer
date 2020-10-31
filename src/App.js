import logo from './logo.svg';
import './App.css';
import Reducer from './Reducer';
import PatientManagement from './PatientManagement';

function App() {
  return (
    <div className="App">
      <Reducer></Reducer>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;

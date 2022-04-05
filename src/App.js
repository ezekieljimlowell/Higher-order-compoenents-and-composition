import logo from './logo.svg';
import './App.css';
import { Parent } from './Components/Parent';
import { Edit } from './Composition/Edit';
import { Accordian } from './Composition/Accordian';

function App() {
  return (
    <div className="App">
      <Parent />
      <Edit />
      <Accordian />
    </div>
  );
}

export default App;

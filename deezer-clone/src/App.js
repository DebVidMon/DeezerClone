import logo from './logo.svg';
import './App.css';
import InputBase from '@material-ui/core/InputBase'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type= "search" className = ".MuiInputBase-inputTypeSearch"></input>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MostPlayed from './components/MostPlayed/MostPlayed';
import Favorites from './components/Favorites/Favorites';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type= "search" className = "MuiInputBase-inputTypeSearch" placeholder = "Pesquisa"></input>
      </header>
      <Router basename={process.env.PUBLIC_URL}>

          <Switch>


            <Route exact path='/' component={MostPlayed} />
            <Route exact path='/musicas-favoritas' component={Favorites} />
            <Route path='*'>
              <h1>Página não encontrada /: </h1>
            </Route>


          </Switch>
      </Router>
    </div>
  );
}

export default App;

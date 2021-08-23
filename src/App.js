import logo from "./logo.svg";
import "./App.css";
import {
  Toolbar,
  Typography,
  Button,
  AppBar,
  IconButton,
} from "@material-ui/core";
import { SetStateAction } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MostPlayed from "./components/MostPlayed/MostPlayed";
import Search from "./components/Search/Search";
import { BrowserRouter, BrowserRouter as Route } from "react-router-dom";

import Favorites from "./components/Favorites/Favorites";

export default function App() {
  // function handleChange(event) {
  //   SetStateAction({ value: event.target.value });
  //   let searched = event.target.value
  // }

  // function handleSubmit(event) {

  //         <Route path="/search/:string">
  //           <Search />
  //         </Route>
  // }

  // function gofavorites() {
  //   return (
  //     <ReactDOM>
  //       <Route path="/favorites">
  //         <Favorites />
  //       </Route>
  //     </ReactDOM>
  //   );
  // }

  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className="tipo" noWrap color="textSecondary">
              MAIS POPULARES
            </Typography>
            <Typography>
              <Button className="tipo" color="inherit">
                Suas Favoritas
              </Button>
            </Typography>
            <div className="search">
              <InputBase
                placeholder="Pesquisar…"
                className="inputTypeSearch"
                aria-label="search"
              />
              <IconButton type="submit" className="searchIcon" color="inherit">
                <SearchIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {/* <Toolbar>
          <Button>Mais ouvidas</Button> 
          <Button color="inherit" >
          {/* onClick={gofavorites}  
            Favoritas
          </Button>
        </Toolbar> 
        <InputBase
          type="search"
          className="MuiInputBase-inputTypeSearch"
          placeholder="Pesquisar"
          // onChange={handleChange}
        /> 
        <IconButton
          type="submit"
          className="busca"
          value="busca"
          aria-label="search"
          // onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>
        {/* <ReactDOM>
          <MostPlayed />
        </ReactDOM> */}
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <BrowserRouter>
        <MostPlayed />
      </BrowserRouter>
    </div>
  );
}

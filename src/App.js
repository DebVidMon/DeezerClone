import logo from "./logo.svg";
import "./App.css";
import api from "./server/api";
import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StarIcon from "@material-ui/icons/Star";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import MostPlayed from "./components/MostPlayed/MostPlayed";
//import Favorites from "./components/Favorites/Favorites";

export default function App() {
  const [music, setMusic] = useState();

  useEffect(() => {
    api
      .get("/radio/37151/tracks")
      .then((response) => setMusic(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputBase
          type="search"
          className="MuiInputBase-inputTypeSearch"
          placeholder="Pesquisar"
          />
        <IconButton type="submit" className="busca" aria-label="search">
        <SearchIcon />
      </IconButton>
      </header>
      
    </div>
  );
}

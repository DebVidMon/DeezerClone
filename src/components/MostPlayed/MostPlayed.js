
import api from "./../../server/api";
import React, { useEffect, useState, SetStateAction } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StarIcon from "@material-ui/icons/Star";

export default function MostPlayed() {
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
      <div className="pop">
        <h1>Mais Populares</h1>
      <div className="container">
      {/* {this.state.music.map(item => ( */}
      <Card className="root">
        <div className="details">
          <CardContent className="content">
          <img classeName="cover" alt="capa">
          {music?.album.cover}
            </img>
            <p>Título: {music?.title}</p>
            <p>Artista: {music?.artist.name}</p>
            <p><small>Duração: {music?.duration}</small></p>
          </CardContent>
          <div className="controls">
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className="playIcon" />
            </IconButton>
            <IconButton aria-label="next">
              <StarIcon className="favIcon" />
            </IconButton>
          </div>
        </div>
      </Card>
      {/* ))} */}
      </div>
      </div>
    );
  }
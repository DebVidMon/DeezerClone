import React, { Fragment, useEffect, useState } from "react";
import api from "./../../server/api";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StarIcon from '@material-ui/icons/Star';



export default function MediaControlCard() {
  const [music, setMusic] = useState();

  const search = InputEvent

  useEffect(() => {
    api
      //.get(`/search?q=${search}`)
      .get("/radio/37151/tracks")
      .then((response) => setMusic(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="search">
    <h1>Busca por {search}</h1>
    <Fragment>
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
      </Fragment>
    </div>
  );
}
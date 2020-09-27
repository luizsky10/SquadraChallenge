import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import {
  Container,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const Characters = () => {
  const [data, setData] = useState();
  const [searchData, setsearchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/character/"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  const searchSpace = (event) => {
    let keyword = event.target.value;
    setsearchData(keyword);
  };

  const classes = useStyles();

  // Excluir dados inconsistentes ou repetidos.
  const diffName = (obj) => {
    if (
      obj.name !== "Gabriel" &&
      obj.name !== "goku" &&
      obj.name !== "Picollo" &&
      obj.name !== "krilin" &&
      obj.name !== "<h1>gaaaaaaaa</h1>" &&
      obj.name !== "Piculo_olo"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const filteredData = data?.filter(diffName);

  const imagePath = "https://dragon-ball-api.herokuapp.com/api/";

  const items = filteredData
    // eslint-disable-next-line
    ?.filter((data) => {
      if (searchData === null) return data;
      else if (data.name.toLowerCase().includes(searchData.toLowerCase())) {
        return data;
      }
    })
    .map((character) => {
      return (
        <div>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia title="Character Card">
                <img
                  src={
                    character.image.length > 30
                      ? character.image
                      : imagePath + character.image
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = require("../assets/imageNotFound.png");
                  }}
                  alt=""
                  style={{
                    transition: "opacity ease-in-out 0.3s",
                    height: "150px",
                    minWidth: "150px",
                    bottom: "30px",
                  }}
                />
              </CardMedia>

              <CardContent>
                <span className={classes.characterName}>{character.name}</span>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      );
    });

  return (
    <div className={classes.root}>
      <Dashboard />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <input
          type="text"
          placeholder="Personagem..."
          className={classes.elementStyle}
          onChange={(e) => searchSpace(e)}
        />
        <div className={classes.itemGrid}>{items}</div>
        <Container maxWidth="lg" className={classes.container}></Container>
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  span: {},
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: "auto",
  },
  cardRoot: {
    maxWidth: 200,
  },
  media: {
    height: 150,
  },
  itemGrid: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr) )",
    gridRowGap: "16px",
    gridColumnGap: "16px",
  },
  elementStyle: {
    border: "solid",
    borderRadius: "5px",
    position: "relative",
    height: "40px",
    width: "200px",
    marginTop: "5vh",
    marginBottom: "10vh",
  },
  characterName: {
    fontWeight: "600px",
    textAlign: "center",
    fontSize: "25px",
  },
}));

export default Characters;

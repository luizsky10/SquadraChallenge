import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import axios from "axios";

import {
  Container,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

const Characters = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Dashboard />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.itemGrid}>Nada ainda</div>
        </Container>
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
}));

export default Characters;

/*
    const [data, setData] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(
          "https://dragon-ball-api.herokuapp.com/api/character/"
        );
  
        setData(result.data);
      };
  
      fetchData();
    }, []);
  
    const classes = useStyles();
  
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
  
    console.log("Filtered data", filteredData);
  
    const imagePath = "https://dragon-ball-api.herokuapp.com/api/";
  
  */

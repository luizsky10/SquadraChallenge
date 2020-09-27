import React from "react";
import Dashboard from "../components/Dashboard";

import { Container, makeStyles } from "@material-ui/core";

const Characters = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Dashboard />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.Title}>Squadra front-end challenge</div>

          <div className={classes.Secondary}>
            WebApp desenvolvido utilizando a api
            https://dragon-ball-api.herokuapp.com/documentation.
          </div>

          <div className={classes.Title}>Como utilizar</div>
          <div className={classes.Secondary}>
            Para navegar entre o conteúdo do projeto é possível utilizar a barra
            lateral, clicando nos icones.
          </div>

          <div className={classes.Title}>Stack</div>
          <div className={classes.Secondary}>
            As tecnologias utilizadas foram: React, React-Router-Dom, GH-Pages
            Material-UI e Axios.
          </div>
        </Container>
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: "auto",
  },
  Title: {
    fontFamily: "Oswald, sans-serif",
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "600",
  },
  Secondary: {
    margin: "20px",
    fontSize: "20px",
    fontWeight: "500",
    textAlign: "center",
  },
}));

export default Characters;

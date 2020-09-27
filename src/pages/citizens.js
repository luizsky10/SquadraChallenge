import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import { Container, makeStyles } from "@material-ui/core";

import { useParams } from "react-router-dom";

const Citizens = () => {
  const classes = useStyles();

  const planet = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/planet/" +
          planet.namePlanet
      );

      setData(result.data);
    };

    fetchData();
  });

  return (
    <div className={classes.root}>
      <Dashboard />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <h1 className={classes.Citizens}>Habitantes do planeta</h1>
          <div className={classes.itemGrid}>
            {" "}
            {data?.residents?.map((character) => (
              <h2 className={classes.citizensName}> {character}</h2>
            ))}
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
    flexGrow: 2,
    overflow: "auto",
  },

  itemGrid: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr) )",
    gridRowGap: "10px",
    gridColumnGap: "10px",
  },
  citizensName: {
    fontWeight: "500",
  },
}));

export default Citizens;

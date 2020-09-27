import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import { Container, makeStyles } from "@material-ui/core";

const Planets = () => {
  const classes = useStyles();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/planet/"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  const imagePath = "https://dragon-ball-api.herokuapp.com/api/";

  return (
    <div className={classes.root}>
      <Dashboard />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.itemGrid}>
            {data?.map((world) => (
              <Link
                to={"/planetas/" + world.name}
                style={{ color: "black", textDecoration: "none" }}
              >
                <div className={classes.cardRoot}>
                  <div>
                    <img
                      src={imagePath + world.image}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = require("../assets/imageNotFound.png");
                      }}
                      alt=""
                      style={{
                        transition: "opacity ease-in-out 0.3s",
                        height: "250px",
                        minWidth: "150px",
                        bottom: "30px",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        objectFit: "contain",
                      }}
                    />
                    <h2>{world.name}</h2>

                    {world.residents?.map((citizen) => (
                      <span></span>
                    ))}
                  </div>
                </div>
              </Link>
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
export default Planets;

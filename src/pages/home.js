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

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://dragon-ball-api.herokuapp.com/api/character/Gohan"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  const classes = useStyles();

  const imagePath = "https://dragon-ball-api.herokuapp.com/api/" + data.image;
  return (
    <div className={classes.root}>
      <Dashboard />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.itemGrid}>
            <Card className={classes.cardRoot}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={imagePath}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.status}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
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
    height: "100vh",
    overflow: "auto",
  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
  itemGrid: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr) )",
    gridRowGap: "16px",
    gridColumnGap: "16px",
  },
}));

export default Home;

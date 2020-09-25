import React from "react";
import { Typography, Link } from "@material-ui/core";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ color: "white" }}
    >
      {"All Copyrights Reserved © "}
      <Link
        color="inherit"
        href="https://pt.wikipedia.org/wiki/Akira_Toriyama"
        style={{ color: "white" }}
      >
        Akira Toriyama
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "20px",
        background: "#072083", //theme.colors.primary,
      }}
    >
      <Copyright />
    </div>
  );
}

export default Footer;

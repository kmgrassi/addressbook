import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    left: 0,
    bottom: 0,
    width: "100%",

    textAlign: "center"
  }
}));

export function Footer(props) {
  const classes = useStyles();
  return (
    <div id="footer" className={classes.root}>
      <Typography variant="overline" align="center">
        Made with ❤️ for Nuvalance
      </Typography>
    </div>
  );
}

export default Footer;

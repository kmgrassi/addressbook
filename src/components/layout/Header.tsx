import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.grey[300]
    }
  })
);

export function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" align="center">
        Address book
      </Typography>
    </div>
  );
}

export default Header;

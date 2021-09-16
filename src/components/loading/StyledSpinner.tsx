import { Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const logo =
  "https://images.squarespace-cdn.com/content/v1/5f7366fe36612b5948a5c716/1601401749452-SB2QJS8L876RM2QRIIEN/Deck-Logo.png?format=1500w";

const nvYellow = "#ec6101";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 100,
      height: 200,
      width: 200
    },
    spinner: {
      backgroundImage: `url(${logo})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "140px 110px"
    },
    center: {
      backgroundColor: theme.palette.grey[400]
    }
  })
);

export function StyledSpinner() {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <div className={classes.root}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.spinner}
        >
          <CircularProgress size={200} thickness={5} color="secondary" />
        </Box>
      </div>
    </Box>
  );
}

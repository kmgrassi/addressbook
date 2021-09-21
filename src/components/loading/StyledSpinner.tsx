import { Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const nvlogo =
  "https://images.squarespace-cdn.com/content/v1/5f7366fe36612b5948a5c716/1601399363536-AML4RQD30X58WXDYQ7QZ/Logo_only.png?format=1500w";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "auto",
      paddingTop: 50,
      height: 200,
      width: 200
    },
    spinner: {
      backgroundImage: `url(${nvlogo})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "140px 110px"
    }
  })
);

export function StyledSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="spinner">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.spinner}
      >
        <CircularProgress size={200} thickness={3} color="primary" />
      </Box>
    </div>
  );
}

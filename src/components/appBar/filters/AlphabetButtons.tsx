import { Grid, Hidden, makeStyles } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { useAddressBookData } from "../../../context/AddressBookDataContext";
import { alphabet } from "../../../utils/constants/alphabet";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    padding: 20
  },
  letterButtons: {
    width: 35
  }
}));

function ButtonGroup({ slice }) {
  const classes = useStyles();
  const { alphabeticalFilter, setAlphaFilter } = useAddressBookData();
  return (
    <Grid item xs={12}>
      <ToggleButtonGroup
        value={alphabeticalFilter}
        onChange={(e, values) => setAlphaFilter(values)}
      >
        {slice &&
          slice.map((letter) => {
            return (
              <ToggleButton value={letter} className={classes.letterButtons}>
                {letter}
              </ToggleButton>
            );
          })}
      </ToggleButtonGroup>
    </Grid>
  );
}

export function AlphabetButtons() {
  return (
    <Grid>
      <Hidden only="xs">
        <ButtonGroup slice={alphabet.slice(0, 13)} />
        <ButtonGroup slice={alphabet.slice(13, 26)} />
      </Hidden>
      <Hidden smUp>
        <ButtonGroup slice={alphabet.slice(0, 7)} />
        <ButtonGroup slice={alphabet.slice(7, 14)} />
        <ButtonGroup slice={alphabet.slice(14, 20)} />
        <ButtonGroup slice={alphabet.slice(20, 26)} />
      </Hidden>
    </Grid>
  );
}

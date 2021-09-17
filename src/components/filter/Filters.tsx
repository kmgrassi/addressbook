import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  makeStyles,
  Switch,
  Typography
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { useAddressBookData } from "../../context/AddressBookDataContext";
import { aThroughM, nThroughZ } from "../../utils/constants/alphabet";

const alphabet = aThroughM.concat(nThroughZ);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 20
  },
  letterButtons: {
    width: 35
  }
}));

export function Filters(props) {
  const classes = useStyles();
  const {
    genderFilter,
    setGenderFilter,
    alphabeticalFilter,
    setAlphaFilter,
    allLetters,
    contactList
  } = useAddressBookData();

  return (
    <Grid container className={classes.root}>
      <Typography>Count: {contactList.length}</Typography>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={genderFilter.male}
                onChange={() => {
                  setGenderFilter((prevState) => {
                    return {
                      male: !prevState.male,
                      female: prevState.female
                    };
                  });
                }}
              />
            }
            label="male"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={genderFilter.female}
                onChange={() => {
                  setGenderFilter((prevState) => {
                    return {
                      male: prevState.male,
                      female: !prevState.female
                    };
                  });
                }}
              />
            }
            label="female"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={allLetters}
                onChange={() => {
                  if (allLetters) {
                    setAlphaFilter([]);
                  } else {
                    setAlphaFilter(alphabet);
                  }
                }}
              />
            }
            label="Toggle all letters"
          />
        </FormGroup>
      </Grid>

      <ToggleButtonGroup
        value={alphabeticalFilter}
        onChange={(e, values) => setAlphaFilter(values)}
      >
        {aThroughM.map((letter) => {
          return (
            <ToggleButton value={letter} className={classes.letterButtons}>
              {letter}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      <ToggleButtonGroup
        value={alphabeticalFilter}
        onChange={(e, values) => setAlphaFilter(values)}
      >
        {nThroughZ.map((letter) => {
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

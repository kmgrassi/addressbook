import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  makeStyles,
  Switch,
  Typography
} from "@material-ui/core";
import React from "react";
import { useAddressBookData } from "../../../context/AddressBookDataContext";
import { alphabet } from "../../../utils/constants/alphabet";
import { AlphabetButtons } from "./AlphabetButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 20
  },
  letterButtons: {
    width: 35
  }
}));

export function Filters() {
  const classes = useStyles();
  const {
    genderFilter,
    setGenderFilter,
    setAlphaFilter,
    allLetters,
    contactList
  } = useAddressBookData();

  return (
    <Grid container className={classes.root}>
      <Typography>Count: {contactList ? contactList.length : "0"}</Typography>
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
            label="Select all letters"
          />
        </FormGroup>
        <AlphabetButtons />
      </Grid>
    </Grid>
  );
}

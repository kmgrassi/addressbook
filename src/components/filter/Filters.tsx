import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { useAddressBookData } from "../../context/AddressBookDataContext";
import { aThroughM, nThroughZ } from "../../utils/constants/alphabet";

const alphabet = aThroughM.concat(nThroughZ);

export function Filters(props) {
  const {
    genderFilter,
    setGenderFilter,
    alphabeticalFilter,
    setAlphaFilter,
    allLetters
  } = useAddressBookData();

  return (
    <div>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
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
        <ToggleButtonGroup
          value={alphabeticalFilter}
          onChange={(e, values) => setAlphaFilter(values)}
        >
          {aThroughM.map((letter) => {
            return <ToggleButton value={letter}>{letter}</ToggleButton>;
          })}
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={alphabeticalFilter}
          onChange={(e, values) => setAlphaFilter(values)}
        >
          {nThroughZ.map((letter) => {
            return <ToggleButton value={letter}>{letter}</ToggleButton>;
          })}
        </ToggleButtonGroup>
      </Accordion>
    </div>
  );
}

import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles, TextField } from "@material-ui/core";
import { formatToReadableName } from "../../utils/helpers/string.helpers";

const useStyles = makeStyles((theme) => ({
  search: {
    maxWidth: 250,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  }
}));

export function SearchBar({ list, handleSelect }) {
  const classes = useStyles();
  return (
    <div>
      {list && (
        <Autocomplete
          freeSolo
          className={classes.search}
          disableClearable
          options={list.map((contact, index) => {
            return { ...contact, index };
          })}
          getOptionLabel={(contact) => formatToReadableName(contact)}
          onChange={(event, value) => {
            if (value) {
              handleSelect(value);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search contacts"
              margin="normal"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                type: "search"
              }}
            />
          )}
        />
      )}
    </div>
  );
}

import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { alpha, makeStyles, TextField } from "@material-ui/core";
import { formatToReadableName } from "../../utils/helpers/string.helpers";
import { useAddressBookData } from "../../context/AddressBookDataContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    },
    "& .MuiFormControl-marginNormal": {
      marginTop: 0,
      marginBottom: 0
    }
  },
  inputBase: {
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch"
      }
    }
  }
}));

export function SearchBar() {
  const classes = useStyles();
  const history = useHistory();

  const { contactList } = useAddressBookData();

  function handleSelect(value) {
    history.push(`/${value.index}`);
  }

  return (
    <div>
      {contactList && (
        <Autocomplete
          freeSolo
          className={classes.search}
          disableClearable
          options={contactList.map((contact, index) => {
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
              className={classes.inputBase}
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

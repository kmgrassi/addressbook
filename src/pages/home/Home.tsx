import {
  Avatar,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import HomePageLayout from "../../components/layout/HomeLayout";
import { useAddressBookData } from "../../context/AddressBookDataContext";
import { Contact } from "../../types";
import { formatToReadableName } from "../../utils/helpers/string.helpers";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    textAlign: "center"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  name: {
    textAlign: "center"
  },
  search: {
    maxWidth: 250,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  }
}));

function Home() {
  const classes = useStyles();
  const history = useHistory();

  const { isLoading, error, contactList } = useAddressBookData();

  function handleSelect(index) {
    history.push(`/${index}`);
  }

  if (error) return <h1>{"An error has occurred: " + error}</h1>;

  return (
    <HomePageLayout>
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
            console.log(value);
            //@ts-ignore
            if (value && value.index) {
              //@ts-ignore
              handleSelect(value.index);
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
      {isLoading && <CircularProgress />}
      {contactList &&
        contactList.map((contact: Contact, index) => {
          return (
            <Link to={`/${index}`} className={classes.link}>
              {index === 0 && <Divider />}
              <Grid
                key={index}
                container
                alignContent="space-between"
                justifyContent="center"
                spacing={4}
                className={classes.container}
              >
                <Grid item xs={3}>
                  <Avatar
                    alt={`${contact.name.first} + ${contact.name.last}`}
                    src={contact.picture.thumbnail}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1" className={classes.name}>
                    {formatToReadableName(contact)}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </Link>
          );
        })}
    </HomePageLayout>
  );
}

export default Home;

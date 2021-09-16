import {
  Avatar,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useAddressBookData } from "../../context/AddressBookDataContext";
import HomePageLayout from "../../components/layout/HomeLayout";
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
  }
}));

function Home() {
  const classes = useStyles();

  const { isLoading, error, contactList } = useAddressBookData();

  if (error) return <h1>{"An error has occurred: " + error}</h1>;

  return (
    <HomePageLayout>
      {isLoading && <CircularProgress />}
      {contactList.map((contact: Contact, index) => {
        return (
          <Link to={`/${index}`} className={classes.link}>
            <Grid
              key={index}
              container
              alignContent="space-between"
              justifyContent="center"
              spacing={4}
              className={classes.container}
            >
              <Grid item xs={4}>
                <Avatar
                  alt={`${contact.name.first} + ${contact.name.last}`}
                  src={contact.picture.thumbnail}
                />
              </Grid>
              <Grid item xs={4}>
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

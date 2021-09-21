import {
  Avatar,
  Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../../types";
import { formatToReadableName } from "../../utils/helpers/string.helpers";
import { StyledSpinner } from "../loading/StyledSpinner";

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

export function ContactList({ isLoading, contactList }) {
  const classes = useStyles();

  return (
    <div>
      {isLoading && !contactList && <StyledSpinner />}
      {contactList &&
        contactList.map((contact: Contact, index) => {
          return (
            <Link to={`/${index}`} className={classes.link} key={index}>
              {index === 0 && <Divider />}
              <Grid
                key={index}
                container
                alignContent="space-between"
                justifyContent="center"
                spacing={2}
                className={classes.container}
              >
                <Grid item xs={3}>
                  <Avatar
                    alt={`${contact.name.first} + ${contact.name.last}`}
                    src={contact.picture.thumbnail}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body1" className={classes.name}>
                    {formatToReadableName(contact)}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </Link>
          );
        })}
    </div>
  );
}

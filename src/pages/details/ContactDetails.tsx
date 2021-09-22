import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomePageLayout from "../../components/layout/HomeLayout";
import { StyledSpinner } from "../../components/loading/StyledSpinner";
import { Contact } from "../../types";
import {
  formatToReadableAddress,
  formatToReadableName
} from "../../utils/helpers/string.helpers";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    padding: 10
  },
  container: {
    textAlign: "left"
  },
  spinner: {
    flexGrow: 1,
    paddingTop: 200,
    height: 200,
    width: 200
  },
  image: {
    height: 250,
    marginBottom: 20
  },
  infoLabel: {
    color: "#A3A9B5",
    fontSize: 13,
    marginTop: 12
  },
  infoValue: {
    color: "#404040",
    fontSize: 13,
    marginTop: 12
  }
}));

export function ContactDetails({ contactList, isLoading }) {
  const classes = useStyles();
  const [contact, setContact] = useState<Contact>();

  let { index } = useParams();

  useEffect(() => {
    if (contactList) {
      setContact(contactList[index]);
    }
  }, [contactList, index]);

  return (
    <HomePageLayout>
      {isLoading && <StyledSpinner />}
      {!isLoading && contactList && contact && (
        <Card className={classes.root}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <CardMedia
                className={classes.image}
                image={contact.picture.large}
                title="Contemplative Reptile"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                {formatToReadableName(contact)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Grid container className={classes.container}>
                  <Grid item container xs={12}>
                    <Grid item xs={3}>
                      <Typography className={classes.infoLabel}>
                        Gender:
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography className={classes.infoValue}>
                        {contact.gender}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12}>
                    <Grid item xs={3}>
                      <Typography className={classes.infoLabel}>
                        Address:
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography className={classes.infoValue}>
                        {formatToReadableAddress(contact)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12}>
                    <Grid item xs={3}>
                      <Typography className={classes.infoLabel}>
                        Phone:
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography className={classes.infoValue}>
                        {contact.phone}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container xs={12}>
                    <Grid item xs={3}>
                      <Typography className={classes.infoLabel}>
                        Cell:
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography className={classes.infoValue}>
                        {contact.cell}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12}>
                    <Grid item xs={3}>
                      <Typography className={classes.infoLabel}>
                        Email:
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography className={classes.infoValue}>
                        {contact.email}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      )}
    </HomePageLayout>
  );
}

export default ContactDetails;

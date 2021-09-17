import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";

import { ContactList } from "../../components/contactList/ContactList";
import { Filters } from "../../components/filter/Filters";
import HomePageLayout from "../../components/layout/HomeLayout";

function Home() {
  return (
    <HomePageLayout>
      <ContactList />
    </HomePageLayout>
  );
}

export default Home;

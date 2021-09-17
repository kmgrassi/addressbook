import { Fab } from "@material-ui/core";
import NavigationIcon from "@mui/icons-material/Navigation";
import React from "react";
import { ContactList } from "../../components/contactList/ContactList";
import HomePageLayout from "../../components/layout/HomeLayout";

function Home() {
  return (
    <HomePageLayout>
      <ContactList />
    </HomePageLayout>
  );
}

export default Home;

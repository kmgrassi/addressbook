import { Fab } from "@material-ui/core";
import NavigationIcon from "@mui/icons-material/Navigation";
import React from "react";
import { ContactList } from "../../components/contactList/ContactList";
import HomePageLayout from "../../components/layout/HomeLayout";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ScrollTop } from "../../components/appBar/ScrollToTop";

function Home() {
  return (
    <HomePageLayout>
      <ContactList />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </HomePageLayout>
  );
}

export default Home;

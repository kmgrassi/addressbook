import { Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import { ScrollTop } from "../../components/appBar/ScrollToTop";
import { ContactList } from "../../components/contactList/ContactList";
import HomePageLayout from "../../components/layout/HomeLayout";

function Home() {
  return (
    <HomePageLayout>
      <ContactList />
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </HomePageLayout>
  );
}

export default Home;

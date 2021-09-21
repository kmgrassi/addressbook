import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddressBookDataWrapper } from "./context/AddressBookDataContext";

import ContactDetails from "./pages/details/ContactDetails";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AddressBookDataWrapper>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:index">
              <ContactDetails />
            </Route>
          </Switch>
        </Router>
      </AddressBookDataWrapper>
    </ThemeProvider>
  );
}

export default App;

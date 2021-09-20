import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddressBookDataWrapper } from "./context/AddressBookDataContext";

import ContactDetails from "./pages/details/ContactDetails";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AddressBookDataWrapper>
          <Router>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/:index">
                <ContactDetails />
              </Route>
            </Switch>
          </Router>
        </AddressBookDataWrapper>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

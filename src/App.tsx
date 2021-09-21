import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddressBookDataWrapper } from "./context/AddressBookDataContext";
import { useInitialData } from "./context/InitialDataContext";
import ContactDetails from "./pages/details/ContactDetails";
import Home from "./pages/home/Home";
import theme from "./theme";

function App() {
  const { initialList } = useInitialData();
  return (
    <ThemeProvider theme={theme}>
      <AddressBookDataWrapper initialList={initialList}>
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

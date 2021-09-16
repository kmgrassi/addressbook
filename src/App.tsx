import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddressBookDataWrapper } from "./context/AddressBookDataContext";
import "./App.css";
import ContactDetails from "./pages/details/ContactDetails";
import Home from "./pages/home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;

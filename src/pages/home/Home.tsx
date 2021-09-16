import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { ContactList } from "../../components/contactList/ContactList";
import { Filters } from "../../components/filter/Filters";
import HomePageLayout from "../../components/layout/HomeLayout";
import { SearchBar } from "../../components/search/SearchBar";
import { useAddressBookData } from "../../context/AddressBookDataContext";

function Home() {
  const history = useHistory();

  const { isLoading, error, contactList } = useAddressBookData();

  function handleSelect(value) {
    history.push(`/${value.index}`);
  }

  if (error) return <h1>{"An error has occurred: " + error}</h1>;

  return (
    <HomePageLayout>
      {isLoading && <CircularProgress />}

      <SearchBar handleSelect={handleSelect} list={contactList} />

      <Filters />

      <ContactList list={contactList} />
    </HomePageLayout>
  );
}

export default Home;

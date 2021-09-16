import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Contact } from "../types";

export const useGetRandomUserData = (results = 500) => {
  const { isLoading, error, data } = useQuery("contactList", () => {
    return fetch(`https://randomuser.me/api/?results=${results}`).then(
      (res) => {
        return res.json();
      }
    );
  });
  return [isLoading, error, data];
};

export const AddressBookDataWrapper = (props) => {
  const [contactList, setContactList] = useState<Contact[]>();

  // This is called with each render, which means that the api call will be made even if we have the data in localStorage
  const [isLoading, error, data] = useGetRandomUserData();

  useEffect(() => {
    const contactList = localStorage.getItem("list");

    // If we have a list already rendered in localStorage, set the contact list state
    if (contactList) {
      const parsed = JSON.parse(contactList);
      parsed.sort(function (a, b) {
        let lastA, lastB, locale;

        lastA = a.name.last; // Where 1 is your index, from your example
        lastB = b.name.last;
        locale = b.nat.toLowerCase();

        return lastA.localeCompare(lastB, locale, { sensitivity: "base" });
      });
      setContactList(parsed);
    } else {
      // Else set the localStorage to the data results
      if (data && data.results) {
        localStorage.setItem("list", JSON.stringify(data.results));
        setContactList(data.results);
      }
    }
  }, []);

  const value = {
    isLoading,
    error,
    contactList
  };
  return (
    <AddressBookDataContext.Provider value={value}>
      {props.children}
    </AddressBookDataContext.Provider>
  );
};

export const AddressBookDataContext = createContext({
  isLoading: false,
  error: {} as unknown | boolean,
  contactList: [] as Contact[]
});
export const useAddressBookData = () => useContext(AddressBookDataContext);

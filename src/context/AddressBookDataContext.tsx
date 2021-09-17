import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { Contact } from "../types";
import { aThroughM, nThroughZ } from "../utils/constants/alphabet";
import { applyFilters } from "../utils/helpers/filter.helpers";
import {
  getLocalStorageListAndSort,
  sortAlphabetical
} from "../utils/helpers/object.helpers";
import { useGetRandomUserData } from "./useGetRandomData";
const alphabet = aThroughM.concat(nThroughZ);

export const AddressBookDataWrapper = (props) => {
  const initialState = getLocalStorageListAndSort();

  const [contactList, setContactList] = useState<Contact[]>(initialState);
  const [genderFilter, setGenderFilter] = useState({
    male: true,
    female: true
  });

  const [allLetters, setAllLetters] = useState(true);

  const [alphabeticalFilter, setAlphaFilter] = useState(alphabet);

  // This is called with each render, which means that the api call will be made even if we have the data in localStorage.
  const [isLoading, error, data] = useGetRandomUserData();

  useEffect(() => {
    // This set the "all letters" toggle to the correct state
    if (alphabeticalFilter.length === 26) {
      setAllLetters(true);
    } else {
      setAllLetters(false);
    }

    // If changing back to original state, get the values from the initial state
    if (
      genderFilter.male &&
      genderFilter.female &&
      alphabeticalFilter.length === 26
    ) {
      setContactList(initialState);
    } else {
      setContactList(
        applyFilters(initialState, genderFilter, alphabeticalFilter)
      );
    }
  }, [genderFilter, alphabeticalFilter]);

  useEffect(() => {
    const contactList = localStorage.getItem("list");

    // If we have a list already set in local storage, set the contact list state
    if (contactList) {
      const parsed = JSON.parse(contactList);
      const sorted = sortAlphabetical(parsed);
      setContactList(sorted);
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
    contactList,
    genderFilter,
    setGenderFilter,
    alphabeticalFilter,
    setAlphaFilter,
    allLetters
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
  contactList: [] as Contact[],
  genderFilter: { male: true, female: true },
  setGenderFilter: (filter) => {},
  alphabeticalFilter: alphabet,
  setAlphaFilter: (filter) => {},
  allLetters: true
});
export const useAddressBookData = () => useContext(AddressBookDataContext);

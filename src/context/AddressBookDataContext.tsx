import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { Contact } from "../types";
import { alphabet } from "../utils/constants/alphabet";
import { applyFilters } from "../utils/helpers/filter.helpers";

// Context wrapper to handle filtering
export const AddressBookDataWrapper = (props) => {
  const [contactList, setContactList] = useState<Contact[]>(props.initialList);
  const [genderFilter, setGenderFilter] = useState({
    male: true,
    female: true
  });

  const [allLetters, setAllLetters] = useState(true);

  const [alphabeticalFilter, setAlphaFilter] = useState(alphabet);

  useEffect(() => {
    if (!contactList || contactList.length === 0) {
      setContactList(props.initialList);
    }
  }, [props.initialList]);

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
      setContactList(props.initialList);
    } else {
      setContactList(
        applyFilters(props.initialList, genderFilter, alphabeticalFilter)
      );
    }
  }, [genderFilter, alphabeticalFilter]);

  const value = {
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
  contactList: [] as Contact[],
  genderFilter: { male: true, female: true },
  setGenderFilter: (filter) => {},
  alphabeticalFilter: alphabet,
  setAlphaFilter: (filter) => {},
  allLetters: true
});
export const useAddressBookData = () => useContext(AddressBookDataContext);

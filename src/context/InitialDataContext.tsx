import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { Contact } from "../types";
import { sortAlphabetical } from "../utils/helpers/object.helpers";
import { useGetRandomUserData } from "./useGetRandomData";

// Context wrapper to fetch initial data and set local storage
export const InitialDataWrapper = (props) => {
  const [initialList, setInitialList] = useState<Contact[]>([]);

  // This is called with each render, which means that the api call will be made even if we have the data in localStorage.
  const { data, error, isLoading } = useGetRandomUserData();

  useEffect(() => {
    const contactList = localStorage.getItem("list");

    // If we have a list already set in local storage, set the contact list state
    if (contactList) {
      const parsed = JSON.parse(contactList);
      const sorted = sortAlphabetical(parsed);
      setInitialList(sorted);
    } else {
      // Else set the localStorage to the data results
      if (data && data.results) {
        localStorage.setItem("list", JSON.stringify(data.results));
        setInitialList(data.results);
      }
    }
  }, [data]);

  const value = { initialList, isLoading, error };
  return (
    <InitialDataContext.Provider value={value}>
      {props.children}
    </InitialDataContext.Provider>
  );
};

export const InitialDataContext = createContext({
  initialList: [] as Contact[],
  isLoading: false,
  error: {} as unknown | boolean
});
export const useInitialData = () => useContext(InitialDataContext);

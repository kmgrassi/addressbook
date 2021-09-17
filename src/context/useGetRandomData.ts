import { useQuery } from "react-query";

export const useGetRandomUserData = (results = 500, nationalities = "us") => {
  const { isLoading, error, data } = useQuery("contactList", () => {
    return fetch(
      `https://randomuser.me/api/?results=${results}&nat=${nationalities}`
    ).then((res) => {
      return res.json();
    });
  });
  return [isLoading, error, data];
};

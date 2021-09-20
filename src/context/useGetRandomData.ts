import { useQuery } from "react-query";

const basePath = "https://randomuser.me/api/";

export const useGetRandomUserData = (results = 500, nationalities = "us") => {
  return useQuery("contactList", () => {
    return fetch(`${basePath}?results=${results}&nat=${nationalities}`).then(
      (res) => {
        return res.json();
      }
    );
  });
};

export const sortAlphabetical = (list) => {
  if (!list) {
    return [];
  }
  return list.sort(function (a, b) {
    let lastA, lastB;

    lastA = a.name.last;
    lastB = b.name.last;

    return lastA.localeCompare(lastB);
  });
};

export const getLocalStorageListAndSort = () => {
  const contactList = localStorage.getItem("list");
  if (!contactList) {
    return null;
  }
  const parsed = JSON.parse(contactList);
  const sorted = sortAlphabetical(parsed);
  return sorted;
};

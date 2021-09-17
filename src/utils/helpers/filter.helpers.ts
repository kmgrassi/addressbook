export const applyFilters = (
  initialState,
  genderFilter,
  alphabeticalFilter
) => {
  // Filter will always compare the current filter to the initial state
  const filteredList = initialState.filter((contact) => {
    let genderMatch = false;
    // Check the contact gender
    const gender = contact.gender;

    // Match the gender to the filter and set the boolean
    if (gender === "female") {
      genderMatch = genderFilter.female;
    } else {
      genderMatch = genderFilter.male;
    }

    // Match the alphabetical filter
    const alphabeticalMatch = alphabeticalFilter.includes(
      contact.name.last[0].toLocaleString()
    );

    // If both gender and alphabetical match, the contact will be included in the filter
    return genderMatch && alphabeticalMatch;
  });

  return filteredList;
};

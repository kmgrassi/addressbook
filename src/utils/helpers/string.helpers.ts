export const formatToReadableName = (contact) => {
  if (!contact || !contact.name) {
    return "No name listed";
  }

  return `${contact.name.title}. ${contact.name.first} ${contact.name.last}`;
};

export const formatToReadableAddress = (contact) => {
  if (!contact || !contact.location) {
    return "No address listed";
  }
  return `${contact.location.street.number} ${contact.location.street.name}, ${contact.location.city}, ${contact.location.postcode}`;
};

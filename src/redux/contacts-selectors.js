export const getValue = state => state.contacts.filter;
export const getAllContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const allContacts = getAllContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

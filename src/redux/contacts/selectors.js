export const getContacts = ({ contacts }) => contacts.items;

export const getFilter = ({ filter }) => filter;

export const getVisibleFilter = ({ contacts, filter }) => {
  if (!filter || typeof filter !== 'string') {
    return contacts.items;
  }

  return contacts.items.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
};

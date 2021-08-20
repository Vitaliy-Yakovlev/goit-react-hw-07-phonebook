import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    name,
    id: shortid.generate(),
    number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/changeFilter');

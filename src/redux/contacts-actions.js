import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
// import * as actionTypes from './contacts-types';

export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    name,
    id: shortid.generate(),
    number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/changeFilter');

// export const addContact = ({ name, number }) => ({
//   type: actionTypes.ADD,
//   payload: {
//     name,
//     id: shortid.generate(),
//     number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: actionTypes.DELETE,
//   payload: contactId,
// });

// export const filterContact = value => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });

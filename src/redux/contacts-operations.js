import axios from 'axios';
import shortid from 'shortid';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3030';

export const fetchContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(error => dispatch(getContactsError(error.message)));
};

export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      id: shortid.generate(),
      number,
    };

    dispatch(addContactsRequest());

    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactsSuccess(data)))
      .catch(error => dispatch(addContactsError(error.message)));
  };

export const deleteContact = id => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch(error => dispatch(deleteContactsError(error.message)));
};

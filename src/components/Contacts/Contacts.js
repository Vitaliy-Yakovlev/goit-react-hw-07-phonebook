import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as contactsActions from '../../redux/contacts-actions';
import s from './Contacts.module.css';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export default function Contacts() {
  const contacts = useSelector(state =>
    getVisibleContacts(state.contacts.items, state.contacts.filter),
  );

  const dispatch = useDispatch();

  const onClick = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={s.item} key={id}>
            {name}: {number}
            <button className={s.btn} type="button" onClick={() => onClick(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as contactsActions from '../../redux/contacts-actions';
import s from './Contacts.module.css';

const Contacts = ({ contacts, onClick }) => {
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
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChangeFilter = e =>
    dispatch(contactsActions.filterContact(e.target.value));

  return (
    <label className={s.label}>
      Find contact by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
}

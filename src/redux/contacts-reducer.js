import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as action from './contacts-actions';

const itemsReducer = createReducer([], {
  [action.addContact]: (state, { payload }) => {
    const errorName = state.filter(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    );

    if (errorName.length) {
      toast.error(`${payload.name} is already in contacts`);
      return state;
    } else {
      return [...state, payload];
    }
  },

  [action.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [action.filterContact]: (_state, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

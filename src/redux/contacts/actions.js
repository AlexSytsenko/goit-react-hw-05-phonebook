
import * as types from './types';

export const addContact = value => ({
  type: types.ADD,
  payload: value,
});

export const deleteContact = value => ({
  type: types.DELETE,
  payload: value,
});

export const filterContacts = value => ({
  type: types.FILTER,
  payload: value,
});

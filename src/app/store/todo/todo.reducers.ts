import { createReducer, on } from '@ngrx/store';
import { Item } from '../../models/todo/todo';

import {
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  addItem,
  addItemFailure,
  addItemSuccess,
  removeItem,
  removeItemFailure,
  removeItemSuccess,
} from './todo.actions';

export interface TodoState {
  items: Item[];
  error: any;
  loading: boolean;
}

const initialState: TodoState = {
  items: [],
  error: null,
  loading: false,
};

interface LoadTodosSuccess {
  type: typeof loadTodosSuccess.type;
  items: Item[];
}

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadTodosSuccess, (state, action) => ({
    ...state,
    items: (action as LoadTodosSuccess).items,
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(addItem, (state) => ({
    ...state,
    loading: true,
  })),
  on(addItemSuccess, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
    loading: false,
  })),
  on(addItemFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(removeItem, (state) => ({
    ...state,
    loading: true,
  })),
  on(removeItemSuccess, (state, { itemId }) => ({
    ...state,
    loading: false,
  })),
  on(removeItemFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

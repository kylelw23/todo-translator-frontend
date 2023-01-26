import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/models/todo/todo';

export enum TodoActionTypes {
  ADD_ITEM = '[Todo] Add Item',
  ADD_ITEM_SUCCESS = '[Todo] Add Item Success',
  ADD_ITEM_FAILURE = '[Todo] Add Item Failure',
  LOAD_TODOS = '[Todo] Load Todos',
  LOAD_TODOS_SUCCESS = '[Todo] Load Todos Success',
  LOAD_TODOS_FAILURE = '[Todo] Load Todos Failure',
  REMOVE_ITEM = '[Todo] Remove Item',
  REMOVE_ITEM_SUCCESS = '[Todo] Remove Item Success',
  REMOVE_ITEM_FAILURE = '[Todo] Remove Item Failure',
  TRANSLATE = '[Todo] Translate Items',
  TRANSLATE_SUCCESS = '[Todo] Translate Items Success',
  TRANSLATE_FAILURE = '[Todo] Translate Items Failure',
}
export const addItem = createAction(
  TodoActionTypes.ADD_ITEM,
  props<{ item: Item }>()
);

export const addItemSuccess = createAction(
  TodoActionTypes.ADD_ITEM_SUCCESS,
  props<{ item: Item }>()
);

export const addItemFailure = createAction(
  TodoActionTypes.ADD_ITEM_FAILURE,
  props<{ error: any }>()
);

export const loadTodos = createAction(TodoActionTypes.LOAD_TODOS);

export const loadTodosSuccess = createAction(
  TodoActionTypes.LOAD_TODOS_SUCCESS,
  props<{ items: Item[] }>()
);

export const loadTodosFailure = createAction(
  TodoActionTypes.LOAD_TODOS_FAILURE,
  props<{ error: any }>()
);

export const removeItem = createAction(
  TodoActionTypes.REMOVE_ITEM,
  props<{ itemId: number }>()
);

export const removeItemSuccess = createAction(
  TodoActionTypes.REMOVE_ITEM_SUCCESS,
  props<{ itemId: any }>()
);

export const removeItemFailure = createAction(
  TodoActionTypes.REMOVE_ITEM_FAILURE,
  props<{ error: any }>()
);

export const translateItems = createAction(TodoActionTypes.TRANSLATE);

export const translateItemsSuccess = createAction(
  TodoActionTypes.TRANSLATE_SUCCESS,
  props<{ translatedList: string[] }>()
);

export const translateItemsFailure = createAction(
  TodoActionTypes.TRANSLATE_FAILURE,
  props<{ error: any }>()
);

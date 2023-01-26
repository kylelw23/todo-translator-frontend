import * as auth from './auth/auth.reducers';
import * as todo from './todo/todo.reducers';
import * as admin from './admin/admin.reducers';

export interface AppState {
  authState: auth.State;
  adminState: admin.AdminState;
  todoState: todo.TodoState;
}

export const reducers = {
  authState: auth.authReducer,
  todoState: todo.todoReducer,
  adminState: admin.adminReducer,
};

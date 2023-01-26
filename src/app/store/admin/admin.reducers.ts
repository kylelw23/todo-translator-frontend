import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { User, Credentials } from 'src/app/models/user/user';
import { UserUsage } from 'src/app/models/UserUsage/user-usage';
import {
  AdminActionTypes,
  checkAdminLogin,
  getAllUsers,
  getAllUsersSuccess,
  logIn,
  loginFailure,
  loginAdminSuccess,
  logOut,
  getUserUsage,
  getUserUsageSuccess,
  getUserUsageFailure,
} from './admin.actions';

export interface AdminState {
  loggedInAdmin: User | null;
  allUsers: User[];
  selectedUserUsage: UserUsage | null;
  isLoading: boolean;
  error: Error | null;
  isLoggedIn: boolean;
}

export type Error = {
  message?: string;
};

interface GetAllUsersSuccess {
  type: AdminActionTypes.GET_ALL_USERS_SUCCESS;
  users: User[];
}

export const initialState: AdminState = {
  loggedInAdmin: null,
  allUsers: [],
  selectedUserUsage: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

export const adminReducer = createReducer(
  initialState,
  on(logIn, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loginAdminSuccess, (state, { user }) => ({
    ...state,
    loggedInAdmin: user,
    isLoading: false,
    error: null,
    isLoggedIn: true,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    isLoggedIn: false,
  })),
  on(checkAdminLogin, (state) => state),
  on(logOut, (state) => ({
    ...state,
    user: null,
    isLoggedIn: false,
  })),
  on(getAllUsers, (state) => state),
  on(getAllUsersSuccess, (state, action) => ({
    ...state,
    allUsers: (action as GetAllUsersSuccess).users,
  })),
  on(getUserUsage, (state) => state),
  on(getUserUsageSuccess, (state, { userusage }) => ({
    ...state,
    selectedUserUsage: userusage,
  })),
  on(getUserUsageFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

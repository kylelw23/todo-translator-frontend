import { createReducer, on } from '@ngrx/store';
import { User, Credentials } from 'src/app/models/user/user';
import {
  checkUserLogin,
  logIn,
  loginUserFailure,
  loginUserSuccess,
  logOut,
  logoutCancelled,
  logoutConirmed,
  signUp,
  signupFailure,
  signupSuccess,
} from './auth.actions';

export interface State {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  signupSuccess: boolean;
  signupFailure: boolean;
  isLoggedIn: boolean;
}

export type Error = {
  message?: string;
};

export const initialState: State = {
  user: null,
  isLoading: false,
  error: { message: 'null' },
  signupSuccess: false,
  signupFailure: false,
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(logIn, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loginUserSuccess, (state, { user }) => ({
    ...state,
    user: user,
    isLoading: false,
    error: null,
    isLoggedIn: true,
  })),
  on(loginUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    isLoggedIn: false,
  })),
  on(checkUserLogin, (state) => state),
  on(logOut, (state) => ({
    ...state,
    user: null,
    isLoggedIn: false,
  })),
  on(signUp, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(signupSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null,
  })),
  on(signupFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(logoutCancelled, (state) => state),
  on(logoutConirmed, (state) => state)
);

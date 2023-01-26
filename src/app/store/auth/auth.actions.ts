import { createAction, props } from '@ngrx/store';
import { User, SignupData, Credentials } from 'src/app/models/user/user';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_USER_SUCCESS = '[Auth] Login User Success',
  LOGIN_USER_FAILURE = '[Auth] Login User Failure',
  CHECK_USER_LOGIN = '[Auth] Check User Login',
  SIGNUP = '[Auth] Signip',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',
  LOGOUT = '[Auth] Confirm Logout',
  LOGOUT_CANCELLED = '[Auth] Logout Cancelled',
  LOGOUT_CONFIRMED = '[Auth] Logout Confirmed',
}

export const logIn = createAction(
  AuthActionTypes.LOGIN,
  props<{ credentials: Credentials }>()
);

export const loginUserSuccess = createAction(
  AuthActionTypes.LOGIN_USER_SUCCESS,
  props<{ user: User }>()
);

export const loginUserFailure = createAction(
  AuthActionTypes.LOGIN_USER_FAILURE,
  props<{ error: any }>()
);

export const checkUserLogin = createAction(AuthActionTypes.CHECK_USER_LOGIN);

export const logOut = createAction(AuthActionTypes.LOGOUT);

export const signUp = createAction(
  AuthActionTypes.SIGNUP,
  props<{ signupData: SignupData }>()
);

export const signupSuccess = createAction(
  AuthActionTypes.SIGNUP_SUCCESS,
  props<{ user: User }>()
);

export const signupFailure = createAction(
  AuthActionTypes.SIGNUP_FAILURE,
  props<{ error: any }>()
);

export const logoutCancelled = createAction(AuthActionTypes.LOGOUT_CANCELLED);

export const logoutConirmed = createAction(AuthActionTypes.LOGOUT_CONFIRMED);

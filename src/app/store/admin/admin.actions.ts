import { createAction, props } from '@ngrx/store';
import { User, SigninData, Credentials } from 'src/app/models/user/user';
import { UserUsage } from 'src/app/models/UserUsage/user-usage';

export enum AdminActionTypes {
  LOGIN_ADMIN = '[Auth] Login Admin',
  LOGIN_ADMIN_SUCCESS = '[Auth] Login Admin Success',
  LOGIN_ADMIN_FAILURE = '[Auth] Login Admin Failure',
  CHECK_ADMIN_LOGIN = '[Auth] Check Admin Login',
  LOGOUT_ADMIN = '[Auth] Confirm Logout',
  GET_ALL_USERS = '[ALLUSERS] Get All Users',
  GET_ALL_USERS_SUCCESS = '[ALL USERS] Get All Users Success',
  GET_ALL_USERS_FAILURE = '[ALL USERS] Get All Users Failure',
  GET_USER_USAGE = '[USER USAGE] Get User Usage',
  GET_USER_USAGE_SUCCESS = '[GET USER USAGE SUCCESS] Get User Usage Success',
  GET_USER_USAGE_FAILURE = '[GET USER USAGE FAILURE] Get User Usage Failure',
}

export const logIn = createAction(
  AdminActionTypes.LOGIN_ADMIN,
  props<{ credentials: Credentials }>()
);

export const loginAdminSuccess = createAction(
  AdminActionTypes.LOGIN_ADMIN_SUCCESS,
  props<{ user: User }>()
);

export const loginFailure = createAction(
  AdminActionTypes.LOGIN_ADMIN_FAILURE,
  props<{ error: any }>()
);

export const checkAdminLogin = createAction(AdminActionTypes.CHECK_ADMIN_LOGIN);

export const logOut = createAction(AdminActionTypes.LOGOUT_ADMIN);

export const getAllUsers = createAction(AdminActionTypes.GET_ALL_USERS);

export const getAllUsersSuccess = createAction(
  AdminActionTypes.GET_ALL_USERS_SUCCESS,
  props<{ users: User[] }>()
);

export const getAllUsersFailure = createAction(
  AdminActionTypes.GET_ALL_USERS_FAILURE,
  props<{ error: any }>()
);

export const getUserUsage = createAction(
  AdminActionTypes.GET_USER_USAGE,
  props<{ userId: string | undefined }>()
);

export const getUserUsageSuccess = createAction(
  AdminActionTypes.GET_ALL_USERS_SUCCESS,
  props<{ userusage: UserUsage }>()
);

export const getUserUsageFailure = createAction(
  AdminActionTypes.GET_USER_USAGE_FAILURE,
  props<{ error: any }>()
);

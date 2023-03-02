import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';
import {
  logIn,
  loginUserSuccess,
  loginUserFailure,
  checkUserLogin,
  signIn,
  signinFailure,
  signinSuccess,
  logOut,
} from './auth.actions';
import { loginAdminSuccess } from '../admin/admin.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loadTodos } from '../todo/todo.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logIn),
      switchMap(({ credentials }) => {
        return this.authService.logIn(credentials).pipe(
          map((user) => {
            if (user.type == 'admin') {
              this.router.navigate(['/admin']);
              return loginAdminSuccess({ user });
            } else {
              this.router.navigate(['/todo']);
              return loginUserSuccess({ user });
            }
          }),
          catchError((error: HttpErrorResponse) => {
            this.store.dispatch(loginUserFailure({ error: error.error }));
            return of(loginUserFailure({ error: error.error }));
          })
        );
      })
    )
  );

  checkUserLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkUserLogin),
      switchMap(() => {
        return this.authService.checkLogin().pipe(
          map((user) => {
            return loginUserSuccess({ user });
          }),
          catchError((error) => {
            return of(loginUserFailure({ error }));
          })
        );
      })
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginUserSuccess),
        tap(() => {
          this.store.dispatch(loadTodos());
        })
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginUserFailure),
        tap(() => {
          this.snackBar.open('Authentication failed', 'Close', {
            duration: 5000,
          });
        })
      ),
    { dispatch: false }
  );

  signIn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signIn),
        switchMap(({ signinData }) => {
          return this.authService.signIn(signinData).pipe(
            map((user) => {
              return signinSuccess({ user });
            }),
            catchError((error: HttpErrorResponse) => {
              this.store.dispatch(signinFailure({ error: error.error }));
              return of(signinFailure({ error: error.error }));
            })
          );
        })
      ),
    { dispatch: true }
  );

  signInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signinSuccess),
        tap(() => {
          this.snackBar.open('Sign in successful', 'Close', {
            duration: 5000,
          });
        })
      ),
    { dispatch: false }
  );

  signInFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signinFailure),
        withLatestFrom(
          this.store.pipe(
            select((state) => state.authState && state.authState.error)
          )
        ),
        switchMap(([, error]) => {
          if (error?.message) {
            this.snackBar.open(error.message, 'Close', {
              duration: 5000,
            });
          } else {
            this.snackBar.open('Signin failed', 'Close', {
              duration: 5000,
            });
          }
          return of();
        })
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logOut),
        tap(() => {
          localStorage.removeItem('token'); // Remove token from local storage
          // Track log out date
          this.authService.logOut();
          this.router.navigate(['/login']); // Navigate to login page
        })
      ),
    { dispatch: false }
  );
}

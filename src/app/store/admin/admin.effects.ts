import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import {
  logIn,
  loginAdminSuccess,
  loginFailure,
  checkAdminLogin,
  logOut,
  getAllUsers,
  getAllUsersSuccess,
  getAllUsersFailure,
  getUserUsage,
  getUserUsageSuccess,
  getUserUsageFailure,
} from './admin.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  checkAdminLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkAdminLogin),
      switchMap(() => {
        return this.authService.checkLogin().pipe(
          map((user) => {
            return loginAdminSuccess({ user });
          }),
          catchError((error) => of(loginFailure({ error })))
        );
      })
    )
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logOut),
        tap(() => {
          localStorage.removeItem('token'); // Remove token from local storage
          this.router.navigate(['/login']); // Navigate to login page
        })
      ),
    { dispatch: false }
  );

  getAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllUsers),
      switchMap(() =>
        this.authService.getAllUsers().pipe(
          map((users) => {
            return getAllUsersSuccess({ users });
          }),
          catchError((error) => of(getAllUsersFailure({ error })))
        )
      )
    )
  );

  getUserUsage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserUsage),
      switchMap(({ userId }) => {
        return this.authService.getUserUsage(userId).pipe(
          map((userusage) => getUserUsageSuccess({ userusage })),
          catchError((error: HttpErrorResponse) => {
            return of(getUserUsageFailure({ error: error.error }));
          })
        );
      })
    )
  );
}

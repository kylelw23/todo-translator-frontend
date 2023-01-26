import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  switchMap,
  catchError,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';

import {
  addItem,
  addItemFailure,
  addItemSuccess,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeItem,
  removeItemFailure,
  removeItemSuccess,
} from './todo.actions';
import { TodoService } from 'src/app/services/todo.service';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      withLatestFrom(
        this.store.select((state) => {
          return state.authState.user;
        })
      ),
      switchMap(([action, user]) =>
        this.todoService.getTodos(user?.id).pipe(
          map((items) => {
            return loadTodosSuccess({ items });
          }),
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      withLatestFrom(this.store.select((state) => state.authState.user)),
      switchMap(([action, user]) =>
        this.todoService.addItem(action.item, user?.id).pipe(
          map((createdTodo) => addItemSuccess({ item: createdTodo })),
          catchError((error) => of(addItemFailure({ error })))
        )
      )
    )
  );

  addItemSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItemSuccess),
      switchMap(() => {
        return of(loadTodos());
      })
    )
  );

  removeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeItem),
      switchMap(({ itemId }) =>
        this.todoService.deleteItem(itemId).pipe(
          map(() => removeItemSuccess({ itemId })),
          catchError((error) => of(removeItemFailure({ error })))
        )
      )
    )
  );

  removeItemSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(removeItemSuccess),
        tap(() => {
          this.store.dispatch(loadTodos());
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private store: Store<AppState>
  ) {}
}

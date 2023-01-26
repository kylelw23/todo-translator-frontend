import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { removeItem, addItem } from '../../store/todo/todo.actions';
import { Item } from '../../models/todo/todo';
import { User } from 'src/app/models/user/user';
import { checkUserLogin } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  items$: Item[] = [];
  user$: User = new User();
  error$: Observable<any>;
  showTranslation: boolean = false;

  newItem = new Item();

  constructor(private store: Store<AppState>) {
    this.store.dispatch(checkUserLogin());
    this.error$ = this.store.select((state) => state.todoState.error);
  }

  ngOnInit() {
    this.store
      .select((state) => state.todoState.items)
      .pipe(map((todos) => todos))
      .subscribe((todos) => {
        this.items$ = todos['todos'];
      });
  }

  addItem() {
    this.store.dispatch(addItem({ item: this.newItem }));
    this.newItem = new Item();
  }

  deleteItem(item: Item) {
    if (item.id) {
      this.store.dispatch(removeItem({ itemId: item.id }));
    }
  }

  showTranslations() {
    this.showTranslation = true;
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { removeItem, addItem } from '../../store/todo/todo.actions';
import { Item } from '../../models/todo/todo';
import { User } from 'src/app/models/user/user';
import { checkUserLogin } from 'src/app/store/auth/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  items$: Item[] = [];
  user$: User | null = new User();
  error$: Observable<any>;
  showTranslation: boolean = false;

  newItem = new Item();
  private baseUrl = `${environment.apiUrl}`;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private http: HttpClient
  ) {
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

    this.store
      .select((state) => state.authState.user)
      .subscribe((user) => {
        this.user$ = user;
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
    this.http
      .get(`${this.baseUrl}/userusage/track/${this.user$?.id}`)
      .subscribe(
        (response) => {
          console.log('GET request successful:', response);
        },
        (error) => {
          console.error('Error sending GET request:', error);
        }
      );
  }
}

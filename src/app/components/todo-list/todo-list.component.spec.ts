import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { TodoListComponent } from './todo-list.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let todoListComponent: TodoListComponent;
  let todoListFixture: ComponentFixture<TodoListComponent>;

  let navigationComponent: NavigationComponent;
  let navigationFixture: ComponentFixture<NavigationComponent>;

  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        FormsModule,
      ],
      declarations: [TodoListComponent, NavigationComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    todoListFixture = TestBed.createComponent(TodoListComponent);
    todoListComponent = todoListFixture.componentInstance;

    navigationFixture = TestBed.createComponent(NavigationComponent);
    navigationComponent = navigationFixture.componentInstance;

    todoListFixture.detectChanges();
    navigationFixture.detectChanges();
  });

  it('should create TodoListComponent', () => {
    expect(todoListComponent).toBeTruthy();
  });

  it('should create NavigationComponent', () => {
    expect(navigationComponent).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { UserUsageComponent } from './userusage.component';
import { NavigationComponent } from '../navigation/navigation.component';

describe('UserusageComponent', () => {
  let userUsageComponent: UserUsageComponent;
  let userUsageFixture: ComponentFixture<UserUsageComponent>;

  let navigationComponent: NavigationComponent;
  let navigationFixture: ComponentFixture<NavigationComponent>;

  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatButtonModule],
      declarations: [UserUsageComponent, NavigationComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });
  beforeEach(() => {
    userUsageFixture = TestBed.createComponent(UserUsageComponent);
    userUsageComponent = userUsageFixture.componentInstance;

    navigationFixture = TestBed.createComponent(NavigationComponent);
    navigationComponent = navigationFixture.componentInstance;

    userUsageFixture.detectChanges();
    navigationFixture.detectChanges();
  });

  it('should create UserUsageComponent', () => {
    expect(userUsageComponent).toBeTruthy();
  });

  it('should create NavigationComponent', () => {
    expect(navigationComponent).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { NavigationComponent } from '../navigation/navigation.component';
import { AdminComponent } from './admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

describe('AdminComponent', () => {
  let adminComponent: AdminComponent;
  let adminFixture: ComponentFixture<AdminComponent>;

  let navigationComponent: NavigationComponent;
  let navigationFixture: ComponentFixture<NavigationComponent>;

  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
      ],
      declarations: [AdminComponent, NavigationComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    adminFixture = TestBed.createComponent(AdminComponent);
    adminComponent = adminFixture.componentInstance;

    navigationFixture = TestBed.createComponent(NavigationComponent);
    navigationComponent = navigationFixture.componentInstance;

    adminFixture.detectChanges();
    navigationFixture.detectChanges();
  });

  it('should create AdminComponent', () => {
    expect(adminComponent).toBeTruthy();
  });

  it('should create NavigationComponent', () => {
    expect(navigationComponent).toBeTruthy();
  });
});

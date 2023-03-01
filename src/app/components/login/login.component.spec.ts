import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';
import { NavigationModule } from '../navigation/navigation.module';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppLoadingComponent } from '../loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('loginComponent', () => {
  let loginComponent: LoginComponent;
  let loginFixture: ComponentFixture<LoginComponent>;

  let navigationComponent: NavigationComponent;
  let navigationFixture: ComponentFixture<NavigationComponent>;

  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, NavigationComponent, AppLoadingComponent],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        NavigationModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    loginFixture = TestBed.createComponent(LoginComponent);
    loginComponent = loginFixture.componentInstance;

    navigationFixture = TestBed.createComponent(NavigationComponent);
    navigationComponent = navigationFixture.componentInstance;

    loginFixture.detectChanges();
    navigationFixture.detectChanges();
  });

  it('should create LoginComponent', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('should create NavigationComponent', () => {
    expect(navigationComponent).toBeTruthy();
  });

  it('should have a form with email and password controls', () => {
    expect(loginComponent.loginForm.contains('email')).toBeTruthy();
    expect(loginComponent.loginForm.contains('password')).toBeTruthy();
  });

  it('should make email control required', () => {
    const control = loginComponent.loginForm.get('email');
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    } else {
      fail('Email control is not defined');
    }
  });

  it('should make password control required', () => {
    const control = loginComponent.loginForm.get('password');
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    } else {
      fail('Password control is not defined');
    }
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { SigninComponent } from './signin.component';
import { NavigationModule } from '../navigation/navigation.module';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SigninComponent', () => {
  let signinComponent: SigninComponent;
  let signinFixture: ComponentFixture<SigninComponent>;

  let navigationComponent: NavigationComponent;
  let navigationFixture: ComponentFixture<NavigationComponent>;

  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent, NavigationComponent],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        NavigationModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    signinFixture = TestBed.createComponent(SigninComponent);
    signinComponent = signinFixture.componentInstance;

    navigationFixture = TestBed.createComponent(NavigationComponent);
    navigationComponent = navigationFixture.componentInstance;

    signinFixture.detectChanges();
    navigationFixture.detectChanges();
  });

  it('should create SigninComponent', () => {
    expect(signinComponent).toBeTruthy();
  });

  it('should create NavigationComponent', () => {
    expect(navigationComponent).toBeTruthy();
  });

  it('should have a form with email and password controls', () => {
    expect(signinComponent.signinForm.contains('email')).toBeTruthy();
    expect(signinComponent.signinForm.contains('password')).toBeTruthy();
  });

  it('should make email control required', () => {
    const control = signinComponent.signinForm.get('email');
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    } else {
      fail('Email control is not defined');
    }
  });

  it('should make password control required', () => {
    const control = signinComponent.signinForm.get('password');
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    } else {
      fail('Password control is not defined');
    }
  });
});

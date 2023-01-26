import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { SignupComponent } from './signup.component';
import { NavigationModule } from '../navigation/navigation.module';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SignupComponent', () => {
  let signupComponent: SignupComponent;
  let signupFixture: ComponentFixture<SignupComponent>;

  let navigationComponent: NavigationComponent;
  let navigationFixture: ComponentFixture<NavigationComponent>;

  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent, NavigationComponent],
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
    signupFixture = TestBed.createComponent(SignupComponent);
    signupComponent = signupFixture.componentInstance;

    navigationFixture = TestBed.createComponent(NavigationComponent);
    navigationComponent = navigationFixture.componentInstance;

    signupFixture.detectChanges();
    navigationFixture.detectChanges();
  });

  it('should create SignupComponent', () => {
    expect(signupComponent).toBeTruthy();
  });

  it('should create NavigationComponent', () => {
    expect(navigationComponent).toBeTruthy();
  });

  it('should have a form with email and password controls', () => {
    expect(signupComponent.signupForm.contains('email')).toBeTruthy();
    expect(signupComponent.signupForm.contains('password')).toBeTruthy();
  });

  it('should make email control required', () => {
    const control = signupComponent.signupForm.get('email');
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    } else {
      fail('Email control is not defined');
    }
  });

  it('should make password control required', () => {
    const control = signupComponent.signupForm.get('password');
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    } else {
      fail('Password control is not defined');
    }
  });
});

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUp } from '../../store/auth/auth.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  snackBar: MatSnackBar;

  constructor(
    private store: Store<{ auth: AppState }>,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.snackBar = matSnackBar;
  }

  ngOnInit() {}

  onSubmit() {
    const payload = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    };
    this.store.dispatch(signUp({ signupData: payload }));
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}

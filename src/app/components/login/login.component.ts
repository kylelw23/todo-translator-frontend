import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from 'src/app/models/user/user';
import { AppState } from '../../store/app.state';
import { logIn } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading = false;
  user: User = new User();
  snackBar: MatSnackBar;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private matSnackBar: MatSnackBar
  ) {
    this.snackBar = matSnackBar;
  }

  ngOnInit(): void {}

  onSubmit() {
    const payload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.store.dispatch(logIn({ credentials: payload }));
  }

  onLoginSuccess() {
    this.router.navigate(['/todo']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}

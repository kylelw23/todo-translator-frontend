import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signIn } from '../../store/auth/auth.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
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
      username: this.signinForm.value.username,
      email: this.signinForm.value.email,
      password: this.signinForm.value.password,
    };
    this.store.dispatch(signIn({ signinData: payload }));
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}

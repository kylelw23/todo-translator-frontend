import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { logOut } from 'src/app/store/auth/auth.actions';
import { logOut as adminLougout } from 'src/app/store/admin/admin.actions';

@Component({
  selector: 'app-navigation-bar',
  template: `
    <mat-toolbar color="primary">
      <span *ngIf="!isAdminLoggedIn">Todo Translator</span>
      <span *ngIf="isAdminLoggedIn">Todo Translator - Admin</span>
      <span class="fill-remaining-space"></span>
      <button
        *ngIf="isLoggedIn || isAdminLoggedIn"
        mat-raised-button
        (click)="onLogout()"
      >
        Log Out
      </button>
    </mat-toolbar>
  `,
  styles: [
    `
      .fill-remaining-space {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class NavigationComponent {
  isLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.store
      .select((state) => state.authState.isLoggedIn)
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      });
    this.store
      .select((state) => state.adminState.isLoggedIn)
      .subscribe((isLoggedIn) => {
        this.isAdminLoggedIn = isLoggedIn;
      });
  }

  onLogout() {
    this.store.dispatch(logOut());
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { User } from '../../models/user/user';
import { Router } from '@angular/router';
import {
  checkAdminLogin,
  getAllUsers,
  getUserUsage,
} from 'src/app/store/admin/admin.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userList$: Observable<User[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.userList$ = this.store.select((state) => state.adminState.allUsers);
    this.store.dispatch(checkAdminLogin());
  }

  ngOnInit(): void {
    this.store.dispatch(getAllUsers());
  }

  showUserDetails(userId: string | undefined) {
    this.store.dispatch(getUserUsage({ userId }));
    this.router.navigate(['/userusage', userId]);
  }
}

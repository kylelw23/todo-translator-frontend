import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import {
  checkAdminLogin,
  getUserUsage,
} from 'src/app/store/admin/admin.actions';
import { UserUsage } from '../../models/UserUsage/user-usage';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-userusage',
  templateUrl: './userusage.component.html',
  styleUrls: ['./userusage.component.scss'],
})
export class UserUsageComponent implements OnInit {
  userUsage: UserUsage | null = null;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.store.dispatch(checkAdminLogin());
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const userId = params['userid'];
          this.store.dispatch(getUserUsage({ userId }));
          return of(null); // Return an observable that emits null
        })
      )
      .subscribe();

    this.store
      .select((state) => state.adminState.selectedUserUsage)
      .subscribe((userUsage) => (this.userUsage = userUsage));
  }
}

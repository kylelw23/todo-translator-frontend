import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AppState } from './store/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.checkLogin().pipe(
      map((user) => {
        if (user.type == 'user') {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkLogin().pipe(
      map((user) => {
        if (user.type == 'admin') {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}

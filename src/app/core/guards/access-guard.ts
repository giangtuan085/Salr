import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  UrlTree, NavigationExtras, Router, CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthenticationService } from '../services/auth/authentication.service';

@Injectable()
export class AccessGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private auth: AuthenticationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const navigationExtras: NavigationExtras = {
      queryParams: { redirectUrl: next.url }
    };

    if (this.auth.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['login'], navigationExtras);
      return false;
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
}

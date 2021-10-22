import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  NavigationExtras,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserRole } from '../models/user';
import { AuthenticationService } from '../services/auth/authentication.service';

@Injectable()
export class AdminRoleGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private auth: AuthenticationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const navigationExtras: NavigationExtras = {
      queryParams: { redirectUrl: next.url },
    };

    if (this.auth.isAuthenticated) {
      const userRoles = this.auth.currentUser?.role;
      const roleAccess = userRoles === UserRole.Admin;
      if (!roleAccess) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
}

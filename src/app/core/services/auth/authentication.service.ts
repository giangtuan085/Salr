import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from '../../constants/constants';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user = new BehaviorSubject<User | null>(null);

  constructor() {
    this.user.next(JSON.parse(localStorage.getItem(UserInfo) || 'null'));
  }

  public saveUserInfo(user: User): void {
    this.user.next(user);
  }

  public removeUserInfo(): void {
    localStorage.removeItem(UserInfo);
    this.user.next(null);
  }

  public get isAuthenticated(): boolean {
    // TODO: authentication with real user
    if (localStorage.getItem(UserInfo)) {
      return true;
    }
    return false;
  }

  public get currentUser(): User | null {
    return this.user.getValue();
  }
}

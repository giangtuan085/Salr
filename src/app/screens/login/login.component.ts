import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from 'src/app/core/constants/constants';
import { User, UserRole } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  public login(): void {
    if (this.form.valid) {
      const user: User = {
        userName: this.form.controls.username.value,
        role:
          this.form.controls.username.value === 'admin'
            ? UserRole.Admin
            : UserRole.Upload,
        token: 'asd',
      };

      localStorage.setItem(UserInfo, JSON.stringify(user));
      this.authService.saveUserInfo(user);
      // navigate
      this.router.navigate([
        this.route.snapshot.queryParams.returnUrl || '/',
      ]);
    }
  }
}

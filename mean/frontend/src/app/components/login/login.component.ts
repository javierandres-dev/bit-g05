import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private jwtHelper: JwtHelperService
  ) {}

  user = {
    email: '',
    password: '',
  };

  login() {
    if (!this.user.email || !this.user.password) {
      this.toastr.info('All fields are require', 'Info!');
    } else {
      this.loginService.login(this.user).subscribe(
        (res) => {
          if (res.token) {
            const decoded = this.jwtHelper.decodeToken(res.token);
            this.toastr.success(`Hello, ${decoded.name}!`, 'Welcome!');
            localStorage.setItem('token', res.token);
            this.router.navigate(['/tasks']);
          } else {
            this.toastr.warning(`${res.message}`, 'Warning!');
          }
        },
        (err) => {
          this.toastr.error(
            'An error ocurred, please try again later',
            'Error!'
          );
        }
      );
    }
  }
}

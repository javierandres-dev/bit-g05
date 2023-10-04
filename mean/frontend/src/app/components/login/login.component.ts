import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  user = {
    email: '',
    password: '',
  };

  login() {
    this.loginService.login(this.user).subscribe(
      (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/tasks']);
        }
      },
      (err) => {
        console.log('error:', err);
      }
    );
  }
}

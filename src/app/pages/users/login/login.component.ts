import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private usersService: UsersService) {}

  handleLogin(event: Event) {
    event.preventDefault();
    this.usersService.login(this.email, this.password).subscribe(
      response => {
        const { token } = response;
        localStorage.setItem('token', token);
        if (this.email.endsWith('@tecsup.edu.pe')) {
          this.router.navigate(['/crear-usuario']);
        } else {
          this.router.navigate(['/crear-usuario']);
        }
      },
      error => {
        console.error('Error iniciando sesión:', error);
        alert('Error iniciando sesión');
      }
    );
  }

  handleRegisterRedirect() {
    this.router.navigate(['/crear-usuario']);
  }
}

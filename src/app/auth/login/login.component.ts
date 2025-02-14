import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html', 
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;
  passwordVisible = false;

  constructor(private authService: AuthService) {}

  onLogin() {
    if (!this.authService.login(this.username, this.password)) {
      this.loginError = true;
    }
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = signal(false);

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated.set(false);
  }
}

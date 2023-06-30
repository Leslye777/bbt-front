import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private session: SessionStorageService, private router: Router) {}

  canActivate(): boolean {
    const token = this.session.get('token');

    if (token) {
      // O usuário possui um token válido, permitir a navegação
      return true;
    }

    // O usuário não possui um token válido, redirecionar para a página de login
    this.router.navigate(['/login']);
    return false;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // Validação simples: se as credenciais forem 'admin' (tanto para usuário quanto para senha),
    // retorna sucesso (simulado); caso contrário, retorna falha.
    if (username === 'admin' && password === 'admin') {
      return of({ success: true });
    } else {
      return of({ success: false });
    }

    /*
    // Código original de integração com API de autenticação:
    const url = 'http://localhost:8765/hr-oauth/oauth/token';

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('myappname123' + ':' + 'myappsecret123')
    });

    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');

    return this.http.post(url, body.toString(), { headers });
    */
  }
}

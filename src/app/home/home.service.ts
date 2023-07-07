import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = 'http://localhost:8765/user/api/';

  constructor(private http: HttpClient, private session: SessionStorageService) { }

  getUser(id: Number): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.baseUrl+'users/'+id,{headers});
  }

  getUserByEmail(email: String): Observable<any>{
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.baseUrl+'users/search?email='+email,{headers});
  }

  getNotes(): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>('http://localhost:8765/user/api/notifications', { headers });
  }


  private getAuthorizationHeaders(): HttpHeaders {
    const token = this.session.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return headers;
  }
}

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


  // getBooks(): Observable<any> {
  //   const headers = this.getAuthorizationHeaders();
  //   return this.http.get<any>(this.baseUrl + 'books', { headers });
  // }

  // getBookCopiesByBookId(id: number): Observable<any> {
  //   const headers = this.getAuthorizationHeaders();
  //   return this.http.get<any>(this.baseUrl + 'book-copies/book-id/' + id, { headers });
  // }


  private getAuthorizationHeaders(): HttpHeaders {
    const token = this.session.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return headers;
  }
}

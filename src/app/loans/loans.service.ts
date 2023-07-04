import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  private baseUrl = 'http://localhost:8765/lib/api/';
  private url2 = 'http://localhost:8765/user/api/';

  constructor(private http: HttpClient, private session: SessionStorageService) { }

  getLoans(): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.baseUrl+'loans', {headers});
  }

  getLoansByUser(id: number): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.baseUrl+'loans/user/'+id, {headers});
  }

  getLoan(id: number): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.baseUrl+'loans/'+id, {headers});
  }

  getUser(id: number): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.baseUrl+'loans/'+id, {headers});
  }

  putRenew(id: Number):Observable<any> {
    const options = { headers: this.getAuthorizationHeaders() };
    const headers = this.getAuthorizationHeaders();
    return this.http.put<any>(this.baseUrl + 'loans/' + id + '/renew', {}, options);
  }

  getUserById(id: Number): Observable<any>{
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.url2+'users/'+id,{headers});
  }



  getUserByEmail(email: String): Observable<any>{
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.url2+'users/search?email='+email,{headers});

  }

  borrowBook(userId: number, bookCopyId: number): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    const url = `${this.baseUrl}loans?userId=${userId}&bookCopyId=${bookCopyId}`;

    return this.http.post(url, null, { headers });
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

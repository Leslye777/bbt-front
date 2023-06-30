import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8765/lib/api/';

  constructor(private http: HttpClient, private session: SessionStorageService) { }

  getBooks(): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.baseUrl + 'books', { headers });
  }

  getBookCopiesByBookId(id: number): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.get<any>(this.baseUrl + 'book-copies/book-id/' + id, { headers });
  }

  createBook(book: any): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.post<any>(this.baseUrl + 'books', book, { headers });
  }

  updateBook(book: any, id: number): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.put<any>(this.baseUrl + 'books/' + id, book, { headers });
  }

  private getAuthorizationHeaders(): HttpHeaders {
    const token = this.session.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return headers;
  }

  // outros métodos aqui, se necessário...
}

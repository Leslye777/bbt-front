import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8765/lib/api/';

  constructor(private http: HttpClient) { }

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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODgxMTQ4NjksInVzZXJfbmFtZSI6Im5pbmFAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlsiVVNFUiJdLCJqdGkiOiJiZjA4N2JkZi03YjUxLTQyOTAtODkxZi00MTMxOWEwOTViMDUiLCJjbGllbnRfaWQiOiJteWFwcG5hbWUxMjMiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.0QXqNR689_Ldrapglc39lMsB5JaLinzYx9ryISwIcuo'; // Substitua pelo token de acesso real
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return headers;
  }

  // outros métodos aqui, se necessário...
}

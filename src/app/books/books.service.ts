import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8001/api/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'books');
  }

  getBookCopiesByBookId(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl+'book-copies/book-id/'+id);
  }



  // outros métodos aqui, se necessário...
}

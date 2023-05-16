import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  private baseUrl = 'http://localhost:8001/api/';

  constructor(private http: HttpClient) { }

  getLoans(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'loans');
  }
}

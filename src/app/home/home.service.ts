import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = 'http://localhost:8765/user/api/';

  constructor(private http: HttpClient) { }

  getUser(id: Number): Observable<any> {
    return this.http.get<any>(this.baseUrl+'users/'+id);
  }

}

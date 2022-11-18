import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CentroSaludService {
  baseUrl: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl + 'centrosalud');
  }
}

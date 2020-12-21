import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Revenue } from '../core/models/revenue';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(
    public http: HttpClient
    ) { }

  baseUrl = 'http://localhost:3000/';

  getRevenues(): Observable<Revenue[]> {
    return this.http.get<Revenue[]>(`${this.baseUrl}revenues`);
  }

  createRevenue(payload: Revenue): Observable<Revenue> {
    return this.http.post<Revenue>(this.baseUrl + 'revenues', payload)
  }
}
